package jp.co.[company_name].[main_system_name].is.model;

import java.util.Collections;
import java.util.List;

import jp.co.[company_name].[main_system_name].is.enums.ResultStatusEnum;
import jp.co.[company_name].[main_system_name].model.Message;

/**
 *
 * 범용 결과 모델
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
public class Result<T> {

	public Result() {
	}

	public Result(T response) {
		this.response = response;
	}

	public Result(Message message, T response) {
		this.messages = Collections.singletonList(message);
		this.response = response;
	}

	public Result(List<Message> messages, T response) {
		this.messages = messages;
		this.response = response;
	}

	public Result(ResultStatusEnum status, List<Message> messages, T response) {
		this.result = status.getMsg();
		this.messages = messages;
		this.response = response;
	}

	public Result(ResultStatusEnum status, Message message, T response) {
		this.result = status.getMsg();
		this.messages = Collections.singletonList(message);
		this.response = response;
	}

	public Result(ResultStatusEnum status, Message message) {
		this.result = status.getMsg();
		this.messages = Collections.singletonList(message);
	}

	public Result(ResultStatusEnum status, List<Message> messages) {
		this.result = status.getMsg();
		this.messages = messages;
	}

	public Result(ResultStatusEnum status) {
		this.result = status.getMsg();
		this.messages = Collections.emptyList();
	}

	private String result = ResultStatusEnum.Success.getMsg();
	private List<Message> messages = Collections.emptyList();
	private T response;

	/**
	 * 결과를 반환한다.
	 *
	 * @return 결과
	 */
	public String getResult() {
		return result;
	}

	/**
	 * 메세지를 반환한다.
	 *
	 * @return 메시지
	 */
	public List<Message> getMessages() {
		return messages;
	}

	/**
	 * 응답(response)를 반환한다. (이하생략)
	 *
	 * @return 응답(response)
	 */
	public T getResponse() {
		return response;
	}

	/**
	 * TODO(変数和名)를 설정한다.。
	 *
	 * @param result TODO(変数和名)
	 */
	public void setResult(String result) {
		this.result = result;
	}

	/**
	 * TODO(変数和名)를 설정한다.。
	 *
	 * @param messages TODO(変数和名)
	 */
	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}

	/**
	 * TODO(変数和名)를 설정한다.。
	 *
	 * @param response TODO(変数和名)
	 */
	public void setResponse(T response) {
		this.response = response;
	}

}