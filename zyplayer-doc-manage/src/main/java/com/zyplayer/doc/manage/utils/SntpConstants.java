//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.zyplayer.doc.manage.utils;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.TimeZone;

public final class SntpConstants {
    public static final Charset DEFAULT_CHARSET;
    public static final TimeZone DEFAULT_TIME_ZONE;
    public static final String HEALTH_INDICATOR_NAME_ELASTICSEARCH = "elasticsearch";
    public static final String HEALTH_INDICATOR_NAME_MONGO = "mongo";
    public static final String JEDIS_REPLY_CODE_OK = "OK";
    public static final String CONFIG_KEY_PREFIX_API = "sntp.api";
    public static final String CONFIG_KEY_PREFIX_CONFIG_CENTER = "sntp.config-center";
    public static final String CONFIG_KEY_PREFIX_CLOUD = "sntp.cloud";
    public static final String CONFIG_KEY_PREFIX_WEB_CLIENT = "sntp.web-client";
    public static final String CONFIG_KEY_PREFIX_ES = "sntp.data.elasticsearch";
    public static final String CONFIG_KEY_PREFIX_MONGODB = "sntp.data.mongodb";
    public static final String CONFIG_KEY_PREFIX_API_ROUTER_LOCAL_CACHE = "sntp.api.first-level-cache";
    public static final String CONFIG_KEY_PREFIX_API_ROUTER_REMOTE_CACHE = "sntp.api.second-level-cache";
    public static final Duration DEFAULT_LOCAL_CACHE_EXPIRE_TIME;
    public static final String ATTR_NAME_API_CONTEXT = "sntpApiContext";
    public static final String ATTR_NAME_CURRENT_REQUEST_CACHE_PROPS = "sntpCurrentRequestCacheProps";
    public static final String BEAN_NAME_API_LOCAL_CACHE = "apiLocalCache";
    public static final String BEAN_NAME_API_REMOTE_CACHE = "apiRemoteCache";
    public static final String BEAN_NAME_API_REMOTE_CACHE_REDIS_CONNECTION_FACTORY = "apiRemoteCacheRedisConnectionFactory";
    public static final String BEAN_NAME_API_CLASS_LEVEL_HANDLER_MAPPING = "sntpClassLevelHandlerMapping";
    public static final String BEAN_NAME_API_FLY_ACTION_HANDLER_ADAPTER = "flyActionHandlerAdapter";
    public static final String BEAN_NAME_API_FLY_ACTION_HANDLER_RESULT_HANDLER = "flyActionHandlerResultHandler";
    public static final String BEAN_NAME_API_BUSINESS_THREAD_POOL = "apiBusinessThreadPool";
    public static final String HEADER_NAME_BUSINESS_CODE = "business_code";
    public static final String HEADER_NAME_ACTION_NAME = "action_name";
    public static final String HEADER_NAME_CACHE_TIMEOUT = "cache_timeout";
    public static final String HEADER_NAME_CLIENT_IP = "sntp-client-ip";
    public static final String CONFIG_KEY_API_RESULT_MAX_COUNT = "api.result.maxCount";
    public static final Integer CONFIG_KEY_API_RESULT_MAX_COUNT_DEFAULT_VALUE;
    public static final String PARAM_NAME_SIGN = "sign";
    public static final String PARAM_NAME_APP_KEY = "app_key";
    public static final String PARAM_NAME_TIMESTAMP = "time_stamp";
    public static final String CONFIG_KEY_PREFIX_CACHE = "sntp.data.cache";
    public static final String BEAN_NAME_CACHE_MANAGER_CONNECTION_FACTORY = "redisConnectionFactory";
    public static final String BEAN_NAME_DEFAULT_CACHE_KEY_GENERATOR = "defaultCacheKeyGenerator";
    public static final String CONFIG_KEY_PREFIX_FS = "sntp.data.faststore";
    public static final String CONFIG_KEY_PREFIX_OSS_CLIENT = "sntp.data.file-client";
    public static final String TIMESTAMP_FIELD = "_tm";
    public static final String CONFIG_KEY_PREFIX = "/sntp/config/";
    public static final String DEFAULT_CONFIG_LABEL = "default";
    public static final String PROPERTY_SOURCE_NAME_PLACEHOLDER = "systemEnvironment";
    public static final String BEAN_NAME_WEBFLUX_WEB_CLIENT = "sntpWebfluxWebClient";

    private SntpConstants() {
    }

    static {
        DEFAULT_CHARSET = StandardCharsets.UTF_8;
        DEFAULT_TIME_ZONE = TimeZone.getTimeZone("GMT+8");
        DEFAULT_LOCAL_CACHE_EXPIRE_TIME = Duration.ofSeconds(3L);
        CONFIG_KEY_API_RESULT_MAX_COUNT_DEFAULT_VALUE = 1000000;
    }
}
