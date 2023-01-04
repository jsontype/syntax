/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.controller;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;
import javax.imageio.ImageReader;
import javax.imageio.stream.ImageInputStream;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FileDeleteStrategy;
import org.apache.pdfbox.cos.COSName;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDResources;
import org.apache.pdfbox.pdmodel.graphics.PDXObject;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;
import org.apache.pdfbox.rendering.ImageType;
import org.apache.pdfbox.rendering.PDFRenderer;
import org.apache.pdfbox.tools.imageio.ImageIOUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import jp.co.[company_name].[main_system_name].auth.UserInfo;
import jp.co.[company_name].[main_system_name].exception.ApplicationException;
import jp.co.[company_name].[main_system_name].is.config.Consts;
import jp.co.[company_name].[main_system_name].is.config.MessageConst;
import jp.co.[company_name].[main_system_name].is.entity.TbMstTranslationEnjpConvertEntity;
import jp.co.[company_name].[main_system_name].is.entity.TbMstTranslationEnjpConvertNodeEntity;
import jp.co.[company_name].[main_system_name].is.entity.TbTrnIsdocEntity;
import jp.co.[company_name].[main_system_name].is.entity.TbTrnIsdocNodeEntity;
import jp.co.[company_name].[main_system_name].is.logic.Convert;
import jp.co.[company_name].[main_system_name].is.model.ImageFileDetail;
import jp.co.[company_name].[main_system_name].is.model.Result;
import jp.co.[company_name].[main_system_name].is.model.SearchTbTrnIsdocJsonResult;
import jp.co.[company_name].[main_system_name].is.service.InitialService;
import jp.co.[company_name].[main_system_name].is.service.TbMstTranslationEnjpService;
import jp.co.[company_name].[main_system_name].is.service.TbTrnIsdocService;
import jp.co.[company_name].[main_system_name].is.utils.EntityChangeUtils;
import jp.co.[company_name].[main_system_name].model.Message;
import jp.co.[company_name].[main_system_name].model.StorageFile.FileOperation;
import jp.co.[company_name].[main_system_name].model.WebApiResponse;
import jp.co.[company_name].[main_system_name].utils.LoggingUtils;

