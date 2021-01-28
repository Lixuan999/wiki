package com.zyplayer.doc.manage.web.manage;

import cn.hutool.core.util.RandomUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.zyplayer.doc.core.json.DocResponseJson;
import com.zyplayer.doc.data.config.security.DocUserDetails;
import com.zyplayer.doc.data.config.security.DocUserUtil;
import com.zyplayer.doc.data.repository.manage.entity.AuthInfo;
import com.zyplayer.doc.data.repository.manage.entity.UserAuth;
import com.zyplayer.doc.data.repository.manage.entity.UserInfo;
import com.zyplayer.doc.data.service.manage.AuthInfoService;
import com.zyplayer.doc.data.service.manage.UserAuthService;
import com.zyplayer.doc.data.service.manage.UserInfoService;
import com.zyplayer.doc.manage.utils.SignHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.sound.sampled.AudioFormat;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.*;
import java.util.*;
import java.util.stream.Collectors;

@RestController
public class LoginController {

   /* private static String application = "1234";

    private static String appKey = "HBTORVzBaGtqmGE";

    private static final String secret = "cGYIsTyTWXGeP4frqOqmdWxRO5xmh2Pi";

    private static String Url = "http://ggservice.sandbox.gofund.com.cn/v1/ft_account_login/login_by_password";*/

    private static String application = "149";

    private static String appKey = "FnAgaShASxhtvai";

    private static final String secret = "eTKk8enocm7X8wSDVHBKiW55SLg3WcQI";

    private static String Url = "http://ggservice.go-goal.cn/v1/ft_account_login/login_by_password";


    @Autowired
    private UserInfoService userInfoService;
    @Autowired
    private UserAuthService userAuthService;
    @Autowired
    private AuthInfoService authInfoService;

    @PostMapping(value = "/login")
    public DocResponseJson<Object> login(String username, String password, HttpServletResponse response) throws Exception {

        QueryWrapper<UserInfo> queryWrapper = new QueryWrapper<UserInfo>().eq("user_no", username).eq("del_flag", 0);

        //调用外部登录接口验证
        HashMap<String, Object> userMap = Get(username, password);

        //取data信息
        Map<String, Object> data = JSONObject.parseObject(JSON.toJSONString(userMap.get("data")));

        if (username.equals("admin")) {

            UserInfo admin = userInfoService.getById(1);

            String pwdMd5 = DigestUtils.md5DigestAsHex(password.getBytes());

            if (Objects.equals(admin.getPassword(), pwdMd5)) {
                return success(admin, response);
            } else {
                return DocResponseJson.warn("密码错误");
            }
        }
        //如果用户不为管理员的话
        else {
            //得到返回业务code
            Integer code = (Integer) data.get("code");
            //如果登录成功
            if (code == 0) {
                //如果数据库里用户名不存在
                if (userInfoService.getOne(queryWrapper) == null) {

                    UserInfo userInfo = new UserInfo();

                    userInfo.setUserNo(username);
                    if (data.get("real_name") != null) {
                        userInfo.setUserName((String) data.get("real_name"));
                    } else {
                        if (data.get("nickname") != null) {
                            userInfo.setUserName((String) data.get("real_name"));
                        } else {
                            userInfo.setUserName((String) data.get("account_name"));
                        }
                    }
                    userInfo.setPassword(DigestUtils.md5DigestAsHex(password.getBytes()));
                    userInfo.setPhone((String) data.get("mobile"));
                    userInfo.setAvatar((String) data.get("avatar"));
                    userInfo.setSex((Integer) data.get("sex"));
                    userInfo.setEmail((String) data.get("email"));

                    //保存登录接口传入信息
                    userInfoService.saveOrUpdate(userInfo);
                }
                //如果已存在用户，返回成功
                UserInfo user = userInfoService.getOne(queryWrapper);
                //存入cookie，token信息
                return success(user, response);
            } else {
                return DocResponseJson.warn("密码错误");
            }
        }
    }


    @PostMapping(value = "/logout")
    public DocResponseJson<Object> logout() {
        DocUserUtil.logout();
        return DocResponseJson.ok();
    }


