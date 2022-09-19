package com.sbs.starter.service;

import java.util.List;
import java.util.Map;

import com.sbs.starter.dto.Article;

public interface ArticleService {
	public List<Article> getList();

	public long add(Map<String, Object> param);

	public int getTotalCount();

	public Article getOne(long id);

	public void delete(long id);

	public void modify(Map<String, Object> param);

	public void hitUp(long id);
}