/**
 * 클라이언트 측과 연계하는 컨트롤러
 *
 * @author [author]
 * @version [version] [update_date]
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = Consts.SIM_UI_PATH)
public class InviaController extends IsControllerBase {

	private static final Logger log = LoggerFactory.getLogger(InviaController.class);

	@Autowired
	TbTrnIsdocService service;

	@Autowired
	InitialService initialService;

	@Autowired
	TbMstTranslationEnjpService tbMstTranslationEnjpService;

	@Autowired
	private Environment env;

	private static final String STR_SLASH = "/";

	private EntityChangeUtils<TbMstTranslationEnjpConvertEntity, TbMstTranslationEnjpConvertNodeEntity> entityChange = new EntityChangeUtils<TbMstTranslationEnjpConvertEntity, TbMstTranslationEnjpConvertNodeEntity>(
			TbMstTranslationEnjpConvertEntity.class, TbMstTranslationEnjpConvertNodeEntity.class);

	private EntityChangeUtils<TbTrnIsdocEntity, TbTrnIsdocNodeEntity> entityIsdocChange = new EntityChangeUtils<TbTrnIsdocEntity, TbTrnIsdocNodeEntity>(
			TbTrnIsdocEntity.class, TbTrnIsdocNodeEntity.class);

	/**
	 * G032_003_옥내설계다큐멘트를 검색한다.
	 *
	 * @param params 검색조건
	 * @return 검색결과
	 */
	@PostMapping(Consts.SIM_UI_ISDOC_SEARCH)
	public WebApiResponse<Object> searchTbTrnIsdoc(@RequestBody Object params) {
		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("searchTbTrnIsdoc Start");

			Result<List<SearchTbTrnIsdocJsonResult>> body = service.searchTbTrnIsdocJson(params);
			result.setMessages(body.getMessages());

			List<SearchTbTrnIsdocJsonResult> listResult = body.getResponse();
			result.setResponseBody(listResult);
			log.info("searchTbTrnIsdoc End");

		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000,
					e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;
	}

	/**
	 * 지역, 프로젝트명, 주파수의 정보를 클라이언트 쪽에 전달한다.
	 *
	 * @return 검색결과
	 */
	@GetMapping(Consts.SIM_UI_ISDOC_SEARCH_INITIAL)
	public WebApiResponse<Object> searchInitial() {
		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("searchInitial Start");
			result.setResponseBody(initialService.searchInitial());
			Message msg = new Message(MessageConst.MSG_S_IS0000);
			result.addMessage(msg);
			log.info("searchInitial End");
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;
	}

	/**
	 * 시구정촌(한자)의 정보를 클라이언트쪽에 전달한다.
	 *
	 * @param params 검색조건
	 * @return 검색결과
	 */
	@PostMapping(Consts.SIM_UI_ISDOC_SEARCH_CITY)
	public WebApiResponse<Object> searchCity(@RequestBody Object params) {

		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("searchCity Start");

			LinkedHashMap<?, ?> paramsMap = (LinkedHashMap<?, ?>)params;
			String prefecture = Consts.STR_SPACE;
			for (Map.Entry<?, ?> tableMap : paramsMap.entrySet()) {
				if (tableMap.getKey().equals("prefecture") && (tableMap.getValue() != null)) {
					prefecture = (String.valueOf(tableMap.getValue()));
					break;
				}
			}
			result.setResponseBody(initialService.searchCity(prefecture));
			Message msg = new Message(MessageConst.MSG_S_IS0000);
			result.addMessage(msg);
			log.info("searchCity End");
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;

	}

	/**
	 * 클라이언트쪽으로부터 전달되어 있는 파일을 업로드한다.
	 *
	 * @param request 리퀘스트
	 * @param specId 제원번호
	 * @param versionNo 버전번호
	 * @param fileCnt 파일수
	 * @param userInfo 인증유저정보
	 * @return 평면도명 일람, 갱신일시, 버전번호
	 */
	@PostMapping(Consts.SIM_UI_ISDOC_UPLOAD)
	public WebApiResponse<Object> fileUpload(HttpServletRequest request, @RequestParam("specId") String specId,
			@RequestParam("versionNo") int versionNo, @RequestParam("fileCnt") int fileCnt, @AuthenticationPrincipal UserInfo userInfo) {

		WebApiResponse<Object> result = new WebApiResponse<>();
		try {

			log.info("fileUpload Start");

			List<ImageFileDetail> imageFileNameList = new ArrayList<ImageFileDetail>();

			String userId = userInfo.getUserId();

			if (specId == null || specId.isEmpty()) {
				Message msg = new Message(MessageConst.MSG_C_IS0003);
				log.warn(msg.getMessage());
				result.addMessage(msg);
				return result;
			}

			if (fileCnt < 1) {
				Message msg = new Message(MessageConst.MSG_W_IS0008);
				log.warn(msg.getMessage());
				result.addMessage(msg);
				return result;
			}

			MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest)request;
			String nasDirectory = env.getProperty("nasDirectory");
			String floorImage = env.getProperty("floorImageDirectory");
			String specIdDirectory = nasDirectory + STR_SLASH + specId;
			Path path = Paths.get(specIdDirectory);
			if (!Files.exists(path)) {
				try {
					Files.createDirectory(path);
				} catch (Exception e) {
					Message msg = new Message(MessageConst.MSG_E_IS0000, specIdDirectory);
					log.error(msg.getMessage());
					result.addMessage(msg);
					return result;
				}
			}
			String floorImageDirectory = specIdDirectory + STR_SLASH + floorImage;
			path = Paths.get(floorImageDirectory);
			if (!Files.exists(path)) {
				try {
					Files.createDirectory(path);
				} catch (Exception e) {
					Message msg = new Message(MessageConst.MSG_E_IS0000, floorImageDirectory);
					log.error(msg.getMessage());
					result.addMessage(msg);
					return result;
				}
			}

			StringBuilder strPathStringBuilder = new StringBuilder();

			for (int i = 0; i < fileCnt; i++) {
				MultipartFile tempFile = multipartRequest.getFile("files[" + i + "]");
				try {

					strPathStringBuilder.append(floorImageDirectory);
					strPathStringBuilder.append(STR_SLASH);
					String strDirectory = strPathStringBuilder.toString();

					strPathStringBuilder.append(tempFile.getOriginalFilename());
					String strOriginalFilePath = strPathStringBuilder.toString();

					LoggingUtils.fileOperationAuditLogging(FileOperation.Save, strOriginalFilePath, userId, InviaController.class);

					tempFile.transferTo(new File(strOriginalFilePath));
					// 업로드한 파일은 PDF의 경우는 페이지단위로 분할한다.
					if ((tempFile.getOriginalFilename().substring(tempFile.getOriginalFilename().length() - 4))
							.equalsIgnoreCase(".pdf")) {
						imageFileNameList = new ArrayList<ImageFileDetail>();

						imageFileNameList = generateImageFromPDF(strDirectory, strOriginalFilePath, "png", userId);
						strPathStringBuilder.setLength(0);
						break;
					}
					// 업로드했던 파일은 tiff의 경우, 페이지단위로 분할한다.(※java8의 경우는 대응하지 않는다.)
					// Java8 SE(Standard Edition)의 경우、JAI(Java Advanced Imaging)
					// API의 추가 인스톨이 필요하다.
					// @see <a
					// href="https://www.oracle.com/java/technologies/advanced-imaging-api.html">Java
					// Advanced Imaging API Home Page</a>
					// Java9 이후는 JAI 추가 인스톨이 필요하다.
					if ((tempFile.getOriginalFilename().substring(tempFile.getOriginalFilename().length() - 5))
							.equalsIgnoreCase(".tiff")) {
						imageFileNameList = new ArrayList<ImageFileDetail>();

						imageFileNameList = generateImageFromIIFF(strDirectory, strOriginalFilePath, "png", userId);
						strPathStringBuilder.setLength(0);
						break;
					}
					// 업로드한 파일이 PDF와 tiff 이외의 경우, 화상파일을 읽어들인다.
					ImageFileDetail imageFileDetail = new ImageFileDetail();

					// 파일명칭
					imageFileDetail.setImage(tempFile.getOriginalFilename());

					BufferedImage img = ImageIO.read(new File(strOriginalFilePath));
					// 가로 픽셀
					imageFileDetail.setWidth(img.getWidth());
					// 세로 픽셀
					imageFileDetail.setHeight(img.getHeight());

					imageFileNameList.add(imageFileDetail);

					strPathStringBuilder.setLength(0);
				} catch (Exception e) {
					Message msg = new Message(MessageConst.MSG_E_IS0002);
					log.error(msg.getMessage(), e);
					result.addMessage(msg);
					return result;
				}
			}

			// 평면도명 일람, 갱신일시, 버전번호를 변경한다.
			TbTrnIsdocEntity tbTrnIsdoc = new TbTrnIsdocEntity();
			tbTrnIsdoc.setSpecId(specId);
			String strJson = Convert.convertObjToJson(imageFileNameList);
			tbTrnIsdoc.setFloorImages(strJson);
			tbTrnIsdoc.setUpdateUser(userInfo.getUserId());
			tbTrnIsdoc.setVersionNo(versionNo);

			// 유저성 + 유저이름
			String userName = userInfo.getUsernameSei() + userInfo.getUsernameMei();
			tbTrnIsdoc.setUpdateUserName(userName);
			// 소프트웨어 버전
			String swVersion = env.getProperty("swVersion");

			Result<Map<String, Integer>> body = service.update(tbTrnIsdoc, swVersion, false);

			result.setMessages(body.getMessages());
			// 제원번호를 검색조건으로써 설정한다.
			Map<String, String> ifCondMap = new HashMap<String, String>() {
				{
					put("specId", specId);
				}
			};

			Result<List<TbTrnIsdocEntity>> resultBody = service.select(ifCondMap);
			List<TbTrnIsdocEntity> listEntity = resultBody.getResponse();
			List<TbTrnIsdocNodeEntity> listNodeEntity = entityIsdocChange.changeListT2(listEntity);

			List<Map<String, Object>> resultData = new ArrayList<Map<String, Object>>();
			// 평면도명 일람, 갱신일시, 버전번호를 반환한다.
			List<String> nameList = new ArrayList<String>(Arrays.asList("floorImages", "updateDate", "versionNo"));

			for (TbTrnIsdocNodeEntity resultBean : listNodeEntity) {
				Map<String, Object> resultMap = new HashMap<String, Object>();
				for (String name : nameList) {
					Object resultValue = resultBean.getObjectValue(resultBean, name);
					resultMap.put(name, resultValue);
				}
				resultData.add(resultMap);
			}

			if (resultData == null || resultData.isEmpty()) {
				result.setResponseBody(null);
			} else if (resultData.size() == 1) {
				result.setResponseBody(resultData.get(0));
			} else {
				result.setResponseBody(resultData);
			}

			log.info("fileUpload End");
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;
	}

	/**
	 * PDF파일로부터 png파일에 분할한다. (이하생략)
	 *
	 * @param strDirectory png파일의 저장위치
	 * @param pdfFileName PDF파일명칭
	 * @param extension 확장자
	 * @param userId 유저ID
	 * @return 파일명칭、가로, 세로의 픽셀값 리스트
	 */
	private List<ImageFileDetail> generateImageFromPDF(String strDirectory, String pdfFileName, String extension, String userId) {
		List<ImageFileDetail> imageFileNameList = new ArrayList<ImageFileDetail>();
		PDDocument document = null;
		// 예외플래그（예외시에는 파일삭제 안함）
		boolean exceptionFlag = false;
		// 파일오브젝트
		File pdfFile = null;
		try {
			pdfFile = new File(pdfFileName);
			document = PDDocument.load(pdfFile);
			PDFRenderer pdfRenderer = new PDFRenderer(document);

			StringBuilder pngFileNameStringBuilder = new StringBuilder();

			if (hasSameCountFloorImages(document)) {
				int pageNo = 1;

				for (PDPage pdPage : document.getPages()) {
					PDResources pdResources = pdPage.getResources();

					for (COSName cosName : pdResources.getXObjectNames()) {
						PDXObject pdxObject = pdResources.getXObject(cosName);

						if (pdxObject instanceof PDImageXObject) {
							ImageFileDetail imageFileDetail = new ImageFileDetail();

							PDImageXObject pdImageXObject = (PDImageXObject)pdxObject;

							String fileName = String.format("PAGE_" + "%03d.%s", pageNo, extension);
							// 파일명칭
							imageFileDetail.setImage(fileName);

							pngFileNameStringBuilder.append(strDirectory);
							pngFileNameStringBuilder.append(fileName);
							String pngFileName = pngFileNameStringBuilder.toString();

							LoggingUtils.fileOperationAuditLogging(FileOperation.Save, pngFileName, userId, InviaController.class);

							BufferedImage img = pdImageXObject.getImage();
							ImageIO.write(img, extension, new File(pngFileName));

							// 가로 픽셀
							imageFileDetail.setWidth(img.getWidth());
							// 세로 픽셀
							imageFileDetail.setHeight(img.getHeight());

							imageFileNameList.add(imageFileDetail);

							pngFileNameStringBuilder.setLength(0);

							img.flush();

							pageNo++;
						}
					}
				}
			} else {
				for (int page = 0; page < document.getNumberOfPages(); ++page) {

					ImageFileDetail imageFileDetail = new ImageFileDetail();

					BufferedImage bim = pdfRenderer.renderImageWithDPI(page, 300, ImageType.RGB);
					String fileName = String.format("PAGE_" + "%03d.%s", page + 1, extension);
					// 파일 명칭
					imageFileDetail.setImage(fileName);

					pngFileNameStringBuilder.append(strDirectory);
					pngFileNameStringBuilder.append(fileName);
					String pngFileName = pngFileNameStringBuilder.toString();

					LoggingUtils.fileOperationAuditLogging(FileOperation.Save, pngFileName, userId, InviaController.class);

					ImageIOUtil.writeImage(bim, pngFileName, 300);

					BufferedImage img = ImageIO.read(new File(pngFileName));
					// 가로 픽셀
					imageFileDetail.setWidth(img.getWidth());
					// 세로 픽셀
					imageFileDetail.setHeight(img.getHeight());

					imageFileNameList.add(imageFileDetail);

					pngFileNameStringBuilder.setLength(0);

					img.flush();
				}
			}
		} catch (Exception e) {
			Message msg = new Message(MessageConst.MSG_C_IS0004, "PDF");
			exceptionFlag = true;
			log.warn(msg.getMessage(), e);
			return null;
		} finally {
			// 스트림클로즈
			try {
				if (document != null) {
					document.close();
				}
			} catch (IOException e) {
				Message msg = new Message(MessageConst.MSG_C_IS0004, "PDF");
				exceptionFlag = true;
				log.warn(msg.getMessage(), e);
				return null;
			} finally {
				if (!exceptionFlag) {
					// 파일 강제 삭제
					try {
						if (pdfFile != null) {
							FileDeleteStrategy.FORCE.delete(pdfFile);
						}
					} catch (IOException e) {
						Message msg = new Message(MessageConst.MSG_C_IS0004, "PDF");
						log.warn(msg.getMessage(), e);
						return null;
					}
				}
			}
		}

		return imageFileNameList;

	}

	/**
	 * PDFドキュメントの全ページ数とPDFドキュメント内のフロアイメージの数が一致するか否かを判断する。
	 *
	 * @param document PDFドキュメント
	 * @return PDFドキュメントの全ページ数とPDFドキュメント内のフロアイメージの数が一致する場合{@code true}、それ以外の場合{@code false}
	 * @throws Exception 例外
	 */
	private boolean hasSameCountFloorImages(PDDocument document) throws Exception {
		boolean hasSameCountFloorImages = false;

		if (document != null) {
			int pageCount = document.getPages().getCount();
			int imageCount = 0;

			for (PDPage pdPage : document.getPages()) {
				PDResources pdResources = pdPage.getResources();

				for (COSName cosName : pdResources.getXObjectNames()) {
					PDXObject pdxObject = pdResources.getXObject(cosName);

					if (pdxObject instanceof PDImageXObject) {
						imageCount++;
					}
				}
			}

			if (pageCount == imageCount) {
				hasSameCountFloorImages = true;
			}
		}

		return hasSameCountFloorImages;
	}

	/**
	 * TIFFファイルからpngファイルに分割한다.
	 *
	 * @param strDirectory pngファイルの格納場所
	 * @param pdfFileName TIFFファイル名称
	 * @param extension 拡張子
	 * @param userid 유저ID
	 * @return ファイル名称、横と縦のピクセルの値としてのリスト
	 */
	private List<ImageFileDetail> generateImageFromIIFF(String strDirectory, String tiffFileName, String extension, String userId) {
		List<ImageFileDetail> imageFileNameList = new ArrayList<ImageFileDetail>();
		ImageInputStream iis = null;
		// 例外フラグ（例外時にはファイル削除しない）
		boolean exceptionFlag = false;
		// ファイルオブジェクト）
		File tiffFile = null;
		try {
			tiffFile = new File(tiffFileName);

			Iterator<ImageReader> readers = ImageIO.getImageReadersByFormatName("tif");

			ImageReader reader = readers.next();

			iis = ImageIO.createImageInputStream(tiffFile);
			reader.setInput(iis, false);
			int size = reader.getNumImages(true);

			StringBuilder pngFileNameStringBuilder = new StringBuilder();

			for (int page = 0; page < size; page++) {
				ImageFileDetail imageFileDetail = new ImageFileDetail();
				BufferedImage img = reader.read(page);
				String fileName = String.format("PAGE_" + "%03d.%s", page + 1, extension);
				// ファイル名称
				imageFileDetail.setImage(fileName);

				pngFileNameStringBuilder.append(strDirectory);
				pngFileNameStringBuilder.append(fileName);
				String pngFileName = pngFileNameStringBuilder.toString();

				LoggingUtils.fileOperationAuditLogging(FileOperation.Save, pngFileName, userId, InviaController.class);

				ImageIO.write(img, extension, new File(pngFileName));

				BufferedImage image = ImageIO.read(new File(pngFileName));
				// 横のピクセル
				imageFileDetail.setWidth(image.getWidth());
				// 縦のピクセル
				imageFileDetail.setHeight(image.getHeight());

				imageFileNameList.add(imageFileDetail);

				pngFileNameStringBuilder.setLength(0);
			}
		} catch (Exception e) {
			Message msg = new Message(MessageConst.MSG_C_IS0004, "tiff");
			exceptionFlag = true;
			log.warn(msg.getMessage(), e);
			return null;
		} finally {
			// ストリムクローズ
			try {
				if (iis != null) {
					iis.close();
				}
			} catch (IOException e) {
				Message msg = new Message(MessageConst.MSG_C_IS0004, "tiff");
				exceptionFlag = true;
				log.warn(msg.getMessage(), e);
				return null;
			} finally {
				if (!exceptionFlag) {
					// ファイル強制削除
					try {
						if (tiffFile != null) {
							FileDeleteStrategy.FORCE.delete(tiffFile);
						}
					} catch (IOException e) {
						Message msg = new Message(MessageConst.MSG_C_IS0004, "tiff");
						log.warn(msg.getMessage(), e);
						return null;
					}
				}
			}
		}

		return imageFileNameList;

	}

	/**
	 * クライアント側から画像ファイルをダウンロード한다.
	 *
	 * @param request 리퀘스트
	 * @param specid 제원정보
	 * @param imageFileName 画像ファイル名称
	 * @return 添付した画像ファイル
	 */
	@GetMapping(Consts.SIM_UI_ISDOC_DOWNLOAD_FLOOR_IMAGE)
	public ResponseEntity<Resource> downloadFloorImage(HttpServletRequest request,
			@RequestParam("spec-id") String specId, @RequestParam("file-name") String imageFileName) {
		log.info("downloadFloorImage");

		String nasDirectory = env.getProperty("nasDirectory");

		String floorImage = env.getProperty("floorImageDirectory");

		String specIdDirectory = nasDirectory + STR_SLASH + specId;

		String floorImageDirectory = specIdDirectory + STR_SLASH + floorImage;

		Path fileStorageLocation = Paths.get(floorImageDirectory).toAbsolutePath().normalize();

		Path filePath = fileStorageLocation.resolve(imageFileName).normalize();

		Resource resource = loadFileAsResource(filePath);

		if (resource == null) {
			Message msg = new Message(MessageConst.MSG_I_IS0004, specId, floorImageDirectory + STR_SLASH + imageFileName);
			log.info(msg.getMessage());
			return null;
		}

		String contentType = null;
		try {
			contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
		} catch (Exception e) {
			Message msg = new Message(MessageConst.MSG_C_IS0000, e.getMessage());
			log.warn(msg.getMessage());
			return null;
		}

		if (contentType == null) {
			contentType = "application/octet-stream";
		}

		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(contentType))
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
				.body(resource);
	}

	/**
	 * クライアント側からサーバー側のPDFファイルをダウンロードする。
	 *
	 * @param request 리퀘스트
	 * @param specid 제원정보
	 * @param pdfFileName PDFファイル名称
	 * @param userInfo 인증 유저 정보
	 * @return PDFファイル
	 */
	@GetMapping(Consts.SIM_UI_ISDOC_DOWNLOAD_PDF)
	public Object downloadPdf(HttpServletRequest request, @RequestParam("spec-id") String specId, @RequestParam("file-name") String pdfFileName,
			@AuthenticationPrincipal UserInfo userInfo) {
		log.info("downloadPdf");

		String nasDirectory = env.getProperty("nasDirectory");

		String pdfDirectory = env.getProperty("pdfDirectory");

		String specIdDirectory = nasDirectory + "/" + specId;

		String targetDirectory = specIdDirectory + "/" + pdfDirectory;

		Path fileStorageLocation = Paths.get(targetDirectory).toAbsolutePath().normalize();

		Path filePath = fileStorageLocation.resolve(pdfFileName).normalize();

		Resource resource = loadFileAsResource(filePath);

		if (resource == null) {
			Message msg = new Message(MessageConst.MSG_E_IS0003, specId, targetDirectory + "/" + pdfFileName);
			log.error(msg.getMessage());
			return msg;
		}

		LoggingUtils.fileOperationAuditLogging(FileOperation.Load, filePath.toString(), userInfo.getUserId(), InviaController.class);

		String contentType = null;
		try {
			contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
		} catch (Exception e) {
			Message msg = new Message(MessageConst.MSG_C_IS0000, e.getMessage());
			log.warn(msg.getMessage(), e);
			return msg;
		}

		if (contentType == null) {
			contentType = "application/octet-stream";
		}

		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(contentType))
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
				.body(resource);
	}

	/**
	 * クライアント側からサーバー側のCSVファイルをダウンロードする。
	 *
	 * @param request 리퀘스트
	 * @param specid 제원정보
	 * @param csvFileName CSVファイル名称
	 * @param userInfo 인증 유저 정보
	 * @return CSVファイル
	 */
	@GetMapping(Consts.SIM_UI_ISDOC_DOWNLOAD_CSV)
	public Object downloadCsv(HttpServletRequest request, @RequestParam("spec-id") String specId, @RequestParam("file-name") String csvFileName,
			@AuthenticationPrincipal UserInfo userInfo) {
		log.info("downloadCsv");

		String nasDirectory = env.getProperty("nasDirectory");

		String csvDirectory = env.getProperty("csvDirectory");

		String specIdDirectory = nasDirectory + "/" + specId;

		String targetDirectory = specIdDirectory + "/" + csvDirectory;

		Path fileStorageLocation = Paths.get(targetDirectory).toAbsolutePath().normalize();

		Path filePath = fileStorageLocation.resolve(csvFileName).normalize();

		Resource resource = loadFileAsResource(filePath);

		if (resource == null) {
			Message msg = new Message(MessageConst.MSG_E_IS0003, specId, targetDirectory + "/" + csvFileName);
			log.error(msg.getMessage());
			return msg;
		}

		LoggingUtils.fileOperationAuditLogging(FileOperation.Load, filePath.toString(), userInfo.getUserId(), InviaController.class);

		String contentType = null;
		try {
			contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
		} catch (Exception e) {
			Message msg = new Message(MessageConst.MSG_C_IS0000, e.getMessage());
			log.warn(msg.getMessage(), e);
			return msg;
		}

		if (contentType == null) {
			contentType = "application/octet-stream";
		}

		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(contentType))
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
				.body(resource);
	}

	/**
	 * 画像ファイルをロード한다.
	 *
	 * @param imageFileName 画像ファイルのパス
	 * @return 画像ファイルのリソース
	 */
	private Resource loadFileAsResource(Path filePath) {
		try {

			Resource resource = new UrlResource(filePath.toUri());
			if (resource.exists()) {
				return resource;
			} else {
				return null;
			}
		} catch (Exception e) {
			Message msg = new Message(MessageConst.MSG_C_IS0000, e.getMessage());
			log.warn(msg.getMessage());
			return null;
		}

	}

	/**
	 * 各項目の日本語と英語の名称をクライアント側に渡すメソッドです。
	 *
	 * @return json形式としての日本語と英語の名称
	 */
	@GetMapping(Consts.SIM_UI_GET_PATH + Consts.SIM_UI_TRANSLATION_ENJP_PATH)
	public WebApiResponse<Object> selectTranslationEnjp() {

		log.info("selectTranslationEnjp Start");

		WebApiResponse<Object> result = new WebApiResponse<>();

		Message msg = new Message(MessageConst.MSG_S_IS0000);
		result.addMessage(msg);

		Result<TbMstTranslationEnjpConvertEntity> body = tbMstTranslationEnjpService.selectTranslationEnjpJson();

		result.setMessages(body.getMessages());
		TbMstTranslationEnjpConvertEntity entity = body.getResponse();
		TbMstTranslationEnjpConvertNodeEntity nodeEntity = new TbMstTranslationEnjpConvertNodeEntity();
		try {
			nodeEntity = entityChange.getT2(entity);
			result.setResponseBody(nodeEntity);
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}

		log.info("selectTranslationEnjp End");
		return result;

	}

	/**
	 * クライアント側からシミュレーション図を取得한다.
	 *
	 * @param request 리퀘스트
	 * @param specid 제원정보
	 * @param mode モード
	 * @param floorId フロアID
	 * @param frequencyBand 周波数
	 * @param frequencyServiceName 周波数サービス名称
	 * @param fileName 画像ファイル名称
	 * @return 添付した画像ファイル
	 */
	@GetMapping(Consts.SIM_UI_ISDOC_DOWNLOAD_SIMULATION_IMAGE)
	public ResponseEntity<Resource> downloadSimulationImage(HttpServletRequest request,
			@RequestParam("spec-id") String specId, @RequestParam("mode") String mode,
			@RequestParam("floor-id") String floorId, @RequestParam("frequency-band") String frequencyBand,
			@RequestParam("frequency-service-name") String frequencyServiceName,
			@RequestParam("file-name") String fileName) {
		log.info("downloadSimulationImage Start");

		String nasDirectory = env.getProperty("nasDirectory");

		String specIdDirectory = nasDirectory + STR_SLASH + specId;

		byte[] decodedBytes = Base64.getDecoder().decode(frequencyServiceName);

		String decodedFrequencyServiceName = new String(decodedBytes);

		String fileImageDirectory = specIdDirectory + STR_SLASH + "simulation" + STR_SLASH + mode + STR_SLASH + floorId + STR_SLASH + frequencyBand + STR_SLASH
				+ "prediction" + STR_SLASH + decodedFrequencyServiceName;

		Path fileStorageLocation = Paths.get(fileImageDirectory).toAbsolutePath().normalize();

		String fileFullName = fileName + ".png";

		Path filePath = fileStorageLocation.resolve(fileFullName).normalize();

		Resource resource = loadFileAsResource(filePath);

		if (resource == null) {
			Message msg = new Message(MessageConst.MSG_I_IS0004, specId, fileImageDirectory + STR_SLASH + fileFullName);
			log.info(msg.getMessage());
			return null;
		}

		String contentType = null;
		try {
			contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
		} catch (Exception e) {
			Message msg = new Message(MessageConst.MSG_C_IS0000, e.getMessage());
			log.warn(msg.getMessage());
			return null;
		}

		if (contentType == null) {
			contentType = "application/octet-stream";
		}

		log.info("downloadSimulationImage End");

		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(contentType))
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
				.body(resource);
	}

	/**
	 * 인증 유저 정보をクライアント側に渡すメソッドです。
	 *
	 * @param userInfo 인증 유저 정보
	 * @return 인증 유저 정보
	 */
	@GetMapping(Consts.SIM_UI_GET_PATH + Consts.SIM_UI_USER_INFO)
	public WebApiResponse<Object> getUserInfo(@AuthenticationPrincipal UserInfo userInfo) {
		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("getUserInfo Start");
			result.setResponseBody(userInfo);
			Message msg = new Message(MessageConst.MSG_S_IS0000);
			result.addMessage(msg);
			log.info("getUserInfo End");
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;
	}

	/**
	 * 諸元番号より「屋内設計ドキュメント」と「設計対象部材一覧」と「タスク履歴」とNAS上の諸元番号でのディレクトリを削除한다.
	 *
	 * @param 諸元番号 specId
	 * @return 削除結果
	 */
	@PostMapping(Consts.SIM_UI_MST_PATH + "/delete/{specId}")
	public WebApiResponse<Object> deleteIsdoc(@PathVariable("specId") String specId) {
		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("deleteIsdoc Start");
			// 諸元番号より「屋内設計ドキュメント」と「設計対象部材一覧」を削除
			Result<Map<String, Integer>> resultDel = service.delete(specId);
			// NAS上の諸元番号でのディレクトリ
			String nasDirectory = env.getProperty("nasDirectory");
			String specIdDirectory = nasDirectory + STR_SLASH + specId;
			// NAS上の諸元番号でのディレクトリをまるごとで削除
			deleteDirectory(specIdDirectory);
			result.setResponseBody(resultDel.getResponse());
			result.setMessages(resultDel.getMessages());
			log.info("deleteIsdoc End");
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.error(e.getMessage(), e);
		}
		return result;
	}

	/**
	 * 対象パスのディレクトリの削除を行う。 ディレクトリ配下のファイル等が存在する場合は配下のファイルをすべて削除します。
	 *
	 * @param dirPath 削除対象ディレクトリパス
	 * @throws Exception
	 */
	private void deleteDirectory(final String dirPath) throws Exception {
		File file = new File(dirPath);
		recursiveDeleteFile(file);
	}

	/**
	 * 対象のファイルオブジェクトの削除を行う。 ディレクトリの場合は再帰処理を行い、削除する。
	 *
	 * @param file ファイルオブジェクト
	 * @throws Exception
	 */
	private void recursiveDeleteFile(final File file) throws Exception {
		// 存在しない場合は処理終了
		if (!file.exists()) {
			return;
		}
		// 対象がディレクトリの場合は再帰処理
		if (file.isDirectory()) {
			for (File child : file.listFiles()) {
				recursiveDeleteFile(child);
			}
		}
		// 対象がファイルもしくは配下が空のディレクトリの場合は削除する
		file.delete();
	}

}
