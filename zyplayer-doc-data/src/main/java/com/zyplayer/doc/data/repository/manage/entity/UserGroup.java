package com.zyplayer.doc.data.repository.manage.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author xuan
 * @since 2021-01-27
 */
public class UserGroup implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 组ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 组名称
     */
    private String groupName;

    /**
     * 组描述
     */
    private String explain;

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
    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }
    public String getExplain() {
        return explain;
    }

    public void setExplain(String explain) {
        this.explain = explain;
    }
    public Integer getDelFlag() {
        return delFlag;
    }

    public void setDelFlag(Integer delFlag) {
        this.delFlag = delFlag;
    }

    @Override
    public String toString() {
        return "UserGroup{" +
        "id=" + id +
        ", groupName=" + groupName +
        ", explain=" + explain +
        ", delFlag=" + delFlag +
        "}";
    }
}
