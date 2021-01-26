package com.zyplayer.doc.data.repository.manage.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import java.util.Date;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;

/**
 * <p>
 * 用户权限表
 * </p>
 *
 * @author x
 * @since 2019-05-31
 */
public class UserAuth implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 主键自增ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 用户ID
     */
    private Long userId;

    /**
     * 权限ID
     */
    private Long authId;

    /**
     * 创建用户ID
     */
    private Long createUid;

    /**
     * 更新用户ID
     */
    private Long updateUid;

    /**
     * 是否删除 0=未删除 1=已删除
     */
    private Integer delFlag;

    /**
     * 创建时间
     */
    private Date creationTime;

    /**
     * 更新时间
     */
    private Date updateTime;

    /**
     * 自定义权限结尾
     */
    private String authCustomSuffix;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public Long getAuthId() {
        return authId;
    }

    public void setAuthId(Long authId) {
        this.authId = authId;
    }
    public Long getCreateUid() {
        return createUid;
    }

    public void setCreateUid(Long createUid) {
        this.createUid = createUid;
    }
    public Long getUpdateUid() {
        return updateUid;
    }

    public void setUpdateUid(Long updateUid) {
        this.updateUid = updateUid;
    }
    public Integer getDelFlag() {
        return delFlag;
    }

    public void setDelFlag(Integer delFlag) {
        this.delFlag = delFlag;
    }
    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }
    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }
    public String getAuthCustomSuffix() {
        return authCustomSuffix;
    }

    public void setAuthCustomSuffix(String authCustomSuffix) {
        this.authCustomSuffix = authCustomSuffix;
    }

    @Override
    public String toString() {
        return "UserAuth{" +
        "id=" + id +
        ", userId=" + userId +
        ", authId=" + authId +
        ", createUid=" + createUid +
        ", updateUid=" + updateUid +
        ", delFlag=" + delFlag +
        ", creationTime=" + creationTime +
        ", updateTime=" + updateTime +
        ", authCustomSuffix=" + authCustomSuffix +
        "}";
    }
}
