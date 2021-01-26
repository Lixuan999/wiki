package com.zyplayer.doc.db.framework.db.mapper.base;

import com.zyplayer.doc.db.controller.vo.TableStatusVo;
import com.zyplayer.doc.db.framework.db.dto.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * 数据库的mapper持有对象接口
 *
 * @author x
 * @since 2018年8月8日
 */
public interface BaseMapper {
	
	/**
	 * 获取库列表
	 *
	 * @return 数据库列表
	 * @author x
	 * @since 2018年8月8日
	 */
	Map<String, String> getTableDdl(@Param("dbName") String dbName, @Param("tableName") String tableName);
	
	/**
	 * 获取库列表
	 *
	 * @return 数据库列表
	 * @author x
	 * @since 2018年8月8日
	 */
	List<DatabaseInfoDto> getDatabaseList();
	
	/**
	 * 获取表列表
	 *
	 * @param dbName 数据库名
	 * @return 数据库表列表
	 * @author x
	 * @since 2018年8月8日
	 */
	List<TableInfoDto> getTableList(@Param("dbName") String dbName);
	
	/**
	 * 获取字段列表
	 *
	 * @param dbName    数据库名
	 * @param tableName 表名
	 * @return 字段列表
	 * @author x
	 * @since 2018年8月8日
	 */
	List<TableColumnDescDto> getTableColumnList(@Param("dbName") String dbName, @Param("tableName") String tableName);
	
	/**
	 * 获取字段注释
	 *
	 * @param tableName 表名
	 * @return 表字段注释
	 * @author x
	 * @since 2018年8月8日
	 */
	List<TableColumnDescDto> getTableColumnDescList(@Param("tableName") String tableName);
	
	/**
	 * 模糊搜索表和字段
	 *
	 * @param dbName     数据库名
	 * @param searchText 搜索内容
	 * @return 表和字段信息
	 * @author x
	 * @since 2018年8月8日
	 */
	List<QueryTableColumnDescDto> getTableAndColumnBySearch(@Param("dbName") String dbName, @Param("searchText") String searchText);
	
	/**
	 * 获取表注释
	 *
	 * @param tableName 可不传，传了只查询指定表的注释
	 * @return 表注释
	 * @author x
	 * @since 2018年8月8日
	 */
	List<TableDescDto> getTableDescList(@Param("dbName") String dbName, @Param("tableName") String tableName);
	
	/**
	 * 增加表注释
	 *
	 * @param tableName 表名
	 * @param newDesc   新的注释
	 * @author x
	 * @since 2018年8月8日
	 */
	void updateTableDesc(@Param("dbName") String dbName, @Param("tableName") String tableName, @Param("newDesc") String newDesc);
	
	/**
	 * 增加字段注释
	 *
	 * @param dbName     数据库名
	 * @param tableName  表名
	 * @param columnName 字段名
	 * @param newDesc    新的注释
	 * @param columnInfo 字段信息
	 * @author x
	 * @since 2018年8月8日
	 */
	void updateTableColumnDesc(@Param("dbName") String dbName, @Param("tableName") String tableName,
	                           @Param("columnName") String columnName, @Param("newDesc") String newDesc,
	                           @Param("columnInfo") ColumnInfoDto columnInfo);
	
	/**
	 * 获取表基本信息
	 *
	 * @param dbName    数据库名
	 * @param tableName 表名
	 * @author x
	 * @since 2019年9月1日
	 */
	TableStatusVo getTableStatus(@Param("dbName") String dbName, @Param("tableName") String tableName);
}
