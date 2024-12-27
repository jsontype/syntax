/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.service;

import java.awt.image.BufferedImage;
import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.InputStream;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.imageio.ImageIO;
import javax.xml.bind.DatatypeConverter;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.DateFormatUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

import jp.co.[company_name].[main_system_name].is.config.MessageConst;
import jp.co.[company_name].[main_system_name].is.entity.TbHisIsTaskListEntity;
import jp.co.[company_name].[main_system_name].is.model.SaveAsPdfParams;
import jp.co.[company_name].[main_system_name].is.repository.TbHisIsTaskListRepository;
import jp.co.[company_name].[main_system_name].model.Message;
import jp.co.[company_name].[main_system_name].model.WebApiResponse;
import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;
import net.sf.jasperreports.export.SimplePdfExporterConfiguration;

/**
 * PDF 저장 서비스 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@Service
public class CreatePdfService {
	/** 로그출력 */
	private static final Logger log = LoggerFactory.getLogger(CreatePdfService.class);

	/** PDF 파일 출력 템플릿 파일 Path */
	private static final String PDF_TEMPLATES_PATH = "pdf/templates/";

	/** 리소스 로더 */
	@Autowired
	private ResourceLoader resourceLoader;

	/** 환경설정 프로퍼티 */
	@Autowired
	private Environment env;

	/** 태스크 리스트(tb_his_is_task_list) 레포지토리 */
	@Autowired
	private TbHisIsTaskListRepository tbHisIsTaskListRepository;

	/**
	 * PDF을 저장한다.
	 *
	 * @param params PDF 저장정보
	 * @param userId 유저ID
	 * @return WEB-API의 레스폰스
	 */
	public WebApiResponse<Object> createPdf(Object params, String userId) {
		WebApiResponse<Object> response = new WebApiResponse<>();
		Message msg = null;

		TbHisIsTaskListEntity tbHisIsTaskListEntity = new TbHisIsTaskListEntity();
		Timestamp beginTime = new Timestamp(System.currentTimeMillis());
		tbHisIsTaskListEntity.setBeginTime(beginTime);
		tbHisIsTaskListEntity.setCreateUser(userId);
		tbHisIsTaskListEntity.setUpdateUser(userId);

		String specId = null;

		try {
			SaveAsPdfParams pdfParams = getSaveAsPdfParams(params);

			if (pdfParams != null) {
				specId = pdfParams.getSpecId();
				tbHisIsTaskListEntity.setSpecId(specId);
				tbHisIsTaskListEntity.setOrderId(pdfParams.getOrderId());
				tbHisIsTaskListEntity.setSiteId(pdfParams.getSiteId());

				String japanesePageTitle = getJapanesePageTitle(pdfParams);

				StringBuilder taskName = new StringBuilder(japanesePageTitle);
				taskName.append(" / PDF保存");
				tbHisIsTaskListEntity.setTaskName(taskName.toString());

				tbHisIsTaskListRepository.insert(tbHisIsTaskListEntity);

				List<JasperPrint> jasperPrintList = getJasperPrintList(pdfParams);

				StringBuilder path = new StringBuilder(env.getProperty("nasDirectory"));
				path.append("/");
				path.append(specId);
				path.append("/");
				path.append(env.getProperty("pdfDirectory"));
				path.append("/");

				File pdfPath = new File(path.toString());

				if (!pdfPath.exists()) {
					pdfPath.mkdirs();
				}

				path.append(getPdfFileName(pdfParams));

				File pdfFile = new File(path.toString());

				JRPdfExporter exporter = new JRPdfExporter();
				exporter.setExporterInput(SimpleExporterInput.getInstance(jasperPrintList));
				exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(pdfFile));
				SimplePdfExporterConfiguration configuration = new SimplePdfExporterConfiguration();
				exporter.setConfiguration(configuration);
				exporter.exportReport();

				String fileName = pdfFile.getName();

				StringBuilder description = new StringBuilder(japanesePageTitle);
				description.append("のPDF保存：");
				tbHisIsTaskListEntity.setDescription(description.toString());

				tbHisIsTaskListEntity.setFileName(fileName);

				StringBuilder url = new StringBuilder("/pdf?spec-id=");
				url.append(specId);
				url.append("&file-name=");
				url.append(fileName);

				tbHisIsTaskListEntity.setUrl(url.toString());

				msg = new Message(MessageConst.MSG_S_IS0000);
			} else {
				List<Message> messages = new ArrayList<Message>();

				Message msg2 = new Message(MessageConst.MSG_W_IS0001, "PDF保存");
				messages.add(msg2);
				log.warn(msg2.getMessage());

				response.setMessages(messages);
			}
		} catch (Exception e) {
			msg = new Message(MessageConst.MSG_C_IS0000, e.getMessage());
			log.warn(msg.getMessage(), e);

			tbHisIsTaskListEntity.setDescription("PDF保存(失敗)");
		} finally {
			Timestamp endTime = new Timestamp(System.currentTimeMillis());
			tbHisIsTaskListEntity.setEndTime(endTime);

			tbHisIsTaskListRepository.update(tbHisIsTaskListEntity);
		}

		if (msg != null) {
			response.addMessage(msg);
		}

		return response;
	}

	/**
	 * 출력대상 PDF의 JasperPrint리스트를 취득한다.
	 *
	 * @param pdfParams PDF 저장 파라미터
	 * @return 출력 대상 PDF의 JasperPrint 리스트
	 * @throws Exception 예외
	 */
	private List<JasperPrint> getJasperPrintList(SaveAsPdfParams pdfParams) throws Exception {
		List<JasperPrint> jasperPrintList = new ArrayList<>();

		String japanesePageTitle = getJapanesePageTitle(pdfParams);

		HashMap<String, Object> parameters = new HashMap<String, Object>();
		parameters.put("pageTitle", japanesePageTitle);
		parameters.put("radioStationName", pdfParams.getRadioStationName());
		parameters.put("designDepartment", pdfParams.getDesignDepartment());
		parameters.put("confidentialFlg", pdfParams.isConfidentialFlg());

		JasperReport jasperReport = JasperCompileManager.compileReport(getPdfTemplateFileInputStream(pdfParams, false));

		String pageTitle = pdfParams.getPageTitle();

		List<SaveAsPdfParams.FloorInfos> floorInfosList = pdfParams.getFloorInfos();

		if ("prediction".equals(pageTitle)) {
			for (int i = 0, size = floorInfosList.size(); i < size; i++) {
				SaveAsPdfParams.FloorInfos floorInfos = floorInfosList.get(i);

				parameters.put("floorLabel", floorInfos.getFloorLabel());
				parameters.put("comment", floorInfos.getComment());

				parameters.put("imageData", getBase64EncodedImageData(floorInfos));

				parameters.put("pageNumber", i + 1);

				JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, new JREmptyDataSource());
				jasperPrintList.add(jasperPrint);
			}
		} else if ("cabling".equals(pageTitle) || "loss".equals(pageTitle)) {
			JasperReport jasperSubReport = JasperCompileManager.compileReport(getPdfTemplateFileInputStream(pdfParams, true));
			parameters.put("subreport", jasperSubReport);

			List<String> imageDataList = new ArrayList<String>();
			List<String> imageDatas = pdfParams.getImageDatas();

			if (imageDatas != null && !imageDatas.isEmpty()) {
				if ("cabling".equals(pageTitle)) {
					for (String imageData : imageDatas) {
						imageDataList.add(getBase64EncodedImageData(imageData));
					}
				} else if ("loss".equals(pageTitle)) {
					imageDataList.addAll(getSplitBase64EncodedImageDatas(pdfParams, imageDatas.get(0)));
				}
			}

			parameters.put("imageDataList", imageDataList);

			JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, new JREmptyDataSource());
			jasperPrintList.add(jasperPrint);
		}

		return jasperPrintList;
	}

	/**
	 * PDF 저장정보를 PDF 저장 파라미터에 변환한다.
	 *
	 * @param params PDF 저장정보
	 * @return PDF 저장 파라미터
	 * @throws Exception 예외
	 */
	private SaveAsPdfParams getSaveAsPdfParams(Object params) throws Exception {
		SaveAsPdfParams pdfParams = null;

		ObjectMapper objectMapper = new ObjectMapper();

		String jsonString = objectMapper.writeValueAsString(params);

		if (jsonString != null && !jsonString.isEmpty()) {
			pdfParams = objectMapper.readValue(jsonString, SaveAsPdfParams.class);
		}

		return pdfParams;
	}

	/**
	 * PDF 출력 템플렛 파일 InputStream을 취득한다.
	 *
	 * @param pdfParams PDF 저장 파라미터
	 * @param isSubreport 서브리포트의 경우는 {@code true}, 그 이외에는 {@code false}
	 * @return PDF 출력 템플렛 파일 InputStream
	 * @throws Exception 예외
	 */
	private InputStream getPdfTemplateFileInputStream(SaveAsPdfParams pdfParams, boolean isSubreport) throws Exception {

		StringBuilder templatePath = new StringBuilder(ResourceLoader.CLASSPATH_URL_PREFIX);

		templatePath.append(PDF_TEMPLATES_PATH);
		templatePath.append(pdfParams.getPageTitle());
		templatePath.append("_");
		templatePath.append(pdfParams.getPageSize());
		templatePath.append("_");
		templatePath.append(pdfParams.getPageOrientation());

		if (isSubreport) {
			templatePath.append("_subreport");
		}

		templatePath.append(".jrxml");

		Resource resource = resourceLoader.getResource(templatePath.toString());

		return resource.getInputStream();
	}

	/**
	 * 일본어 타이틀을 취득한다. (이하생략)
	 *
	 * @param pdfParams PDF 저장 파라미터
	 * @return 일본어 타이틀
	 */
	private String getJapanesePageTitle(SaveAsPdfParams pdfParams) {
		String japanesePageTitle = null;

		String pageTitle = pdfParams.getPageTitle();

		if ("prediction".equals(pageTitle)) {
			japanesePageTitle = "予測図";
		} else if ("cabling".equals(pageTitle)) {
			japanesePageTitle = "系統図";
		} else if ("loss".equals(pageTitle)) {
			japanesePageTitle = "損失表";
		}

		return japanesePageTitle;
	}

	/**
	 * BASE64エンコーディングイメージデータ를 취득한다.。
	 *
	 * @param obj イメージデータ(BASE64エンコーディングイメージデータ)
	 * @return BASE64エンコーディングイメージデータ
	 */
	private String getBase64EncodedImageData(Object obj) {
		String imageData = null;

		if (obj != null) {
			String[] imageDataStringArray = null;
			String imageDataString = null;

			if (obj instanceof SaveAsPdfParams.FloorInfos) {
				imageDataString = ((SaveAsPdfParams.FloorInfos)obj).getImageData();
			} else if (obj instanceof String) {
				imageDataString = (String)obj;
			}

			imageDataStringArray = StringUtils.split(imageDataString, ",");

			if (imageDataStringArray != null && 1 < imageDataStringArray.length) {
				imageData = imageDataStringArray[1];
			}
		}

		return imageData;
	}

	/**
	 * イメージデータ(BASE64エンコーディングイメージデータ)をデコードし指定された矩形領域で定義されるサブイメージのイメージデータ(BASE64エンコーディングイメージデータ)リスト를 취득한다.。
	 *
	 * @param pdfParams PDF保存パラメータ
	 * @param imageData イメージデータ(BASE64エンコーディングイメージデータ)
	 * @return イメージデータ(BASE64エンコーディングイメージデータ)リスト
	 * @throws Exception 例外
	 */
	private List<String> getSplitBase64EncodedImageDatas(SaveAsPdfParams pdfParams, String imageData) throws Exception {
		List<String> splitBase64EncodedImageDatas = new ArrayList<String>();

		if (imageData != null && !imageData.isEmpty()) {
			String[] imageDataStringArray = StringUtils.split(imageData, ",");

			if (imageDataStringArray != null && 1 < imageDataStringArray.length) {
				String imageDataString = imageDataStringArray[1];

				byte[] imageBytes = DatatypeConverter.parseBase64Binary(imageDataString);
				BufferedImage bufferedImage = ImageIO.read(new ByteArrayInputStream(imageBytes));

				int height = bufferedImage.getHeight();
				int width = bufferedImage.getWidth();

				String pageSize = pdfParams.getPageSize();
				String pageOrientation = pdfParams.getPageOrientation();

				BigDecimal pageRatio = null;
				double overwrapRatio = 0.0d;
				if ("A4".equals(pageSize)) {
					if ("portrait".equals(pageOrientation)) {
						pageRatio = new BigDecimal(704).divide(new BigDecimal(555), 10, BigDecimal.ROUND_HALF_UP);
						overwrapRatio = 0.01d;
					} else if ("landscape".equals(pageOrientation)) {
						pageRatio = new BigDecimal(457).divide(new BigDecimal(802), 10, BigDecimal.ROUND_HALF_UP);
						overwrapRatio = 0.02d;
					}
				} else if ("A3".equals(pageSize)) {
					if ("portrait".equals(pageOrientation)) {
						pageRatio = new BigDecimal(1033).divide(new BigDecimal(802), 10, BigDecimal.ROUND_HALF_UP);
						overwrapRatio = 0.01d;
					} else if ("landscape".equals(pageOrientation)) {
						pageRatio = new BigDecimal(684).divide(new BigDecimal(1151), 10, BigDecimal.ROUND_HALF_UP);
						overwrapRatio = 0.02d;
					}
				}

				int splitHeight = (new BigDecimal(width).multiply(pageRatio)).intValue();

				if (splitHeight < height) {
					int overwrapHeight = (new BigDecimal(splitHeight).multiply(new BigDecimal(overwrapRatio))).intValue();

					int pageNo = 1;
					for (int i = 0; i < height; i += splitHeight) {
						BufferedImage bufferedSubimage = bufferedImage.getSubimage(0, i == 0 ? 0 : i - (overwrapHeight * pageNo), width,
								height <= i + splitHeight ? height - i + (overwrapHeight * pageNo) : splitHeight);
						ByteArrayOutputStream baos = new ByteArrayOutputStream();
						BufferedOutputStream bos = new BufferedOutputStream(baos);

						ImageIO.write(bufferedSubimage, "png", bos);
						splitBase64EncodedImageDatas.add(Base64.getEncoder().encodeToString(baos.toByteArray()));
						bufferedSubimage.flush();

						pageNo++;
					}
				} else {
					splitBase64EncodedImageDatas.add(imageDataString);
				}

				bufferedImage.flush();
			}
		}

		return splitBase64EncodedImageDatas;
	}

	/**
	 * PDFファイル名를 취득한다.。
	 * <ul>
	 * <li>予測図
	 * <ul>
	 * <li>indoor_prediction_yyyyMMdd_HHmmss.pdf</li>
	 * </ul>
	 * </li>
	 * <li>系統図
	 * <ul>
	 * <li>indoor_cabling_yyyyMMdd_HHmmss.pdf</li>
	 * </ul>
	 * </li>
	 * <li>損失表
	 * <ul>
	 * <li>indoor_loss_yyyyMMdd_HHmmss.pdf</li>
	 * </ul>
	 * </li>
	 * </ul>
	 *
	 * @param pdfParams PDF保存パラメータ
	 * @return PDFファイル名
	 */
	private String getPdfFileName(SaveAsPdfParams pdfParams) {
		StringBuilder sb = new StringBuilder("indoor_");

		sb.append(pdfParams.getPageTitle());
		sb.append("_");
		sb.append(DateFormatUtils.format(new Date(), "yyyyMMdd_HHmmss"));
		sb.append(".pdf");

		return sb.toString();
	}

}
