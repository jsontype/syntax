-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- 생성 시간: 19-09-25 21:36
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
-- 테이블 구조 `azuma_php_blog1`
--

CREATE TABLE `azuma_php_blog1` (
  `no` int(11) NOT NULL,
  `blogid` varchar(10) NOT NULL,
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
-- 테이블의 덤프 데이터 `azuma_php_blog1`
--

INSERT INTO `azuma_php_blog1` (`no`, `blogid`, `id`, `nickname`, `pw`, `title`, `regdate`, `moddate`, `ip`, `category`, `content`, `link`, `view`, `delflag`, `imgfile1`, `imgsize1`) VALUES
(19, 'blog1', 'admin', '관리자', NULL, '[기능상세] BLOG1', '2019-09-24 04:08:24', '2019-09-25 20:59:52', NULL, '공지', 'DB : azuma_php_blog1<br />\r\n회원제 등록/수정/삭제 O<br />\r\ntitle, content 항상 줄바꿈 적용 O<br />\r\ntitle, content 태그 적용 on/off 토글 (토글변경시 수정할 파일 : bbs_write.php, bbs_modify.php) O<br />\r\n(username), nickname, (addr), category, link에 태그미적용 : O<br />\r\n사진 등록시 파일중복방지 O<br />\r\n비정상적 경로의 수정, 삭제 프로세스 오류 처리 O<br />\r\n조회수 추가시 중복 방지(쿠키 사용) 필요없음<br />\r\n수정시 이전 뷰까지 2회 뒤로 이동(세션 사용) O<br />\r\n삭제시 이전 뷰까지 1회 뒤로 이동(세션 사용) O<br />\r\n댓글 기능 X', 'http://azuma.pc.to', 0, 0, '15694451921569445192911_sample.jpg', 233841),
(22, 'blog2', 'admin', '관리자', NULL, '[기능상세] BLOG2', '2019-09-25 17:29:07', '2019-09-25 17:29:29', NULL, '공지', 'DB : azuma_php_blog1<br />\r\n회원제 등록/수정/삭제 O<br />\r\ntitle, content 항상 줄바꿈 적용 O<br />\r\ntitle, content 태그 적용 on/off 토글 (토글변경시 수정할 파일 : bbs_write.php, bbs_modify.php) O<br />\r\n(username), nickname, (addr), category, link에 태그미적용 : O<br />\r\n사진 등록시 파일중복방지 O<br />\r\n비정상적 경로의 수정, 삭제 프로세스 오류 처리 O<br />\r\n조회수 추가시 중복 방지(쿠키 사용) 필요없음<br />\r\n수정시 이전 뷰까지 2회 뒤로 이동(세션 사용) O<br />\r\n삭제시 이전 뷰까지 1회 뒤로 이동(세션 사용) O<br />\r\n댓글 기능 O<br />\r\n조회수 추가시 중복 방지(IP 사용) 필요없음', 'azuma.pc.to', 0, 0, '15694325471569432547764_sample.jpg', 233841),
(23, 'blog1', 'admin', '관리자', NULL, '1', '2019-09-25 17:39:03', NULL, NULL, '1', '1', '1', 0, 1, NULL, NULL),
(24, 'blog1', 'admin', '관리자', NULL, '2', '2019-09-25 17:39:12', '2019-09-25 17:59:12', NULL, '2', '22222', '2', 0, 1, NULL, NULL),
(25, 'blog1', 'admin', '관리자', NULL, '3', '2019-09-25 17:39:22', NULL, NULL, '3', '3', '3', 0, 1, NULL, NULL),
(26, 'blog1', 'admin', '관리자', NULL, '1', '2019-09-25 17:39:29', NULL, NULL, '1', '1', '1', 0, 1, NULL, NULL),
(27, 'blog1', 'admin', '관리자', NULL, '2', '2019-09-25 17:39:36', NULL, NULL, '2', '2', '2', 0, 1, NULL, NULL),
(28, 'blog1', 'admin', '관리자', NULL, '1', '2019-09-25 17:39:49', NULL, NULL, '1', '1', '1', 0, 1, NULL, NULL),
(29, 'blog1', 'admin', '관리자', NULL, '2', '2019-09-25 17:39:55', NULL, NULL, '2', '2', '2', 0, 1, NULL, NULL),
(30, 'blog1', 'admin', '관리자', NULL, '1', '2019-09-25 17:40:44', NULL, NULL, '1', '1', '1', 0, 1, NULL, NULL),
(31, 'blog1', 'admin', '관리자', NULL, '1', '2019-09-25 17:40:50', NULL, NULL, '', '1', '', 0, 1, NULL, NULL),
(32, 'blog1', 'admin', '관리자', NULL, '2', '2019-09-25 17:41:02', NULL, NULL, '', '2', '', 0, 1, NULL, NULL),
(33, 'blog1', 'testbrbr', 'test<br>', NULL, '1', '2019-09-25 18:16:24', NULL, NULL, '1', '1', '1', 0, 1, NULL, NULL),
(34, 'blog2', 'testbrbr', 'test<br>', NULL, '1234', '2019-09-25 18:16:54', NULL, NULL, '1234', '111', '134', 0, 1, '15694354141569435414091_project1.JPG', 282668),
(35, 'blog2', 'testbrbr', 'test<br>', NULL, '1', '2019-09-25 18:23:02', NULL, NULL, '', '1', '', 0, 1, NULL, NULL),
(36, 'blog1', 'admin', '관리자', NULL, '1', '2019-09-25 21:01:24', NULL, NULL, '', '1', '', 0, 1, NULL, NULL);

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `azuma_php_blog1`
--
ALTER TABLE `azuma_php_blog1`
  ADD PRIMARY KEY (`no`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `azuma_php_blog1`
--
ALTER TABLE `azuma_php_blog1`
  MODIFY `no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
