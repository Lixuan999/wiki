package com.zyplayer.doc.wiki.controller.vo;

public class UserPageAuthVo {
	private String userName;
	private Long userId;
	private Integer editPage;
	private Integer commentPage;
	private Integer deletePage;
	private Integer pageFileUpload;
	private Integer pageFileDelete;
	private Integer pageAuthManage;
	
	public Integer getCommentPage() {
		return commentPage;
	}
	
	public void setCommentPage(Integer commentPage) {
		this.commentPage = commentPage;
	}
	
	public Integer getDeletePage() {
		return deletePage;
	}
	
	public void setDeletePage(Integer deletePage) {
		this.deletePage = deletePage;
	}
	
	public Integer getPageFileUpload() {
		return pageFileUpload;
	}
	
	public void setPageFileUpload(Integer pageFileUpload) {
		this.pageFileUpload = pageFileUpload;
	}
	
	public Integer getPageFileDelete() {
		return pageFileDelete;
	}
	
	public void setPageFileDelete(Integer pageFileDelete) {
		this.pageFileDelete = pageFileDelete;
	}
	
	public Integer getPageAuthManage() {
		return pageAuthManage;
	}
	
	public void setPageAuthManage(Integer pageAuthManage) {
		this.pageAuthManage = pageAuthManage;
	}
	
	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public Long getUserId() {
		return userId;
	}
	
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
	public Integer getEditPage() {
		return editPage;
	}
	
	public void setEditPage(Integer editPage) {
		this.editPage = editPage;
	}
}
