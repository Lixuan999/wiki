package com.zyplayer.doc.dubbo.framework.service;

import java.util.List;

/**
 * 实现此类才能使用服务器端的存贮功能
 * dubbo的文档需要手动写的，比较重要，所以重起一个存储service，实现类尽量操作另外的库
 * @author x
 * @since 2018年8月19日
 */
public interface MgDubboStorageService {
	
	/**
	 * 获取存储的值
	 * @author x
	 * @since 2018年8月19日
	 * @param key 参数
	 * @return 值
	 */
	String get(String key);
	
	/**
	 * 模糊获取存储的值
	 * @author x
	 * @since 2018年8月19日
	 * @param key 参数
	 * @param value 值
	 * @return 值
	 */
	List<MgDubboStorage> like(String key, String value);
	
	/**
	 * 存储数据
	 * @author x
	 * @since 2018年8月19日
	 * @param key 参数
	 * @param value 值
	 */
	void put(String key, String value);
	
	/**
	 * 删除数据
	 * @author x
	 * @since 2018年8月19日
	 * @param key 参数
	 */
	void remove(String key);
}
