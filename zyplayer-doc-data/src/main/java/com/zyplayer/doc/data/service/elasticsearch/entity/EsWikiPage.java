package com.zyplayer.doc.data.service.elasticsearch.entity;

import com.zyplayer.doc.data.service.elasticsearch.support.Document;

import java.util.Date;

/**
 * wiki文档搜索
 *
 * @author x
 * @since 2019-07-07
 */
@Document(indexName = "zyplayer_doc_wiki", indexType = "_doc")
public class EsWikiPage {
	
	private Long id;
	
	/**
	 * 空间ID
	 */
	private Long spaceId;
	
	/**
	 * 名字
	 */
	private String name;
	
	/**
	 * 父ID
	 */
	private Long parentId;
	
	/**
	 * 节点类型 0=有子节点 1=终节点
	 */
	private Integer nodeType;
	
	/**
	 * 赞的数量
	 */
	private Integer zanNum;
	
	/**
	 * 编辑类型 0=可编辑 1=不允许编辑
	 */
	private Integer editType;
	
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
	 * 修改人ID
	 */
	private Long updateUserId;
	
	/**
	 * 修改人名字
	 */
	private String updateUserName;
	
	/**
	 * 修改时间
	 */
	private Date updateTime;
	
	/**
	 * 0=有效 1=删除
	 */
	private Integer delFlag;
	
	/**
	 * 阅读数
	 */
	private Integer viewNum;
	
	/**
	 * 顺序
	 */
	private Integer seqNo;
	
	/**
	 * 内容
	 */
	private String content;
	
	/**
	 * 预览内容
	 */
	private String preview;
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public Long getSpaceId() {
		return spaceId;
	}
	
	public void setSpaceId(Long spaceId) {
		this.spaceId = spaceId;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public Long getParentId() {
		return parentId;
	}
	
	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}
	
	public Integer getNodeType() {
		return nodeType;
	}
	
	public void setNodeType(Integer nodeType) {
		this.nodeType = nodeType;
	}
	
	public Integer getZanNum() {
		return zanNum;
	}
	
	public void setZanNum(Integer zanNum) {
		this.zanNum = zanNum;
	}
	
	public Integer getEditType() {
		return editType;
	}
	
	public void setEditType(Integer editType) {
		this.editType = editType;
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
	
	public Long getUpdateUserId() {
		return updateUserId;
	}
	
	public void setUpdateUserId(Long updateUserId) {
		this.updateUserId = updateUserId;
	}
	
	public String getUpdateUserName() {
		return updateUserName;
	}
	
	public void setUpdateUserName(String updateUserName) {
		this.updateUserName = updateUserName;
	}
	
	public Date getUpdateTime() {
		return updateTime;
	}
	
	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}
	
	public Integer getDelFlag() {
		return delFlag;
	}
	
	public void setDelFlag(Integer delFlag) {
		this.delFlag = delFlag;
	}
	
	public Integer getViewNum() {
		return viewNum;
	}
	
	public void setViewNum(Integer viewNum) {
		this.viewNum = viewNum;
	}
	
	public Integer getSeqNo() {
		return seqNo;
	}
	
	public void setSeqNo(Integer seqNo) {
		this.seqNo = seqNo;
	}
	
	public String getContent() {
		return content;
	}
	
	public void setContent(String content) {
		this.content = content;
	}
	
	public String getPreview() {
		return preview;
	}
	
	public void setPreview(String preview) {
		this.preview = preview;
	}
}
