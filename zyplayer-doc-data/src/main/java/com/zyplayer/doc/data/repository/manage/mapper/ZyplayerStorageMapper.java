package com.zyplayer.doc.data.repository.manage.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.zyplayer.doc.data.repository.manage.entity.ZyplayerStorage;

/**
 * <p>
 * Mapper 接口
 * </p>
 *
 * @author x
 * @since 2018-11-27
 */
public interface ZyplayerStorageMapper extends BaseMapper<ZyplayerStorage> {

	Integer selectTop();

}
