<template>
    <div style="padding: 10px;">
        <div style="max-width: 1200px;margin: 20px auto;">
            <el-card style="margin: 10px;">
                <div slot="header" class="clearfix">
                    <span>ES数据源管理</span>
                    <el-button style="float: right;margin-left: 5px;" :loading="loadDataListLoading" v-on:click="getDatasourceList" plain icon="el-icon-refresh" size="small">刷新</el-button>
                    <el-button style="float: right;" v-on:click="addDatasource" type="primary" icon="el-icon-circle-plus-outline" size="small">新增</el-button>
                </div>
                <el-table :data="datasourceList" stripe border style="width: 100%; margin-bottom: 5px;">
                    <el-table-column prop="name" label="名字" width="200"></el-table-column>
                    <el-table-column prop="hostPort" label="地址和端口"></el-table-column>
                    <el-table-column prop="scheme" label="scheme"></el-table-column>
                    <el-table-column label="操作" width="150">
                        <template slot-scope="scope">
                            <el-button v-on:click="editDatasource(scope.row)" type="primary" size="small">修改</el-button>
                            <el-button v-on:click="deleteDatasource(scope.row)" type="danger" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>
        </div>
        <!--增加数据源弹窗-->
        <el-dialog :inline="true" :title="newDatasource.id>0?'编辑ES数据源':'新增ES数据源'" :visible.sync="datasourceDialogVisible" width="650px">
            <el-form label-width="120px">
                <el-form-item label="名字：">
                    <el-input v-model="newDatasource.name" placeholder="中文名字"></el-input>
                </el-form-item>
                <el-form-item label="数据源URL：">
                    <el-input v-model="newDatasource.hostPort" placeholder="地址和端口，集群使用英文逗号分隔，例：127.0.0.1:7200,127.0.0.1:7201"></el-input>
                </el-form-item>
                <el-form-item label="scheme：">
                    <el-select v-model="newDatasource.scheme" placeholder="scheme" style="width: 100%">
                        <el-option label="http" value="http"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" style="text-align: center;">
                <el-button v-on:click="saveDatasource" type="primary">保存</el-button>
                <el-button v-on:click="datasourceDialogVisible=false" plain>取消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import toast from '../../common/lib/common/toast'
    import global from '../../common/config/global'

    var app;

    export default {
        data() {
            return {
                loadDataListLoading: false,
                datasourceDialogVisible: false,
                datasourceList: [],
                newDatasource: {},
            };
        },
        mounted: function () {
            app = this;
            this.getDatasourceList();
        },
        methods: {
            addDatasource() {
                this.datasourceDialogVisible = true;
                this.newDatasource = {name: "", hostPort: "", scheme: "http"};
            },
            editDatasource(row) {
                this.newDatasource = JSON.parse(JSON.stringify(row));
                this.datasourceDialogVisible = true;
            },
            deleteDatasource(row) {
                this.$confirm('确定要删除此数据源吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    row.yn = 0;
                    this.common.post(this.apilist1.manageUpdateDatasource, row, function (json) {
                        app.$message.success("删除成功！");
                        app.getDatasourceList();
                    });
                }).catch(()=>{});
            },
            saveDatasource() {
                this.datasourceDialogVisible = false;
                this.common.post(this.apilist1.manageUpdateDatasource, this.newDatasource, function (json) {
                    app.$message.success("保存成功！");
                    app.getDatasourceList();
                });
            },
            getDatasourceList() {
                this.loadDataListLoading = true;
                this.common.post(this.apilist1.manageDatasourceList, {}, function (json) {
                    app.datasourceList = json.data || [];
                    setTimeout(()=>{app.loadDataListLoading = false;}, 800);
                });
            },
        }
    }
</script>
<style>

</style>

