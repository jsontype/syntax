-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 21-08-28 08:15
-- 서버 버전: 10.4.17-MariaDB
-- PHP 버전: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `php`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `blog1`
--

CREATE TABLE `blog1` (
  `no` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `img_file` varchar(255) DEFAULT NULL,
  `img_size` int(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `del_flg` tinyint(1) NOT NULL DEFAULT 0,
  `reg_date` datetime DEFAULT current_timestamp(),
  `mod_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='블로그';

--
-- 테이블의 덤프 데이터 `blog1`
--

INSERT INTO `blog1` (`no`, `title`, `category`, `content`, `id`, `img_file`, `img_size`, `name`, `del_flg`, `reg_date`, `mod_date`) VALUES
(1, '테스트 수정 후입니다.', '테스트', '테스트 컨텐츠 수정 후입니다.', 'test1@test.com', '', 0, '테스터1', 0, '2021-08-26 18:39:25', '2021-08-27 21:12:00'),
(2, '두번째 게시물 테스트', '테스트', '두번째 게시물 테스트 컨텐츠입니다.', 'test2@test.com', '', 0, '테스터2', 0, '2021-08-26 18:54:22', NULL),
(4, '1', '1', '1', 'test1@test.com', NULL, NULL, '테스터1', 0, '2021-08-28 11:31:37', NULL),
(5, '2', '2', '2', 'test1@test.com', NULL, NULL, '테스터1', 0, '2021-08-28 11:31:43', NULL),
(6, '3', '3', '3', 'test1@test.com', NULL, NULL, '테스터1', 0, '2021-08-28 11:31:49', NULL),
(7, '4', '4', '4', 'test1@test.com', NULL, NULL, '테스터1', 0, '2021-08-28 11:31:54', NULL),
(8, '글 하나 추가', '테스트', '1234', 'test1@test.com', NULL, NULL, '테스터1', 0, '2021-08-28 12:09:46', NULL),
(12, '2134', '1234', '파일 업로드 테스트', 'test1@test.com', 'coding_cafe.jpg', 20026, '테스터1', 0, '2021-08-28 14:04:49', NULL),
(13, '파일 업로드 테스트 2', '테스트', '이미지 있음', 'test1@test.com', 'php.png', 299456, '테스터1', 0, '2021-08-28 14:10:48', NULL),
(14, '2435', '2', '2', 'test1@test.com', NULL, NULL, '테스터1', 0, '2021-08-28 14:11:00', NULL),
(15, '1234', '1234', '1234', 'test1@test.com', '16301279071630127907313_coding_cafe.jpg', 26742, '테스터1', 0, '2021-08-28 14:18:27', NULL);

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `blog1`
--
ALTER TABLE `blog1`
  ADD PRIMARY KEY (`no`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `blog1`
--
ALTER TABLE `blog1`
  MODIFY `no` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
