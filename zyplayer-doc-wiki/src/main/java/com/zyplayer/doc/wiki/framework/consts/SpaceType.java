package com.zyplayer.doc.wiki.framework.consts;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

public class SpaceType {
    public static final Integer publicSpace = 1;
    public static final Integer personalSpace = 2;
    public static final Integer privateSpace = 3;

    public static boolean isPublic(Integer type) {
        return Objects.equals(type, publicSpace);
    }

    public static boolean isPersonal(Integer type) {
        return Objects.equals(type, personalSpace);
    }

    public static boolean isOthersPersonal(Integer type, Long loginUserId, Long spaceUserId) {
        return Objects.equals(type, personalSpace) && !Objects.equals(loginUserId, spaceUserId);
    }

    public static boolean isPrivate(Integer type) {
        return Objects.equals(type, privateSpace);
    }

    public static boolean isSelfPrivate(Integer type, Long loginUserId, Long spaceUserId) {
        return Objects.equals(type, privateSpace) && Objects.equals(loginUserId, spaceUserId);
    }

    public static boolean isOthersPrivate(Integer type, Long loginUserId, String userGroup) {
        return Objects.equals(type, privateSpace) && isContainsGroup(loginUserId,userGroup);
    }

    //判断用户是否在当前空间的用户组里
    public static boolean isContainsGroup(Long loginUserId, String userGroup) {
        String[] users = userGroup.split(",");
        List<String> list = Arrays.asList(users);
        return list.contains(loginUserId);
    }
}
