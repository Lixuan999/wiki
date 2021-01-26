package com.zyplayer.doc.wiki.controller;

import cn.hutool.core.util.RandomUtil;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.zyplayer.doc.core.json.DocResponseJson;
import com.zyplayer.doc.core.json.ResponseJson;
import com.zyplayer.doc.core.annotation.AuthMan;
import com.zyplayer.doc.data.config.security.DocUserDetails;
import com.zyplayer.doc.data.config.security.DocUserUtil;
import com.zyplayer.doc.data.repository.manage.entity.WikiSpace;
import com.zyplayer.doc.data.service.manage.WikiSpaceService;
import com.zyplayer.doc.wiki.framework.consts.SpaceType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;
import java.util.Objects;

/**
 * 文档控制器
 *
 * @author x
 * @since 2019年2月17日
 */
@AuthMan
@RestController
@RequestMapping("/zyplayer-doc-wiki/space")
public class WikiSpaceController {
	private static Logger logger = LoggerFactory.getLogger(WikiSpaceController.class);
	
	@Resource
	WikiSpaceService wikiSpaceService;

	//查当前用户有权限查看的空间
	@PostMapping("/list")
	public ResponseJson<List<WikiSpace>> list(WikiSpace wikiSpace) {
		DocUserDetails currentUser = DocUserUtil.getCurrentUser();
		UpdateWrapper<WikiSpace> wrapper = new UpdateWrapper<>();
		wrapper.eq("del_flag", 0);

		wrapper.and(con -> con.and(conSub -> conSub.eq("type", 3).apply("FIND_IN_SET ("+currentUser.getUserId()+",user_group)")).or().in("type", 1, 2));
		List<WikiSpace> authList = wikiSpaceService.list(wrapper);
		return DocResponseJson.ok(authList);
	}
	
	@PostMapping("/update")
	public ResponseJson<WikiSpace> update(WikiSpace wikiSpace) {
		Long id = wikiSpace.getId();
		DocUserDetails currentUser = DocUserUtil.getCurrentUser();
		//修改空间
		if (id != null && id > 0) {
			WikiSpace wikiSpaceSel = wikiSpaceService.getById(id);
			if (Objects.equals(wikiSpaceSel.getEditType(), 1)) {
				return DocResponseJson.warn("当前空间不允许编辑！");
			}
			if (SpaceType.isOthersPrivate(wikiSpaceSel.getType(), currentUser.getUserId(), wikiSpaceSel.getCreateUserId())) {
				return DocResponseJson.warn("您没有该空间的编辑权！");
			}
			if (SpaceType.isOthersPersonal(wikiSpaceSel.getType(), currentUser.getUserId(), wikiSpaceSel.getCreateUserId())) {
				return DocResponseJson.warn("您没有该空间的编辑权！");
			}
			wikiSpace.setUuid(null);
			wikiSpace.setEditType(null);
			wikiSpaceService.updateById(wikiSpace);
		} else {
			wikiSpace.setUuid(RandomUtil.simpleUUID());
			wikiSpace.setCreateTime(new Date());
			wikiSpace.setCreateUserId(currentUser.getUserId());
			wikiSpace.setCreateUserName(currentUser.getUsername());
			/*wikiSpace.setUserGroup(currentUser.getUserId().toString());*/
			//新增空间
			wikiSpaceService.save(wikiSpace);
		}
		return DocResponseJson.ok(wikiSpace);
	}
}

