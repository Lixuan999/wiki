<template>
    <div class="global-layout-vue">
        <el-container>
            <el-aside v-show="leftCollapse">
                <div style="padding: 10px;height: 100%;box-sizing: border-box;background: #fafafa;">
                    <div style="margin-bottom: 10px;">
                        <el-select :value="choiceSpace" @change="spaceChangeEvents" filterable placeholder="选择空间" style="width: 100%;">
                            <el-option-group label="">
                                <el-option key="0" label="创建空间" value="0"></el-option>
                                <el-option key="-1" label="空间管理" value="-1"></el-option>
                            </el-option-group>
                            <el-option-group label="">
                                <el-option v-for="item in spaceOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-option-group>
                        </el-select>
                    </div>
                    <div align="center">
                        <el-button v-on:click="createWiki" icon="el-icon-plus" style="width: 100%;">创建文档</el-button>
                    </div>
                    <el-input v-model="searchKeywords" @input="searchByKeywords" @keyup.enter.native="searchByKeywords" placeholder="搜索文档" style="margin: 10px 0;">
                        <el-button slot="append" icon="el-icon-search" v-on:click="searchByKeywordsNewPage"></el-button>
                    </el-input>
					<div style="overflow: auto; padding-bottom: 30px;">
						<el-tree :props="defaultProps" :data="wikiPageList" @node-click="handleNodeClick"
								 @node-expand="handleNodeExpand" draggable @node-drop="handlePageDrop"
								 ref="wikiPageTree" :filter-node-method="filterPageNode" highlight-current
								 :expand-on-click-node="false" :default-expanded-keys="wikiPageExpandedKeys"
								 node-key="id"
								 style="background-color: #fafafa;">
						</el-tree>
					</div>
                </div>
            </el-aside>
            <el-container style="border-left: 1px solid #dcdfe6;">
                <el-header>
                    <!--<el-switch v-model="isCollapse" ></el-switch>-->
                    <i class="el-icon-menu icon-collapse" @click="leftCollapse = !leftCollapse"></i>
					<span class="header-right-user-name">{{userSelfInfo.userName}}</span>
					<el-popover placement="bottom" width="600" trigger="click" v-model="userMessagePopVisible">
						<el-badge :is-dot="haveNotReadUserMessage" slot="reference" style="line-height: 20px;margin: 0 15px;">
							<i class="el-icon-bell head-icon" @click="loadUserMessageIfPopVisible" style="margin-right: 0;"></i>
						</el-badge>
						<div style="margin-bottom: 10px;">
							<span style="font-size: 14px;font-weight: bold;">通知</span>
							<el-link v-if="haveNotReadUserMessage" type="primary" icon="el-icon-check" style="float: right;" v-on:click="readAllUserMessage">本页标记已读</el-link>
						</div>
						<div class="header-user-message">
							<el-table :data="userMessageList" border style="width: 100%; margin-bottom: 5px;" max-height="500" size="mini">
								<el-table-column prop="operatorUserName" label="操作人" width="100px"></el-table-column>
								<el-table-column prop="creationTime" label="操作时间" width="140px"></el-table-column>
								<el-table-column label="内容">
									<template slot-scope="scope">
										{{scope.row.msgContent}}
										<el-badge :is-dot="scope.row.msgStatus==0" slot="reference" style="line-height: 10px;padding-right: 5px;">
											<el-link type="primary" v-on:click="showUserMessage(scope.row)">查看></el-link>
										</el-badge>
									</template>
								</el-table-column>
							</el-table>
							<div class="page-info-box">
								<el-pagination
									@current-change="handleCurrentChange"
									:page-size="userMsgParam.pageSize"
									:current-page="userMsgParam.pageNum"
									layout="prev, pager, next, total"
									:total="userMsgTotalCount"
								>
								</el-pagination>
							</div>
						</div>
					</el-popover>
                    <!--<div class="logo" @click="aboutDialogVisible = true">zyplayer-doc-wiki</div>-->
                    <el-dropdown @command="userSettingDropdown" trigger="click">
                        <i class="el-icon-setting head-icon"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="console">控制台</el-dropdown-item>
                            <el-dropdown-item command="myInfo">我的资料</el-dropdown-item>
                            <el-dropdown-item command="userSignOut">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-header>
                <el-main style="padding: 0;">
					<router-view @loadPageList="loadPageList"
								 @changeExpandedKeys="changeWikiPageExpandedKeys"
								 @switchSpace="switchSpacePage"
								 :spaceId="choiceSpace"
								 :spaceInfo="getSpaceInfo(choiceSpace)">
					</router-view>
				</el-main>
			</el-container>
        </el-container>
        <!--新建空间弹窗-->
        <el-dialog title="创建空间" :visible.sync="newSpaceDialogVisible" width="600px" :close-on-click-modal="false">
            <el-form label-width="100px" :model="newSpaceForm" :rules="newSpaceFormRules" ref="newSpaceForm">
                <el-form-item label="空间名：" prop="name">
                    <el-input v-model="newSpaceForm.name"></el-input>
                </el-form-item>
                <el-form-item label="空间描述：" prop="spaceExplain">
                    <el-input v-model="newSpaceForm.spaceExplain"></el-input>
                </el-form-item>
                <el-form-item label="空间开放：">
                    <el-switch v-model="newSpaceForm.openDoc" inactive-text="需要登录" :inactive-value="0" active-text="开放访问" :active-value="1"></el-switch>
                </el-form-item>
                <el-form-item label="目录加载：">
                    <el-switch v-model="newSpaceForm.treeLazyLoad" inactive-text="预先加载" :inactive-value="0" active-text="延迟加载" :active-value="1"></el-switch>
                </el-form-item>
                <el-form-item label="空间类型：">
                    <el-select v-model="newSpaceForm.type" filterable placeholder="选择类型" style="width: 100%;">
                        <el-option :key="1" label="公共空间" :value="1">
                            <span style="float: left">公共空间</span>
                            <span style="float: right; color: #8492a6; font-size: 13px;">属于公共，登录用户可访问、编辑</span>
                        </el-option>
                        <el-option :key="2" label="个人空间" :value="2">
                            <span style="float: left">个人空间</span>
                            <span style="float: right; color: #8492a6; font-size: 13px;">属于个人，所有登录用户可访问</span>
                        </el-option>
                        <el-option :key="3" label="隐私空间" :value="3">
                            <span style="float: left">隐私空间</span>
                            <span style="float: right; color: #8492a6; font-size: 13px;">属于个人，仅创建者和组内成员可访问</span>
                        </el-option>
                    </el-select>
                </el-form-item>
				<el-form-item label="成员组" prop="spaceExplain">
					<el-input v-model="newSpaceForm.spaceExplain"></el-input>
				</el-form-item>
                <el-form-item>
                    <el-button type="primary" v-if="newSpaceForm.id > 0" @click="onNewSpaceSubmit('newSpaceForm')">保存修改</el-button>
                    <el-button type="primary" v-else @click="onNewSpaceSubmit('newSpaceForm')">立即创建</el-button>
                    <el-button @click="onNewSpaceCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <!--管理空间弹窗-->
        <el-dialog title="管理空间" :visible.sync="manageSpaceDialogVisible" :close-on-click-modal="false" width="80%">
            <el-table :data="spaceList" border style="width: 100%; margin-bottom: 5px;" max-height="500">
                <el-table-column prop="id" label="ID" width="60"></el-table-column>
                <el-table-column prop="name" label="名字"></el-table-column>
                <el-table-column prop="spaceExplain" label="说明"></el-table-column>
                <el-table-column label="开放地址">
                    <template slot-scope="scope">
						<el-button type="text" @click="showOpenSpace(scope.row.uuid)" v-if="scope.row.openDoc == 1">{{scope.row.name}}</el-button>
                        <span v-else>暂未开放</span>
                    </template>
                </el-table-column>
                <el-table-column prop="createUserName" label="创建人"></el-table-column>
                <el-table-column prop="createTime" label="创建时间"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="small" type="primary" v-on:click="editSpaceInfo(scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" v-on:click="deleteSpaceInfo(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>

