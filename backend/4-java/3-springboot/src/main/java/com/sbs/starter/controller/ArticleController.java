package com.sbs.starter.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sbs.starter.dto.Article;
import com.sbs.starter.service.ArticleService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j // 이걸 해야 log.info(..) 가 가능, 디버깅 용도
public class ArticleController {
	@Autowired
	ArticleService articleService;

	@RequestMapping("/article/detail")
	public String showDetail(Model model, long id) {
		Article article = articleService.getOne(id);

		articleService.hitUp(id);

		model.addAttribute("article", article);

		return "article/detail";
	}

	@RequestMapping("/article/modify")
	public String showModify(Model model, long id) {
		Article article = articleService.getOne(id);

		model.addAttribute("article", article);

		return "article/modify";
	}

	@RequestMapping("/article/list")
	public String showList(Model model) {
		List<Article> list = articleService.getList();
		int totalCount = articleService.getTotalCount();

		model.addAttribute("list", list);
		model.addAttribute("totalCount", totalCount);

		return "article/list";
	}

	@RequestMapping("/article/add")
	public String showAdd() {
		return "article/add";
	}

	@RequestMapping("/article/doModify")
	@ResponseBody
	public String doModify(@RequestParam Map<String, Object> param, long id) {
		articleService.modify(param);

		String msg = id + "번 게시물이 수정되었습니다.";

		StringBuilder sb = new StringBuilder();

		sb.append("alert('" + msg + "');");
		sb.append("location.replace('./detail?id=" + id + "');");

		sb.insert(0, "<script>");
		sb.append("</script>");

		return sb.toString();
	}

	@RequestMapping("/article/doAdd")
	@ResponseBody
	public String doAdd(@RequestParam Map<String, Object> param) {
		long newId = articleService.add(param);

		String msg = newId + "번 게시물이 추가되었습니다.";

		StringBuilder sb = new StringBuilder();

		sb.append("alert('" + msg + "');");
		sb.append("location.replace('./detail?id=" + newId + "');");

		sb.insert(0, "<script>");
		sb.append("</script>");

		return sb.toString();
	}

	@RequestMapping("/article/doDelete")
	@ResponseBody
	public String doDelete(long id) {
		articleService.delete(id);

		String msg = id + "번 게시물이 삭제되었습니다.";

		StringBuilder sb = new StringBuilder();

		sb.append("alert('" + msg + "');");
		sb.append("location.replace('./list');");

		sb.insert(0, "<script>");
		sb.append("</script>");

		return sb.toString();
	}
}