package com.zyplayer.doc.data.repository.manage.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * <p>
 * 
 * </p>
 *
 * @author x
 * @since 2019-03-11
 */
@Data
public class WikiSpace implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 主键自增ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 空间名
     */
    private String name;

    /**
     * 空间类型 1=公司 2=个人 3=私人
     */
    private Integer type;

    /**
     * 描述
     */
    private String spaceExplain;

    /**
     * 编辑类型 0=可编辑 1=不允许编辑
     */
    private Integer editType;

    /**
     * 目录延迟加载 0=否 1=是
     */
    private Integer treeLazyLoad;

    /**
     * 是否是开放文档 0=否 1=是
     */
    private Integer openDoc;

    /**
     * 唯一UUID
     */
    private String uuid;

    /**
     * 创建人ID
     */
    private Long createUserId;

    /**
     * 创建人名字
     */
    private String createUserName;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 删除标记 0=正常 1=已删除
     */
    private Integer delFlag;

    /**
     * 用户组 （暂时按逗号分割）
     */
    private String userGroup;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }
    public String getSpaceExplain() {
        return spaceExplain;
    }

    public void setSpaceExplain(String spaceExplain) {
        this.spaceExplain = spaceExplain;
    }
    public Integer getEditType() {
        return editType;
    }

    public void setEditType(Integer editType) {
        this.editType = editType;
    }
    public Integer getTreeLazyLoad() {
        return treeLazyLoad;
    }

    public void setTreeLazyLoad(Integer treeLazyLoad) {
        this.treeLazyLoad = treeLazyLoad;
    }
    public Integer getOpenDoc() {
        return openDoc;
    }

    public void setOpenDoc(Integer openDoc) {
        this.openDoc = openDoc;
    }
    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }
    public Long getCreateUserId() {
        return createUserId;
    }

    public void setCreateUserId(Long createUserId) {
        this.createUserId = createUserId;
    }
    public String getCreateUserName() {
        return createUserName;
    }

    public void setCreateUserName(String createUserName) {
        this.createUserName = createUserName;
    }
    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
    public Integer getDelFlag() {
        return delFlag;
    }

    public void setDelFlag(Integer delFlag) {
        this.delFlag = delFlag;
    }

    @Override
    public String toString() {
        return "WikiSpace{" +
        "id=" + id +
        ", name=" + name +
        ", type=" + type +
        ", spaceExplain=" + spaceExplain +
        ", editType=" + editType +
        ", treeLazyLoad=" + treeLazyLoad +
        ", openDoc=" + openDoc +
        ", uuid=" + uuid +
        ", createUserId=" + createUserId +
        ", createUserName=" + createUserName +
        ", createTime=" + createTime +
        ", delFlag=" + delFlag +
        "}";
    }
}