    public static HashMap<String, Object> Get(String username, String password) throws Exception {
        try {


            String nowTime = Long.toString(System.currentTimeMillis() / 1000);

            System.out.println(nowTime);

            Map<String, String> params = new HashMap<>();
            params.put("app_key", appKey);
            params.put("time_stamp", nowTime);

            params.put("login_name", username);
            params.put("password", password);
            params.put("application", application);

            final String sign =
                    SignHelper.makeSign(
                            "get",
                            "v1/ft_account_login/login_by_password",
                            params,
                            secret
                    );


            // 传入参数
            String realUrl = Url + "?"
                    + "login_name=" + username + "&"
                    + "password=" + password + "&"
                    + "application=" + application + "&"
                    + "app_key=" + appKey + "&"
                    + "time_stamp=" + nowTime + "&"
                    + "sign=" + URLEncoder.encode(sign, "UTF-8");


            URL url = new URL(realUrl);

            System.out.println(url);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            // 在连接之前设置属性

            // Content-Type实体头用于向接收方指示实体的介质类型，指定HEAD方法送到接收方的实体介质类型，或GET方法发送的请求介质类型
            conn.setRequestProperty("Content-Type", "application/json; charset=utf-8");
            // 设置打开与此URLConnection引用的资源的通信链接时使用的指定超时值（以毫秒为单位）
            conn.setConnectTimeout(10000);
            // 将读取超时设置为指定的超时时间，以毫秒为单位。
            // conn.setReadTimeout(60000);
            conn.setRequestMethod("GET");
            // Post 请求不能使用缓存
            conn.setUseCaches(false);

            // 建立连接
            conn.connect();
            // 获取响应
            BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line;
            String result = "";
            while ((line = reader.readLine()) != null) {
                result += line;
            }
            reader.close();
            conn.disconnect();
            HashMap<String, Object> hashMap = JSON.parseObject(result, HashMap.class);
            return hashMap;
        } catch (MalformedURLException e) {

            e.printStackTrace();
        } catch (SocketTimeoutException e) {
            e.printStackTrace();
        } catch (IOException e) {

            e.printStackTrace();
        }
        return null;
    }

    public DocResponseJson<Object> success(UserInfo user, HttpServletResponse response) {
        QueryWrapper<UserAuth> authWrapper = new QueryWrapper<>();
        authWrapper.eq("user_id", user.getId()).eq("del_flag", "0");
        List<UserAuth> userAuthList = userAuthService.list(authWrapper);
        Set<String> userAuthSet = Collections.emptySet();

        if (userAuthList != null && userAuthList.size() > 0) {
            List<Long> authIdList = userAuthList.stream().map(UserAuth::getAuthId).collect(Collectors.toList());
            Collection<AuthInfo> authInfoList = authInfoService.listByIds(authIdList);
            Map<Long, String> authNameMap = authInfoList.stream().collect(Collectors.toMap(AuthInfo::getId, AuthInfo::getAuthName));
            userAuthSet = userAuthList.stream().map(val -> {
                String authName = Optional.ofNullable(authNameMap.get(val.getAuthId())).orElse("");
                return authName + Optional.ofNullable(val.getAuthCustomSuffix()).orElse("");
            }).collect(Collectors.toSet());
        }

        String accessToken = RandomUtil.simpleUUID();
        DocUserDetails userDetails = new DocUserDetails(user.getId(), user.getUserName(), user.getPassword(), true, userAuthSet);
        DocUserUtil.setCurrentUser(accessToken, userDetails);

        // 放入cookie，过期时间：24小时
        Cookie cookie = new Cookie("accessToken", accessToken);
        cookie.setPath("/");
        cookie.setDomain("xuanPlayer.com");
        cookie.setMaxAge(60 * 60 * 24);
        response.addCookie(cookie);
        // 当前路径cookie
        cookie = new Cookie("accessToken", accessToken);
        cookie.setPath("/");
        cookie.setMaxAge(60 * 60 * 24);
        response.addCookie(cookie);
        return DocResponseJson.ok();
    }
}