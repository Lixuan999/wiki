<template>
    <div class="my-info-vue">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="padding: 20px 10px;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>我的信息</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin: 0 auto;max-width: 1000px;">
            <el-card class="box-card">
                <div slot="header" class="clearfix">我的信息</div>
                <el-form class="search-form-box" label-width="100px">
                    <el-form-item label="账号：">{{userInfo.userNo}}</el-form-item>
                    <el-form-item label="用户名：">{{userInfo.userName}}</el-form-item>
                    <el-form-item label="手机号：">{{userInfo.phone}}</el-form-item>
                    <el-form-item label="邮箱：">{{userInfo.email}}</el-form-item>
                    <el-form-item label="状态：">{{userInfo.delFlag==0?'正常':'停用'}}</el-form-item>
                    <el-form-item label="性别：">{{userInfo.sex==0?'女':'男'}}</el-form-item>
                </el-form>
            </el-card>
        </div>
    </div>
</template>

<script>
    var app;
    export default {
        data() {
            return {
                userInfo: {}
            };
        },
        mounted: function () {
            app = this;
            this.getUserInfo();
        },
        methods: {
            getUserInfo() {
                this.common.post(this.apilist1.getSelfUserInfo, this.searchParam, function (json) {
                    app.userInfo = json.data;
                });
            },
        }
    }

</script>
<style>
    .my-info-vue{}
    .my-info-vue .box-card{margin: 10px;}
</style>

