<template>
    <div id="app">
        <template v-if="global.fullscreen">
            <router-view></router-view>
        </template>
        <el-container v-else>
            <el-aside>
                <div style="padding: 10px;height: 100%;box-sizing: border-box;background: #fafafa;">
                    <div style="margin-bottom: 10px;">
                        <el-select v-model="choiceDatasource" @change="datasourceChangeEvents" filterable placeholder="选择数据源查看索引列表" style="width: 100%;">
                            <el-option v-for="item in datasourceOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <el-menu :router="true" class="el-menu-vertical" style="height: auto;">
<!--                        <el-menu-item index="/"><i class="el-icon-s-home"></i>控制台</el-menu-item>-->
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-s-platform"></i>
                                <span slot="title">系统管理</span>
                            </template>
                            <el-menu-item index="/data/datasourceManage"><i class="el-icon-coin"></i>数据源管理</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <img src="./assets/img/elasticsearch.png" style="width: 18px;height: 18px;padding: 0 4px;">
                                <span slot="title">ES功能列表</span>
                            </template>
                            <el-menu-item index="/index/executer"><i class="el-icon-coin"></i>数据查询</el-menu-item>
                        </el-submenu>
                    </el-menu>
                    <el-tree :props="defaultProps" :data="esIndexList" @node-click="handleNodeClick"
                             ref="databaseTree" highlight-current draggable
                             :default-expanded-keys="esIndexExpandedKeys"
                             node-key="id" @node-expand="handleNodeExpand"
                             style="background-color: #fafafa;" empty-text="">
                        <span slot-scope="{node, data}">
                            <span>{{node.label}}</span>
                        </span>
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
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import global from './common/config/global'
    import toast from './common/lib/common/toast'

    var app;
    export default {
        data() {
            return {
                isCollapse: false,
                aboutDialogVisible: false,
                userSelfInfo: {},
                // 页面展示相关
                defaultProps: {children: 'children', label: 'name'},
                esIndexList: [],
                esIndexExpandedKeys: [],
                // 数据源相关
                datasourceOptions: [],
                choiceDatasource: "",
                // 升级信息
                upgradeInfo: {},
            }
        },
        mounted: function () {
            app = this;
            global.vue.$app = this;
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
                    app.aboutDialogVisible = true;
                } else if (command == 'myInfo') {
                    this.$router.push({path: '/user/myInfo'});
                } else if (command == 'console') {
                    window.location = this.apilist1.HOST;
                } else {
                    toast.notOpen();
                }
            },
            userSignOut() {
                this.common.post(this.apilist1.userLogout, {}, function (json) {
                    location.reload();
                });
            },
            getSelfUserInfo() {
                this.common.post(this.apilist1.getSelfUserInfo, {}, function (json) {
                    app.userSelfInfo = json.data;
                });
            },
            handleNodeClick(node) {
                console.log("点击节点：", node);
                if (node.type == 1) {
                    this.nowClickPath = {id: this.choiceDatasource, index: node.name};
                    this.$router.push({path: '/index/show', query: this.nowClickPath});
                }
            },
            handleNodeExpand(node) {
                if (node.children.length > 0 && node.children[0].needLoad) {
                    console.log("加载节点：", node);
                }
            },
            datasourceChangeEvents() {
                app.loadEsMappingList();
            },
            loadEsMappingList() {
                var param = {id: this.choiceDatasource};
                this.common.post(this.apilist1.esMappings, param, function (json) {
                    var result = json.data || {};
                    var pathIndex = [], pathChildren = [];
                    for (var key in result) {
                        // var properties = result[key].sourceAsMap.properties;
                        // var children = [];
                        // for (var propertiesKey in properties) {
                        //     var propertiesItem = properties[propertiesKey];
                        //     var item = {
                        //         id: key + "_" + propertiesKey, name: propertiesKey
                        //     };
                        //     children.push(item);
                        // }
                        pathChildren.push({id: key, name: key, type: 1});
                    }
                    pathIndex.push({name: "索引列表", children: pathChildren});
                    app.esIndexList = pathIndex;
                });
            },
            loadDatasourceList() {
                this.common.post(this.apilist1.manageDatasourceList, {}, function (json) {
                    var datasourceList = json.data || [];
                    var datasourceOptions = [];
                    for (var i = 0; i < datasourceList.length; i++) {
                        datasourceOptions.push({
                            label: datasourceList[i].name, value: datasourceList[i].id
                        });
                    }
                    app.datasourceOptions = datasourceOptions;
                });
            },
            checkSystemUpgrade() {
                this.common.post(this.apilist1.systemUpgradeInfo, {}, function (json) {
                    if (!!json.data) {
                        app.upgradeInfo = json.data;
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
    .header-right-user-name{color: #fff;padding-right: 5px;}
    .el-menu-vertical{border-right: 0;background: #fafafa;}
    .el-menu-vertical .el-menu{background: #fafafa;}
    .el-header {background-color: #409EFF; color: #333; line-height: 40px; text-align: right;height: 40px !important;}
</style>
