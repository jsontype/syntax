/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].exception;

import java.util.ArrayList;
import java.util.List;

import jp.co.[company_name].[main_system_name].model.Message;

/** 
 *
 * 업무 예외 공통 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
public class ApplicationException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	private List<Message> messages = null;

	/**
	 * 생성자(Constructor)
	 *
	 * @param message 메세지
	 */
	public ApplicationException(Message message) {
		super(message.toString());
		this.messages = new ArrayList<Message>();
		this.messages.add(message);
	}

	/**
	 * 생성자(Constructor)
	 *
	 * @param message 메세지
	 */
	public ApplicationException(List<Message> messages) {
		super(messages.toString());
		this.messages = new ArrayList<Message>();
		this.messages = messages;
	}

	/**
	 * 메세지를 반환한다.
	 *
	 * @return 메세지
	 */
	public Message getMessageInternal() {
		return messages.get(0);
	}

	/**
	 * 메세지 리스트를 반환한다.
	 *
	 * @return 메세지 리스트
	 */
	public List<Message> getMessages() {
		return this.messages;
	}
}