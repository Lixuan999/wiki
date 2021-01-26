import Qs from 'qs'
import request from './request'

export default {
    queryTestDatasource: data => {
        return request({url: '/zyplayer-doc-db/datasource/test', method: 'post', data: Qs.stringify(data)});
    },
    queryTableDdl: data => {
        return request({url: '/zyplayer-doc-db/doc-db/getTableDdl', method: 'post', data: Qs.stringify(data)});
    },
    getEditorData: data => {
        return request({url: '/zyplayer-doc-db/doc-db/getEditorData', method: 'post', data: Qs.stringify(data)});
    },
    datasourceList: data => {
        return request({url: '/zyplayer-doc-db/doc-db/getDataSourceList', method: 'post', data: Qs.stringify(data)});
    },
    databaseList: data => {
        return request({url: '/zyplayer-doc-db/doc-db/getDatabaseList', method: 'post', data: Qs.stringify(data)});
    },
    tableList: data => {
        return request({url: '/zyplayer-doc-db/doc-db/getTableList', method: 'post', data: Qs.stringify(data)});
    },
    tableColumnList: data => {
        return request({url: '/zyplayer-doc-db/doc-db/getTableColumnList', method: 'post', data: Qs.stringify(data)});
    },
    tableStatus: data => {
        return request({url: '/zyplayer-doc-db/doc-db/getTableStatus', method: 'post', data: Qs.stringify(data)});
    },
    tableAndColumnBySearch: data => {
        return request({url: '/zyplayer-doc-db/doc-db/getTableAndColumnBySearch', method: 'post', data: Qs.stringify(data)});
    },
    updateTableDesc: data => {
        return request({url: '/zyplayer-doc-db/doc-db/updateTableDesc', method: 'post', data: Qs.stringify(data)});
    },
    updateTableColumnDesc: data => {
        return request({url: '/zyplayer-doc-db/doc-db/updateTableColumnDesc', method: 'post', data: Qs.stringify(data)});
    },
    manageDatasourceList: data => {
        return request({url: '/zyplayer-doc-db/datasource/list', method: 'post', data: Qs.stringify(data)});
    },
    manageUpdateDatasource: data => {
        return request({url: '/zyplayer-doc-db/datasource/update', method: 'post', data: Qs.stringify(data)});
    },
    queryExecuteSql: data => {
        return request({url: '/zyplayer-doc-db/executor/execute', method: 'post', data: Qs.stringify(data)});
    },
    executeSqlCancel: data => {
        return request({url: '/zyplayer-doc-db/executor/cancel', method: 'post', data: Qs.stringify(data)});
    },
    updateFavorite: data => {
        return request({url: '/zyplayer-doc-db/executor/favorite/add', method: 'post', data: Qs.stringify(data)});
    },
    favoriteList: data => {
        return request({url: '/zyplayer-doc-db/executor/favorite/list', method: 'post', data: Qs.stringify(data)});
    },
    historyList: data => {
        return request({url: '/zyplayer-doc-db/executor/history/list', method: 'post', data: Qs.stringify(data)});
    },
    transferStart: data => {
        return request({url: '/zyplayer-doc-db/transfer/start', method: 'post', data: Qs.stringify(data)});
    },
    transferCancel: data => {
        return request({url: '/zyplayer-doc-db/transfer/cancel', method: 'post', data: Qs.stringify(data)});
    },
    transferList: data => {
        return request({url: '/zyplayer-doc-db/transfer/list', method: 'post', data: Qs.stringify(data)});
    },
    transferDetail: data => {
        return request({url: '/zyplayer-doc-db/transfer/detail', method: 'post', data: Qs.stringify(data)});
    },
    transferUpdate: data => {
        return request({url: '/zyplayer-doc-db/transfer/update', method: 'post', data: Qs.stringify(data)});
    },
    transferSqlColumns: data => {
        return request({url: '/zyplayer-doc-db/transfer/sqlColumns', method: 'post', data: Qs.stringify(data)});
    },
    assignDbUserAuth: data => {
        return request({url: '/zyplayer-doc-db/auth/assign', method: 'post', data: Qs.stringify(data)});
    },
    dbUserAuthList: data => {
        return request({url: '/zyplayer-doc-db/auth/list', method: 'post', data: Qs.stringify(data)});
    },
    systemUpgradeInfo: data => {
        return request({url: '/system/info/upgrade', method: 'post', data: Qs.stringify(data)});
    },
};
