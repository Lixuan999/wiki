<template>
    <div id="app">
        <template v-if="fullscreen">
            <router-view></router-view>
        </template>
        <el-container v-else>
            <el-aside style="background: #fafafa;">
                <div style="padding: 10px;height: 100%;box-sizing: border-box;">
                    <div style="margin-bottom: 10px;">
                        <el-select v-model="choiceDatasourceGroup" @change="sourceGroupChangeEvents" size="small" filterable placeholder="请先选择分组" style="width: 100%;">
							<el-option value="" label="全部分组"></el-option>
							<el-option v-for="item in datasourceGroupList" :key="item" :value="item"></el-option>
                        </el-select>
                        <el-select v-model="choiceDatasourceId" @change="datasourceChangeEvents" size="small" filterable placeholder="请先选择数据源" style="width: 100%;margin-top: 10px;">
                            <el-option v-for="item in datasourceOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <el-menu :router="true" class="el-menu-vertical" style="height: auto;">
                        <el-menu-item index="/data/datasourceManage"><i class="el-icon-coin"></i>数据源管理</el-menu-item>
                        <el-menu-item index="/data/executor"><i class="el-icon-video-play"></i>SQL执行器</el-menu-item>
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-s-platform"></i>
                                <span slot="title">管理工具</span>
                            </template>
                            <el-menu-item index="/data/export"><i class="el-icon-finished"></i>数据库表导出</el-menu-item>
                            <el-menu-item index="/data/transferData"><i class="el-icon-document-copy"></i>数据互导工具</el-menu-item>
                        </el-submenu>
                    </el-menu>
					<el-tree :props="defaultProps" :data="databaseList" @node-click="handleNodeClick"
							 ref="databaseTree" highlight-current empty-text=""
							 :default-expanded-keys="databaseExpandedKeys"
							 node-key="id" @node-expand="handleNodeExpand"
							 class="database-list-tree" style="overflow-x: auto;">
						<div slot-scope="{node, data}">
							<span v-if="data.needLoad"><i class="el-icon-loading"></i></span>
							<span v-else>
								{{node.label}}
								<el-tooltip v-if="!!data.comment" effect="dark" :content="data.comment" placement="top-start" :open-delay="600">
									<span style="color: #aaa;">-{{data.comment}}</span>
								</el-tooltip>
								<el-dropdown v-if="data.type == 1" @command="databaseActionDropdown">
									<i class="el-icon-more" @click.stop=""></i>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item icon="el-icon-refresh" :command="{command: 'refresh', node: node}">刷新</el-dropdown-item>
<!--										<el-dropdown-item icon="el-icon-upload2" :command="{command: 'upload', node: node}">导入</el-dropdown-item>-->
<!--										<el-dropdown-item icon="el-icon-download" :command="{command: 'download', node: node}">导出</el-dropdown-item>-->
									</el-dropdown-menu>
								</el-dropdown>
							</span>
						</div>
					</el-tree>
                </div>
            </el-aside>
            <el-container>
                <el-header>
                    <span class="header-right-user-name">{{userSelfInfo.userName}}</span>
                    <el-dropdown @command="userSettingDropdown" trigger="click">
                        <i class="el-icon-setting" style="margin-right: 15px; font-size: 16px;cursor: pointer;color: #fff;"> </i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="console">控制台</el-dropdown-item>
                            <el-dropdown-item command="myInfo">我的资料</el-dropdown-item>
                            <el-dropdown-item command="userSignOut">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-header>
                <el-main style="padding: 0;">
					<router-view @initLoadDataList="initLoadDataList"
								 @loadDatasourceList="loadDatasourceList">
					</router-view>
				</el-main>
			</el-container>
        </el-container>
    </div>
</template>

