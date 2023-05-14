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
-- 테이블 구조 `azuma_php_comment1`
--

CREATE TABLE `azuma_php_comment1` (
  `cno` int(10) NOT NULL,
  `no` int(10) NOT NULL,
  `cid` varchar(10) NOT NULL,
  `id` varchar(10) NOT NULL,
  `nickname` varchar(15) NOT NULL,
  `pw` varchar(255) DEFAULT NULL,
  `regdate` datetime NOT NULL DEFAULT current_timestamp(),
  `moddate` datetime DEFAULT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `comment` varchar(100) NOT NULL,
  `delflag` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `azuma_php_comment1`
--

INSERT INTO `azuma_php_comment1` (`cno`, `no`, `cid`, `id`, `nickname`, `pw`, `regdate`, `moddate`, `ip`, `comment`, `delflag`) VALUES
(1, 48, 'comment1', 'admin', '관리자', NULL, '2019-09-25 12:38:43', NULL, NULL, '댓글 테스트', 0),
(2, 48, 'comment1', 'admin', '관리자', NULL, '2019-09-25 13:39:09', NULL, NULL, '숀', 1),
(3, 48, 'comment1', 'admin', '관리자', NULL, '2019-09-25 13:39:15', NULL, NULL, 'ㅇ히ㅏㅓㅇ니하ㅓㄴㅇ리ㅏ허마ㅣ', 1),
(4, 48, 'comment1', 'admin', '관리자', NULL, '2019-09-25 13:57:24', NULL, NULL, '삭제 구현', 1),
(5, 48, 'comment1', 'admin', '관리자', NULL, '2019-09-25 13:57:32', NULL, NULL, '완성!', 0),
(6, 62, 'comment1', 'admin', '관리자', NULL, '2019-09-25 15:17:41', NULL, NULL, '댓글 달아볼까?', 0),
(7, 53, 'comment1', 'testbr', '테스트<br>', NULL, '2019-09-25 15:19:02', NULL, NULL, '테스트&lt;br&gt;', 1),
(8, 53, 'comment1', 'testbr', '테스트<br>', NULL, '2019-09-25 15:19:17', NULL, NULL, '테스트&lt;br&gt;', 0),
(9, 53, 'comment1', 'testbr', '테스트<br>', NULL, '2019-09-25 15:19:37', NULL, NULL, '테스트&lt;br&gt;', 0),
(10, 59, 'comment1', 'testbr1', 'test닉<br>', NULL, '2019-09-25 15:25:13', NULL, NULL, '테스트&lt;br&gt;', 0),
(11, 59, 'comment1', 'testbr1', 'test닉<br>', NULL, '2019-09-25 15:34:40', NULL, NULL, '음 제대로 나오는군', 0),
(12, 62, 'comment1', 'testbr1', 'test닉<br>', NULL, '2019-09-25 15:36:06', NULL, NULL, 'ㄴㅇㅁㄹ', 0),
(13, 62, 'bbs2', 'admin', '관리자', NULL, '2019-09-25 17:40:07', NULL, NULL, '1', 0),
(14, 62, 'bbs2', 'admin', '관리자', NULL, '2019-09-25 17:40:11', NULL, NULL, '2', 0),
(15, 62, 'bbs2', 'admin', '관리자', NULL, '2019-09-25 17:40:14', NULL, NULL, '3', 0),
(16, 59, 'bbs2', 'testbrbr', 'test<br>', NULL, '2019-09-25 18:00:46', NULL, NULL, 'sdf', 1),
(17, 59, 'bbs2', 'testbrbr', 'test<br>', NULL, '2019-09-25 18:00:50', NULL, NULL, 'sdafdsf', 0),
(18, 62, 'bbs2', 'testbrbr', 'test<br>', NULL, '2019-09-25 18:02:36', NULL, NULL, '123', 1),
(19, 59, 'bbs2', 'testbrbr', 'test<br>', NULL, '2019-09-25 18:03:27', NULL, NULL, '123123', 0),
(20, 61, 'bbs2', 'testbrbr', 'test<br>', NULL, '2019-09-25 18:03:43', NULL, NULL, '123', 1),
(21, 61, 'bbs2', 'testbrbr', 'test<br>', NULL, '2019-09-25 18:03:46', NULL, NULL, '123231', 1),
(22, 22, 'blog2', 'testbrbr', 'test<br>', NULL, '2019-09-25 18:13:04', NULL, NULL, '123', 1),
(23, 22, 'blog2', 'testbrbr', 'test<br>', NULL, '2019-09-25 18:13:07', NULL, NULL, '12323', 0),
(24, 50, 'bbs2', 'admin', '관리자', NULL, '2019-09-25 20:10:18', NULL, NULL, '11', 1),
(25, 50, 'bbs2', 'admin', '관리자', NULL, '2019-09-25 20:10:31', NULL, NULL, '213424', 1),
(26, 48, 'bbs2', 'admin', '관리자', NULL, '2019-09-25 20:10:42', NULL, NULL, '123123213', 1),
(27, 50, 'bbs2', 'admin', '관리자', NULL, '2019-09-25 20:26:02', NULL, NULL, '12343214', 0),
(28, 50, 'bbs2', 'admin', '관리자', NULL, '2019-09-25 20:26:12', NULL, NULL, '1234321424', 0),
(29, 48, 'bbs2', 'admin', '관리자', NULL, '2019-09-25 20:26:30', NULL, NULL, '3214324', 1),
(30, 50, 'bbs2', 'admin', '관리자', NULL, '2019-09-25 20:28:51', NULL, NULL, '23432', 0),
(31, 48, 'bbs2', 'admin', '관리자', NULL, '2019-09-25 20:58:09', NULL, NULL, 'sadfdsf', 0);

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `azuma_php_comment1`
--
ALTER TABLE `azuma_php_comment1`
  ADD PRIMARY KEY (`cno`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `azuma_php_comment1`
--
ALTER TABLE `azuma_php_comment1`
  MODIFY `cno` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
