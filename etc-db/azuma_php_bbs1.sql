-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- 생성 시간: 19-09-25 21:37
-- 서버 버전: 10.3.16-MariaDB
-- PHP 버전: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `id10553334_project_blog`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `azuma_php_bbs1`
--

CREATE TABLE `azuma_php_bbs1` (
  `no` int(11) NOT NULL,
  `bbsid` varchar(10) NOT NULL,
  `id` varchar(15) NOT NULL,
  `nickname` varchar(15) NOT NULL,
  `pw` varchar(255) DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `regdate` datetime NOT NULL DEFAULT current_timestamp(),
  `moddate` datetime DEFAULT NULL,
  `ip` int(20) DEFAULT NULL,
  `category` varchar(20) DEFAULT NULL,
  `content` mediumtext NOT NULL,
  `link` varchar(100) DEFAULT NULL,
  `view` int(10) NOT NULL,
  `delflag` tinyint(1) NOT NULL,
  `imgfile1` varchar(100) DEFAULT NULL,
  `imgsize1` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- 테이블의 덤프 데이터 `azuma_php_bbs1`
--

INSERT INTO `azuma_php_bbs1` (`no`, `bbsid`, `id`, `nickname`, `pw`, `title`, `regdate`, `moddate`, `ip`, `category`, `content`, `link`, `view`, `delflag`, `imgfile1`, `imgsize1`) VALUES
(16, 'bbs1', 'admin', '관리자', NULL, '[기능상세] BBS1', '2019-09-23 10:38:09', '2019-09-25 19:04:37', NULL, '공지', 'DB : azuma_php_bbs1<br />\r\n회원제 등록/수정/삭제 O<br />\r\ntitle, content 항상 줄바꿈 적용 O<br />\r\ntitle, content 태그 적용 on/off 토글 (토글변경시 수정할 파일 : bbs_write.php, bbs_modify.php) O<br />\r\n(username), nickname, (addr), category, link에 태그미적용 O<br />\r\n사진 등록시 파일중복방지 O<br />\r\n비정상적 경로의 수정, 삭제 프로세스 오류 처리 O<br />\r\n조회수 추가시 중복 방지(쿠키 사용) O<br />\r\n수정시 이전 뷰까지 2회 뒤로 이동(세션 사용) O<br />\r\n삭제시 이전 리스트까지 2회 뒤로 이동(세션 사용) O<br />\r\n목록에 뜨는 타이틀의 표시 글자수 제한 O<br />\r\n댓글 기능 X', 'http://azuma.pc.to', 53, 0, 'sample.jpg', 233841),
(22, 'bbs1', 'admin', '관리자', NULL, '[기능상세] Login1', '2019-09-23 12:07:00', '2019-09-25 17:37:46', NULL, '공지', '이름 : 무등급제 기본 유저인포<br />\r\nDB : azuma_php_user1<br />\r\n아이디 영어, 숫자만 입력되게, 삽입시 소문자로 자동 변경 O<br />\r\n패스워드 영어, 숫자, 기호만 입력되게, 암호화(md5) O<br />\r\n생년월일/전화번호 넘버타입만 입력되게 O <br />\r\n이름/닉네임/주소 태그금지 O<br />\r\n회원 등급제(관리자, 우수, 일반) X', 'http://azuma.pc.to', 24, 0, NULL, NULL),
(23, 'bbs1', 'admin', '관리자', NULL, '[메모] TO DO 리스트', '2019-09-23 12:10:40', '2019-09-25 19:08:04', NULL, '공지', 'JSP후에 할.. 잠시 봉인과제<br />\r\n1. [공통] 테이블에 사진 유무시 아이콘 설정<br />\r\n1. bbs(리스트)에 링크걸린 카테고리 컬럼 만들기, 테이블에서 카테고리 클릭시 해당 카테고리 글만 나오게<br />\r\n1. 비밀글로 등록 (틀릴 시 못 읽게, 관리자 id면 읽게)<br />\r\n<br />\r\n1. 회원가입정보 보기/수정 기능<br />\r\n1. 회원가입, 글 등록, 수정에 IP 남기게끔 하기<br />\r\n1. 회원가입시 ID 중복체크버튼 만들기<br />\r\n1. id 계급 만들기<br />\r\n1. sns 가입/로그인 구현<br />\r\n1. 페이스북 프로필 페이지 - 자기소개 적어놓고 글쓰면 나오는 게시자닉네임이나 ID에 링크걸어서 프로필 페이지로 이동하게 하기. ID가 본인꺼면 수정 가능하게 하기<br />\r\n1. 컨택트 페이지 - 메일 보내기, 전화걸기, 카톡, 라인, 문자보내기 등<br />\r\n<br />\r\n1. DB 다른 거 쓰기<br />\r\n1. 000 DB내의 SQL 추출 및 정리해서 with_index폴더에 계속 넣기', 'http://azuma.pc.to', 23, 0, NULL, NULL),
(48, 'bbs2', 'admin', '관리자', NULL, '[기능상세] BBS2', '2019-09-24 11:28:55', '2019-09-25 19:04:13', NULL, '공지', 'DB : azuma_php_bbs1<br />\r\n회원제 등록/수정/삭제 O<br />\r\ntitle, content 항상 줄바꿈 적용 O<br />\r\ntitle, content 태그 적용 on/off 토글 (토글변경시 수정할 파일 : bbs_write.php, bbs_modify.php) O<br />\r\n(username), nickname, (addr), category, link에 태그미적용 O<br />\r\n사진 등록시 파일중복방지 O<br />\r\n비정상적 경로의 수정, 삭제 프로세스 오류 처리 O<br />\r\n조회수 추가시 중복 방지(쿠키 사용) O<br />\r\n수정시 이전 뷰까지 2회 뒤로 이동(세션 사용) O<br />\r\n삭제시 이전 리스트까지 2회 뒤로 이동(세션 사용) O<br />\r\n목록에 뜨는 타이틀의 표시 글자수 제한 O<br />\r\n댓글 기능 O<br />\r\n조회수 추가시 중복 방지(IP 사용) X', 'azuma.pc.to', 22, 0, '15693245351569324535754_sample.jpg', 233841),
(49, 'bbs1', 'testbrbr', 'test<br>', NULL, '태그방지 테스트', '2019-09-25 14:44:38', NULL, NULL, '공지', '&lt;b&gt;태그방지 테스트&lt;/b&gt;&lt;br&gt;<br />\r\n&lt;a href=&quot;#&quot;&gt;태그방지 테스트&lt;/a&gt;<br />\r\n&lt;b&gt;태그방지 테스트<br />\r\n', 'azuma.pc.to', 2, 1, NULL, NULL),
(50, 'bbs2', 'testbrbr', 'test<br>', NULL, '태그방지 테스트', '2019-09-25 14:45:03', '2019-09-25 14:45:25', NULL, '공지', '&lt;b&gt;태그방지 테스트&lt;/b&gt;&lt;br&gt;<br />\r\n&lt;a href=&quot;#&quot;&gt;태그방지 테스트&lt;/a&gt;<br />\r\n&lt;b&gt;태그방지 테스트1', 'azuma.pc.to', 1, 0, NULL, NULL),
(51, 'bbs2', 'testbrbr', 'test<br>', NULL, '51', '2019-09-25 14:47:24', '2019-09-25 18:13:53', NULL, '', '51', '', 1, 1, NULL, NULL),
(52, 'bbs2', 'testbrbr', 'test<br>', NULL, '수정/삭제 후 해당페이지로 이동 테스트', '2019-09-25 14:47:33', NULL, NULL, '', '수정/삭제 후 해당페이지로 이동 테스트', '', 1, 1, NULL, NULL),
(53, 'bbs2', 'testbrbr', 'test<br>', NULL, '수정/삭제 후 해당페이지로 이동 테스트', '2019-09-25 14:47:39', NULL, NULL, '', '수정/삭제 후 해당페이지로 이동 테스트', '', 1, 1, NULL, NULL),
(54, 'bbs2', 'testbrbr', 'test<br>', NULL, '134124', '2019-09-25 14:47:47', '2019-09-25 15:09:43', NULL, '', '수정/삭제 후 해당페이지로 이동 테스트', '', 1, 1, NULL, NULL),
(55, 'bbs2', 'testbrbr', 'test<br>', NULL, '123', '2019-09-25 14:47:53', '2019-09-25 15:13:13', NULL, '', '수정/삭제 후 해당페이지로 이동 테스트', '', 1, 1, NULL, NULL),
(56, 'bbs2', 'testbrbr', 'test<br>', NULL, '수정/삭제 후 해당페이지로 이동 테스트', '2019-09-25 14:48:08', '2019-09-25 15:12:08', NULL, '', '수정/삭제 후 해당페이지로 이동 테스트', '', 2, 1, NULL, NULL),
(57, 'bbs2', 'testbrbr', 'test<br>', NULL, '수정/삭제 후 해당페이지로 이동 테스트', '2019-09-25 14:48:15', NULL, NULL, '', '수정/삭제 후 해당페이지로 이동 테스트', '', 2, 1, NULL, NULL),
(58, 'bbs2', 'testbrbr', 'test<br>', NULL, '수정/삭제 후 해당페이지로 이동 테스트', '2019-09-25 14:48:22', NULL, NULL, '', '수정/삭제 후 해당페이지로 이동 테스트', '', 1, 1, NULL, NULL),
(59, 'bbs2', 'testbrbr', 'test<br>', NULL, '수정/삭제 후 해당페이지로 이동 테스트', '2019-09-25 14:48:29', '2019-09-25 14:59:26', NULL, '', '수정/삭제 후 해당페이지로 이동 테스트1234', '', 1, 1, NULL, NULL),
(60, 'bbs2', 'testbrbr', 'test<br>', NULL, '수정/삭제 후 해당페이지로 이동 테스트', '2019-09-25 14:48:36', NULL, NULL, '', '수정/삭제 후 해당페이지로 이동 테스트', '', 1, 1, NULL, NULL),
(61, 'bbs2', 'testbrbr', 'test<br>', NULL, '수정/삭제 후 해당페이지로 이동 테스트', '2019-09-25 14:48:44', NULL, NULL, '', '수정/삭제 후 해당페이지로 이동 테스트', '', 1, 1, NULL, NULL),
(62, 'bbs2', 'testbrbr', 'test<br>', NULL, '수정/삭제 후 해당페이지로 이동 테스트', '2019-09-25 14:48:52', NULL, NULL, '', '수정/삭제 후 해당페이지로 이동 테스트', '', 1, 1, NULL, NULL),
(63, 'bbs1', 'admin', '관리자', NULL, '1', '2019-09-25 17:38:20', NULL, NULL, '1', '1', '1', 1, 1, NULL, NULL),
(64, 'bbs1', 'testbrbr', 'test<br>', NULL, '1', '2019-09-25 18:15:06', '2019-09-25 18:15:14', NULL, '1', '1123', '1', 1, 1, NULL, NULL),
(65, 'bbs2', 'testbrbr', 'test<br>', NULL, '1', '2019-09-25 18:21:54', '2019-09-25 18:31:13', NULL, '', '1', '', 1, 1, NULL, NULL),
(66, 'bbs2', 'testbrbr', 'test<br>', NULL, '&lt;br&gt;tag체크', '2019-09-25 18:40:22', '2019-09-25 18:40:49', NULL, '&lt;br&gt;tag체크', '&lt;br&gt;tag체크', '', 1, 1, NULL, NULL),
(67, 'bbs1', 'testbrbr', 'test<br>', NULL, 'sdfsdafasfsafdsafdsfadsfdsafdsafas', '2019-09-25 18:57:55', NULL, NULL, 'sad', 'sadf', '', 1, 1, NULL, NULL),
(68, 'bbs2', 'admin', '관리자', NULL, '댓글 0개 테스트', '2019-09-25 20:58:53', NULL, NULL, '공지', '댓글 0개 테스트', 'http://azuma.pc.to', 1, 0, NULL, NULL);

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `azuma_php_bbs1`
--
ALTER TABLE `azuma_php_bbs1`
  ADD PRIMARY KEY (`no`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `azuma_php_bbs1`
--
ALTER TABLE `azuma_php_bbs1`
  MODIFY `no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