<script>
    import userApi from '../../common/api/user'
    import pageApi from '../../common/api/page'

    export default {
        data() {
            return {
                leftCollapse: true,
                aboutDialogVisible: false,
                rightContentLoading: false,
                pathIndex: [],
                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
                // 空间搜索相关
                spaceOptions: [],
                spaceList:[],
                choiceSpace: "",
                nowSpaceShow: {},
                newSpaceDialogVisible: false,
                manageSpaceDialogVisible: false,
                newSpaceForm: {id: '', name: '', spaceExplain: '', treeLazyLoad: 0, openDoc: 0, uuid: '', type: 1},
                newSpaceFormRules: {
                    name: [
                        {required: true, message: '请输入空间名', trigger: 'blur'},
                        {min: 2, max: 25, message: '长度在 2 到 25 个字符', trigger: 'blur'}
                    ],
                },
				nowPageId: '',
				// 依据目录树存储的map全局对象
                treePathDataMap: new Map(),
                // 搜索的输入内容
                searchKeywords: "",
                // 页面展示相关
                wikiPageList:[],
                wikiPage: {},
                wikiPageExpandedKeys: [],
				userSelfInfo: {},
                // 升级信息
                upgradeInfo: {},
				userMessageList: [],
				haveNotReadUserMessage: false,
				userMessagePopVisible: false,
				userMsgTotalCount: 0,
				userMsgParam: {
					sysType: 2,
					pageNum: 1,
					pageSize: 20,
				},
            }
        },
        computed: {
        },
        mounted: function () {
            this.loadSpaceList();
            this.loadUserMessageList();
			this.getSelfUserInfo();
            this.checkSystemUpgrade();
        },
        methods: {
			loadPageList(param) {
				param = param || {};
				this.doGetPageList(param.parentId, param.node);
			},
            createWiki() {
                if (this.choiceSpace > 0) {
                    this.$router.push({path: '/page/edit', query: {parentId: this.nowPageId}});
                } else {
					this.$message.warning("请先选择或创建空间");
                }
            },
            changeWikiPageExpandedKeys(pageId) {
                this.wikiPageExpandedKeys = [pageId];
            },
            searchByKeywords() {
                this.$refs.wikiPageTree.filter(this.searchKeywords);
            },
            searchByKeywordsNewPage() {
                var routeUrl = this.$router.resolve({path: '/page/search', query: {keywords: this.searchKeywords}});
                window.open(routeUrl.href, '_blank');
            },
            handleNodeClick(data) {
                console.log("点击节点：", data);
                this.nowPageId = data.id;
                this.$router.push({path: '/page/show', query: {pageId: data.id}});
            },
            handleNodeExpand(node) {
                if (node.children.length > 0 && node.children[0].needLoad) {
                    console.log("加载节点：", node);
					this.doGetPageList(node.id, node);
                }
            },
            handlePageDrop(draggingNode, dropNode, dropType, ev) {
                console.log('tree drop: ', draggingNode.data, dropNode.data, dropType);
                // 'prev'、'inner'、'next'
                // before、after、inner
                var param = {id: draggingNode.data.id, parentId: dropNode.data.parentId};
                if (dropType == 'inner') {
                    param.parentId = dropNode.data.id;
                } else if (dropType == 'before') {
                    param.beforeSeq = dropNode.data.seqNo;
                } else if (dropType == 'after') {
                    param.afterSeq = dropNode.data.seqNo;
                }
				pageApi.pageChangeParent(param).then(res => {
					this.doGetPageList(null);
				});
			},
			loadUserMessageIfPopVisible() {
				if (!this.userMessagePopVisible) {
					this.loadUserMessageList();
				}
			},
			loadUserMessageList() {
				userApi.getUserMessageList(this.userMsgParam).then(res => {
					this.userMessageList = res.data || [];
					this.userMsgTotalCount = res.total || 0;
					this.haveNotReadUserMessage = (this.userMessageList.filter(item => item.msgStatus == 0).length) > 0;
				});
			},
			showUserMessage(row) {
				if (row.msgStatus == 0) {
					userApi.readUserMessage({ids: row.id}).then(() => {
						this.loadUserMessageList();
					});
				}
				if (row.msgType >= 2 && row.msgType <= 12) {
					this.$router.push({path: '/page/show', query: {pageId: row.dataId}});
					this.userMessagePopVisible = false;
				}
			},
			readAllUserMessage() {
				let msgIds = [];
				this.userMessageList.filter(item => item.msgStatus == 0).forEach(item => {
					msgIds.push(item.id);
				});
				if (msgIds.length <= 0) return;
				userApi.readUserMessage({ids: msgIds.join(',')}).then(() => {
					this.$message.success("标记成功");
					this.loadUserMessageList();
				});
			},
			handleCurrentChange(val) {
				this.userMsgParam.pageNum = val;
				this.loadUserMessageList();
			},
			filterPageNode(value, data) {
				if (!value || !data.name) return true;
				// issues:I2CG72 忽略大小写
				let name = data.name.toLowerCase();
				return name.indexOf(value.toLowerCase()) !== -1;
            },
			showOpenSpace(space) {
				let routeUrl = this.$router.resolve({path: '/page/share/home', query: {space: space}});
				window.open(routeUrl.href, '_blank');
            },
            editSpaceInfo(row) {
				this.newSpaceForm = {
                    id: row.id, name: row.name, spaceExplain: row.spaceExplain,
                    treeLazyLoad: row.treeLazyLoad, openDoc: row.openDoc, type: row.type
                };
				this.newSpaceDialogVisible = true;
            },
            deleteSpaceInfo(row) {
				this.$confirm('确定要删除此空间及下面的所有文档吗？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					let param = {id: row.id, delFlag: 1};
					pageApi.updateSpace(param).then(() => {
						this.loadSpaceList();
					});
				});
            },
            spaceChangeEvents(data) {
                if (data == 0) {
					// 新建空间
					this.newSpaceForm = {id: '', name: '', spaceExplain: '', treeLazyLoad: 0, openDoc: 0, uuid: '', type: 1};
					this.newSpaceDialogVisible = true;
                } else if (data == -1) {
                    // 管理空间
					this.manageSpaceDialogVisible = true;
                } else {
					this.choiceSpace = data;
                    for (let i = 0; i < this.spaceList.length; i++) {
                        if (this.spaceList[i].id == data) {
							this.nowSpaceShow = this.spaceList[i];
                            break;
                        }
                    }
					this.nowPageId = '';
					this.doGetPageList(null);
					this.$router.push({path: '/home', query: {spaceId: data}});
                }
            },
            loadSpaceList() {
				pageApi.spaceList({}).then(json => {
					this.spaceList = json.data || [];
					let spaceOptions = [];
                    for (let i = 0; i < this.spaceList.length; i++) {
                        spaceOptions.push({
                            label: this.spaceList[i].name, value: this.spaceList[i].id
                        });
                    }
					this.spaceOptions = spaceOptions;
                    if (this.spaceList.length > 0) {
						let spaceId = this.spaceList[0].id;
                        this.nowSpaceShow = this.spaceList[0];
                        this.choiceSpace = spaceId;
						this.nowPageId = '';
                        this.doGetPageList(null);
                        // TODO 在首页时跳转
                        try {
                            if (this.$router.app._route.path == "/home") {
                                this.$router.push({path: '/home', query: {spaceId: spaceId}});
                            }
                        } catch (e) {
                            console.log(e);
                        }
                    }
                });
            },
            doGetPageList(parentId, node) {
				let param = {spaceId: this.choiceSpace, parentId: parentId || 0};
                if (this.nowSpaceShow.treeLazyLoad == 0) {
                    param.parentId = null;
                }
				pageApi.pageList(param).then(json => {
					let result = json.data || [];
					let pathIndex = [];
					if (this.nowSpaceShow.treeLazyLoad == 0) {
						pathIndex = result;
					} else {
                        for (let i = 0; i < result.length; i++) {
							let item = result[i];
                            item.parentId = item.parentId || 0;
                            item.children = [{label: '', needLoad: true}];// 初始化一个对象，点击展开时重新查询加载
                            pathIndex.push(item);
                        }
                    }
                    if (parentId > 0) {
                        node.children = pathIndex;
                    } else {
						this.wikiPageList = pathIndex;
                    }
                });
            },
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
					this.$message.warning("暂未开放");
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
			getSpaceInfo(spaceId) {
				for (let i = 0; i < this.spaceList.length; i++) {
					if (this.spaceList[i].id == spaceId) {
						return this.spaceList[i];
					}
				}
				return {};
			},
            onNewSpaceSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
						let param = {
                            id: this.newSpaceForm.id,
                            name: this.newSpaceForm.name,
                            type: this.newSpaceForm.type,
                            openDoc: this.newSpaceForm.openDoc,
                            spaceExplain: this.newSpaceForm.spaceExplain,
                            treeLazyLoad: this.newSpaceForm.treeLazyLoad,
                        };
						pageApi.updateSpace(param).then(json => {
							if (param.id > 0) {
								this.loadSpaceList();
							} else {
                                this.spaceList.push(json.data);
                                this.spaceOptions.push({
                                    label: json.data.name, value: json.data.id
                                });
                                this.nowSpaceShow = json.data;
                                this.choiceSpace = json.data.id;
                                this.doGetPageList(null);
                            }
                            this.newSpaceForm = {id: '', name: '', spaceExplain: '', treeLazyLoad: 0, openDoc: 0, uuid: '', type: 1};
                            this.newSpaceDialogVisible = false;
                        });
                    }
                });
            },
            onNewSpaceCancel() {
                this.newSpaceDialogVisible = false;
            },
            checkSystemUpgrade() {
				userApi.systemUpgradeInfo({}).then(json => {
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
            switchSpacePage(spaceId) {
                spaceId = parseInt(spaceId);
                if (this.choiceSpace == spaceId) {
                    return;
                }
				this.choiceSpace = spaceId;
                this.doGetPageList(null);
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
	.global-layout-vue{height: 100%;}

    #app, .el-container, .el-menu {
        height: 100%;
    }
	.el-header {
		background-color: #1D4E89 !important;
	}
	.header-right-user-name{color: #fff;padding-right: 5px;}
    .el-header {color: #333; line-height: 40px; text-align: right;height: 40px !important;}
    .icon-collapse{float: left;font-size: 25px;color: #aaa;margin-top: 8px;cursor: pointer;}
    .icon-collapse:hover{color: #eee;}
	.head-icon{margin-right: 15px; font-size: 16px;cursor: pointer;color: #fff;}
	.header-user-message .page-info-box{text-align: right;margin-top: 10px;}
</style>
