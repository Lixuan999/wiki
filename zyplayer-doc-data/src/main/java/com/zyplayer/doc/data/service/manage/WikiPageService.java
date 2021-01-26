package com.zyplayer.doc.data.service.manage;

import com.zyplayer.doc.data.repository.manage.entity.WikiPage;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author x
 * @since 2019-03-09
 */
public interface WikiPageService extends IService<WikiPage> {

	void changeParent(WikiPage wikiPage, Integer beforeSeq, Integer afterSeq);
	
	void deletePage(WikiPage wikiPage);
}