<script>
    import userApi from './common/api/user'
    import datasourceApi from './common/api/datasource'

    export default {
        data() {
            return {
                isCollapse: false,
                aboutDialogVisible: false,
                userSelfInfo: {},
                // 数据源相关
                datasourceOptions: [],
                datasourceList: [],
				datasourceGroupList: [],
                choiceDatasourceId: "",
				choiceDatasourceGroup: "",
                defaultProps: {children: 'children', label: 'name'},
                // 页面展示相关
                nowDatasourceShow: {},
                databaseList: [],
                databaseExpandedKeys: [],
                // 升级信息
                upgradeInfo: {},
            }
        },
		computed: {
			fullscreen () {
				return this.$store.state.global.fullscreen;
			}
		},
        mounted: function () {
            this.getSelfUserInfo();
            this.checkSystemUpgrade();
            this.loadDatasourceList();
        },
        methods: {
            userSettingDropdown(command) {
                console.log("command:" + command);
                if (command == 'userSignOut') {
                    this.userSignOut();
                } else if (command == 'aboutDoc') {
                    this.aboutDialogVisible = true;
                } else if (command == 'myInfo') {
                    this.$router.push({path: '/user/myInfo'});
                } else if (command == 'console') {
                    window.location = process.env.VUE_APP_BASE_API;
                } else {
					this.$message.warning("功能暂未开放");
                }
            },
            userSignOut() {
                userApi.userLogout().then(() => {
                    location.reload();
                });
            },
            getSelfUserInfo() {
                userApi.getSelfUserInfo().then(json=>{
                    this.userSelfInfo = json.data;
                });
            },
			sourceGroupChangeEvents() {
				let datasourceOptions = [];
				for (let i = 0; i < this.datasourceList.length; i++) {
					let item = this.datasourceList[i];
					if (!this.choiceDatasourceGroup || this.choiceDatasourceGroup == item.groupName) {
						datasourceOptions.push({label: item.name, value: item.id});
					}
				}
				this.datasourceOptions = datasourceOptions;
            },
            datasourceChangeEvents() {
				this.nowDatasourceShow = this.choiceDatasourceId;
                var host = "";
                for (var i = 0; i < this.datasourceList.length; i++) {
                    if (this.datasourceList[i].id == this.choiceDatasourceId) {
                        host = this.datasourceList[i].name;
                        break;
                    }
                }
				this.loadDatabaseList(this.choiceDatasourceId, host);
            },
            handleNodeClick(node) {
                console.log("点击节点：", node);
                // 执行器里面点击库表不跳转页面
                // if (this.$router.currentRoute.path == "/data/executor") {
                //     return;
                // }
                if (node.type == 1) {
                    this.nowClickPath = {sourceId: this.choiceDatasourceId, host: node.host, dbName: node.dbName, tableName: node.tableName};
                    this.$router.push({path: '/table/database', query: this.nowClickPath});
                } else if (node.type == 2) {
                    this.nowClickPath = {sourceId: this.choiceDatasourceId, host: node.host, dbName: node.dbName, tableName: node.tableName};
                    this.$router.push({path: '/table/info', query: this.nowClickPath});
                }
            },
            handleNodeExpand(node) {
                if (node.children.length > 0 && node.children[0].needLoad) {
                    console.log("加载节点：", node);
                    if (node.type == 1) {
						this.loadGetTableList(node);
                    }
                }
            },
			databaseActionDropdown(param) {
				if (param.command == 'refresh') {
					param.node.loading = true;
					param.node.data.children = [];
					this.loadGetTableList(param.node.data, () => {
						setTimeout(() => param.node.loading = false, 500);
					});
				} else {
					this.$message.warning("暂未支持的选项");
				}
			},
            loadGetTableList(node, callback) {
                datasourceApi.tableList({sourceId: this.choiceDatasourceId, dbName: node.dbName}).then(json => {
                    let pathIndex = [];
                    let result = json.data || [];
                    for (let i = 0; i < result.length; i++) {
                        let item = {
                            id: node.host + "_" + node.dbName + "_" + result[i].tableName, host: node.host,
                            dbName: node.dbName, tableName: result[i].tableName, name: result[i].tableName, type: 2,
                            comment: result[i].tableComment
                        };
                        // item.children = [{label: '', needLoad: true}];// 初始化一个对象，点击展开时重新查询加载
                        pathIndex.push(item);
                    }
                    node.children = pathIndex;
                    if (typeof callback == 'function') {
                        callback(pathIndex);
                    }
                });
            },
            loadDatasourceList() {
                datasourceApi.datasourceList({}).then(json => {
                    this.datasourceList = json.data || [];
					let datasourceOptions = [];
					for (let i = 0; i < this.datasourceList.length; i++) {
						let item = this.datasourceList[i];
						datasourceOptions.push({label: item.name, value: item.id});
					}
                    this.datasourceOptions = datasourceOptions;
					let datasourceGroupList = [];
					this.datasourceList.filter(item => !!item.groupName).forEach(item => datasourceGroupList.push(item.groupName || ''));
					this.datasourceGroupList = Array.from(new Set(datasourceGroupList));
				});
            },
			loadDatabaseList(sourceId, host) {
				return new Promise((resolve, reject) => {
					this.databaseList = [];
					datasourceApi.databaseList({sourceId: sourceId}).then(json => {
						let result = json.data || [];
						let pathIndex = [];
						let children = [];
						for (let i = 0; i < result.length; i++) {
							let item = {
								id: host + "_" + result[i].dbName, host: host, dbName: result[i].dbName,
								name: result[i].dbName, type: 1
							};
							item.children = [{label: '', needLoad: true}];// 初始化一个对象，点击展开时重新查询加载
							children.push(item);
						}
						pathIndex.push({id: host, host: host, name: host, children: children});
						this.databaseList = pathIndex;
						resolve();
					});
				});
            },
            initLoadDataList(param) {
                if (this.databaseList.length > 0) {
                    return;
                }
				this.choiceDatasourceId = parseInt(param.sourceId);
				this.loadDatabaseList(param.sourceId, param.host).then(() => {
					this.databaseExpandedKeys = [param.host];
				});
            },
            checkSystemUpgrade() {
                datasourceApi.systemUpgradeInfo({}).then(json => {
                    if (!!json.data) {
                        this.upgradeInfo = json.data;
                        console.log("zyplayer-doc发现新版本："
                            + "\n升级地址：" + json.data.upgradeUrl
                            + "\n当前版本：" + json.data.nowVersion
                            + "\n最新版本：" + json.data.lastVersion
                            + "\n升级内容：" + json.data.upgradeContent
                        );
                    }
                });
            },
        }
    }
</script>

<style>
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
    }
    #app, .el-container, .el-menu {
        height: 100%;
    }
	.el-header {
		background-color: #1D4E89 !important;
	}
    .database-list-tree{background-color: #fafafa;}
    .database-list-tree .el-tree-node>.el-tree-node__children {
        overflow: unset;
    }
    .header-right-user-name{color: #fff;padding-right: 5px;}
    .el-menu-vertical{border-right: 0;background: #fafafa;}
    .el-menu-vertical .el-menu{background: #fafafa;}
    .el-header {background-color: #409EFF; color: #333; line-height: 40px; text-align: right;height: 40px !important;}

	.el-tree-node__content{}
	.el-tree-node__content .el-icon-more{margin-left: 5px;color: #606266;font-size: 12px; display: none;padding: 2px 5px;}
	.el-tree-node__content:hover .el-icon-more{display: inline-block;}
</style>
