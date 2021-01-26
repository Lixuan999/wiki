package com.zyplayer.doc.wiki.controller.vo;

import com.zyplayer.doc.data.repository.manage.entity.WikiPage;
import com.zyplayer.doc.data.repository.manage.entity.WikiPageContent;
import com.zyplayer.doc.data.repository.manage.entity.WikiPageFile;

import java.util.List;

public class WikiPageContentVo {
	private WikiPage wikiPage;
	private WikiPageContent pageContent;
	private List<WikiPageFile> fileList;
	private Integer selfZan;
	private Long selfUserId;
	private Integer canEdit;
	private Integer canDelete;
	private Integer canUploadFile;
	private Integer canConfigAuth;
	
	public WikiPage getWikiPage() {
		return wikiPage;
	}
	
	public void setWikiPage(WikiPage wikiPage) {
		this.wikiPage = wikiPage;
	}
	
	public WikiPageContent getPageContent() {
		return pageContent;
	}
	
	public void setPageContent(WikiPageContent pageContent) {
		this.pageContent = pageContent;
	}
	
	public List<WikiPageFile> getFileList() {
		return fileList;
	}
	
	public void setFileList(List<WikiPageFile> fileList) {
		this.fileList = fileList;
	}
	
	public Integer getSelfZan() {
		return selfZan;
	}
	
	public void setSelfZan(Integer selfZan) {
		this.selfZan = selfZan;
	}
	
	public Long getSelfUserId() {
		return selfUserId;
	}
	
	public void setSelfUserId(Long selfUserId) {
		this.selfUserId = selfUserId;
	}
	
	public Integer getCanEdit() {
		return canEdit;
	}
	
	public void setCanEdit(Integer canEdit) {
		this.canEdit = canEdit;
	}
	
	public Integer getCanDelete() {
		return canDelete;
	}
	
	public void setCanDelete(Integer canDelete) {
		this.canDelete = canDelete;
	}
	
	public Integer getCanConfigAuth() {
		return canConfigAuth;
	}
	
	public void setCanConfigAuth(Integer canConfigAuth) {
		this.canConfigAuth = canConfigAuth;
	}
	
	public Integer getCanUploadFile() {
		return canUploadFile;
	}
	
	public void setCanUploadFile(Integer canUploadFile) {
		this.canUploadFile = canUploadFile;
	}
}
