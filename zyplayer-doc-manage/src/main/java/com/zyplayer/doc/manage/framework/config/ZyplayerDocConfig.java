package com.zyplayer.doc.manage.framework.config;

import com.zyplayer.doc.db.framework.configuration.EnableDocDb;
import com.zyplayer.doc.dubbo.framework.config.EnableDocDubbo;
import com.zyplayer.doc.elasticsearch.framework.config.EnableDocEs;
import com.zyplayer.doc.swagger.framework.configuration.EnableDocSwagger;
import com.zyplayer.doc.wiki.framework.config.EnableDocWiki;
import org.springframework.context.annotation.Configuration;

/**
 * 按需开启zyplayer-doc所有的服务
 *
 * @author x
 * @since 2019年3月31日
 */
@Configuration
public class ZyplayerDocConfig {

//	@EnableDocGrpc // grpc默认不开启
//	public class enableDocGrpc{}
	
	@EnableDocWiki
	public class enableDocWiki{}
	
	@EnableDocEs
	public class enableDocEs{}
	
	@EnableDocDubbo
	public class enableDocDubbo{}
	
	@EnableDocDb
	public class enableDocDb{}
	
	@EnableDocSwagger(selfDoc = false)
	public class enableDocSwagger{}
}
