<template>
	<div id="app">
		<template v-if="fullscreen">
			<router-view @loginSuccess="getSelfUserInfo"></router-view>
		</template>
		<el-container v-else>
			<el-aside>
				<div style="padding: 10px;height: 100%;box-sizing: border-box;background: #fafafa;">
					<el-menu default-active="1-4-1" :router="true" class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
						<el-menu-item index="/"><i class="el-icon-s-home"></i>控制台</el-menu-item>
						<el-submenu index="1" v-if="userAuth.userManage">
							<template slot="title">
								<i class="el-icon-s-platform"></i>
								<span slot="title">系统管理</span>
							</template>
							<el-menu-item index="/console/userList"><i class="el-icon-user-solid"></i>用户管理</el-menu-item>
							<!--                            <el-menu-item index="/console/roleList"><i class="el-icon-s-custom"></i>角色管理</el-menu-item>-->
							<!--                            <el-menu-item index="/console/authList"><i class="el-icon-s-claim"></i>权限列表</el-menu-item>-->
						</el-submenu>
					</el-menu>
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
	import consoleApi from './common/api/console'

	export default {
		data() {
			return {
				isCollapse: false,
				aboutDialogVisible: false,
				userSelfInfo: {},
				userAuth: {
					userManage: false
				},
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
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
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
					this.$message.warn("功能暂未开放");
				}
			},
			userSignOut() {
				consoleApi.userLogout().then(() => {
					location.reload();
				}).catch(e => {
					console.log("退出登录失败", e);
				});
			},
			getSelfUserInfo() {
				consoleApi.selfInfoWithAuth().then(json => {
					let infoVo = json.data || {};
					this.userSelfInfo = infoVo.userInfo || {};
					this.userAuth = infoVo.userAuth || {};
				}).catch(e => {
					console.log("获取用户信息失败", e);
				});
			},
			checkSystemUpgrade() {
				consoleApi.systemUpgradeInfo({}).then(json => {
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
	.header-right-user-name{color: #fff;padding-right: 5px;}
	.el-menu-vertical{border-right: 0;background: #fafafa;}
	.el-menu-vertical .el-menu{background: #fafafa;}
	.el-header {background-color: #409EFF; color: #333; line-height: 40px; text-align: right;height: 40px !important;}
</style>
