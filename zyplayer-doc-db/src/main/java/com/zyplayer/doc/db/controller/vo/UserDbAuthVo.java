package com.zyplayer.doc.db.controller.vo;

public class UserDbAuthVo {
	private String userName;
	private Long userId;
	private Integer executeAuth;
	private Integer descEditAuth;
	
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
	
	public Integer getExecuteAuth() {
		return executeAuth;
	}
	
	public void setExecuteAuth(Integer executeAuth) {
		this.executeAuth = executeAuth;
	}
	
	public Integer getDescEditAuth() {
		return descEditAuth;
	}
	
	public void setDescEditAuth(Integer descEditAuth) {
		this.descEditAuth = descEditAuth;
	}
}
