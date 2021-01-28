package com.zyplayer.doc.data.repository.manage.entity;

import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author xuan
 * @since 2021-01-27
 */
public class UserGroupRelation implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;

    /**
     * 组id
     */
    private Long groupId;

    /**
     * 用户id
     */
    private Long userId;

    /**
     * 用户名
     */
    private String userName;

    /**
     * 删除标记 0=正常 1=已删除
     */
    private Integer delFlag;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public Long getGroupId() {
        return groupId;
    }

    public void setGroupId(Long groupId) {
        this.groupId = groupId;
    }
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
    public Integer getDelFlag() {
        return delFlag;
    }

    public void setDelFlag(Integer delFlag) {
        this.delFlag = delFlag;
    }

    @Override
    public String toString() {
        return "UserGroupRelation{" +
        "id=" + id +
        ", groupId=" + groupId +
        ", userId=" + userId +
        ", userName=" + userName +
        ", delFlag=" + delFlag +
        "}";
    }
}
