package com.zyplayer.doc.manage.utils;


import lombok.extern.slf4j.Slf4j;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.net.URLEncoder;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 生成签名类
 */
@Slf4j
public class SignHelper {

    // 编码方式
    private static final String CONTENT_CHARSET = "UTF-8";
    // HMAC算法
    private static final String HMAC_ALGORITHM = "HmacSHA1";

    public static String makeSign(String method, String urlPath, Map<String, String> params, String secret) throws Exception {
        Map<String, String> paramsMap = new HashMap<>();
        if (params != null) {
            paramsMap.putAll(params);
        }
        // 确保不含sign
        paramsMap.remove("sign");

        // 按照编码规则对value编码
        codeParamValues(paramsMap);


        Mac mac = Mac.getInstance(HMAC_ALGORITHM);
        SecretKeySpec secretKey = new SecretKeySpec(secret.getBytes(CONTENT_CHARSET), mac.getAlgorithm());
        mac.init(secretKey);
        String mk = makeSource(method, urlPath, paramsMap);
        byte[] hash = mac.doFinal(mk.getBytes(CONTENT_CHARSET));
        // 将加密后的字符串经过Base64编码
        return new String(Base64.getEncoder().encode(hash));
    }

    private static String makeSource(String method, String urlPath, Map<String, String> params) throws Exception {
        /*
          1.将请求的URI路径进行URL编码
          2.将除“sign”外的所有参数按key进行字典升序排列
          3.将第2步中排序后的参数(key=value)用&拼接起来,进行URL编码
          4.将HTTP请求方式（GET或者POST）以及第1步和第3步中的字符串用&拼接起来。
          5 第1步以及第3步中的到的字符串用&拼接起来，得到源串
        */
        String[] keys = params.keySet().toArray(new String[0]);
        Arrays.sort(keys);
        StringBuilder buffer = new StringBuilder(128);
        buffer.append(method.toUpperCase()).append("&").append(encodeUrl(urlPath)).append("&");
        StringBuilder buffer2 = new StringBuilder();

        final Set<String> ignoredParamName = getIgnoredParamName(params);

        for (int i = 0; i < keys.length; i++) {
            if (params.get(keys[i]) == null) {
                continue;
            }
            if (ignoredParamName.contains(keys[i])) {
                continue;
            }
            buffer2.append(keys[i]).append("=").append(params.get(keys[i]));
            if (i != keys.length - 1) {
                buffer2.append("&");
            }
        }
        buffer.append(encodeUrl(buffer2.toString()));
        return buffer.toString();
    }

    private static Set<String> getIgnoredParamName(Map<String, String> params) {
        final Set<String> ignoredParamName = new HashSet<>();
        ignoredParamName.add(SntpConstants.PARAM_NAME_SIGN);
//        ignoredParamName.add(SntpWebConstants.PARAM_NAME_EXTRA_CAMEL_CASE_PARAM);
//        final String camelCaseStr = params.get(SntpWebConstants.PARAM_NAME_EXTRA_CAMEL_CASE_PARAM);
//        if (!StringUtils.isEmpty(camelCaseStr)) {
//            Arrays.stream(camelCaseStr.split(SntpWebConstants.PARAM_DELIMITER_EXTRA_CAMEL_CASE_PARAM))
//                    .filter(org.apache.commons.lang3.StringUtils::isNoneBlank)
//                    .forEach(ignoredParamName::add);
//        }
        return ignoredParamName;
    }

    /**
     * URL编码 (FRC1738规范)
     *
     * @param input 待编码的字符串
     * @return 编码后的字符串
     */
    private static String encodeUrl(String input) throws Exception {
        return URLEncoder.encode(input, CONTENT_CHARSET).replace("+", "%20").replace("*", "%2A");
    }

    /**
     * 参数编码
     *
     * @param s
     * @return
     */
    private static String encodeValue(String s) {
        String rexp = "[0-9a-zA-Z!*\\(\\)]";
        StringBuffer sb = new StringBuffer(s);
        StringBuffer sbRtn = new StringBuffer();
        Pattern p = Pattern.compile(rexp);
        char temp;
        String tempStr;

        for (int i = 0; i < sb.length(); i++) {
            temp = sb.charAt(i);
            tempStr = String.valueOf(temp);
            Matcher m = p.matcher(tempStr);

            boolean result = m.find();
            if (!result) {
                tempStr = hexString(temp); //支持表情
            }
            sbRtn.append(tempStr);
        }

        return sbRtn.toString();
    }

    /**
     * 对参数value值先进行一次编码方法，用于验签
     * (编码规则为：除了 0~9 a~z A~Z !*() 之外其他字符按其ASCII码的十六进制加%进行表示，例如“-”编码为“%2D”)
     * 参考 <回调发货URL的协议说明_V3>
     *
     * @param params 回调传参Map (key,value);
     */
    public static void codeParamValues(Map<String, String> params) {
        Set<String> keySet = params.keySet();
        Iterator<String> itr = keySet.iterator();
        while (itr.hasNext()) {
            String key = itr.next();
            String value = params.get(key);
            value = encodeValue(value);
            params.put(key, value);
        }
    }

    /**
     * 应用发货URL　十六进制编码  支持表情
     *
     * @param s
     * @return
     */
    private static String hexString(char s) {
        String d = Integer.toBinaryString(s);
        if (7 < d.length()) {
            d = "10" + d.substring(d.length() - 6);
        }
        String hex = Integer.toString(Integer.parseInt(d, 2), 16).toUpperCase();
        if (hex.length() == 1) {
            hex = "0" + hex;
        }
        return "%" + hex;
    }

}
