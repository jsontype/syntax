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
-- 테이블 구조 `azuma_php_user1`
--

CREATE TABLE `azuma_php_user1` (
  `no` int(15) NOT NULL,
  `id` char(15) NOT NULL,
  `pw` char(255) NOT NULL,
  `username` char(15) NOT NULL,
  `nickname` char(15) NOT NULL,
  `birth` char(8) NOT NULL,
  `gender` char(6) NOT NULL,
  `tel` char(15) NOT NULL,
  `email` char(30) NOT NULL,
  `addr` char(100) NOT NULL,
  `regdate` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- 테이블의 덤프 데이터 `azuma_php_user1`
--

INSERT INTO `azuma_php_user1` (`no`, `id`, `pw`, `username`, `nickname`, `birth`, `gender`, `tel`, `email`, `addr`, `regdate`) VALUES
(26, 'admin', '21232f297a57a5a743894a0e4a801fc3', '아즈마', '관리자', '19860226', '남자', '01044410015', 'yangdonghwa@hanmail.net', 'South Korea, Jeonrabukdo, Iksan city, Hamyeoleup Yongji1 Gil', '2019-09-23'),
(34, 'testbrbr', '098f6bcd4621d373cade4e832627b4f6', 'test&lt;br&gt;', 'test&lt;br&gt;', '', '남자', '', 'test@test.com', 'test&lt;br&gt;', '2019-09-23'),
(35, 'testbr', '453061fbb6190dc2a6be7ac8e7523fb5', '양동화&lt;br&gt;', '테스트&lt;br&gt;', '', '남자', '', 'test@test.com', '테스트&lt;br&gt;', '2019-09-25'),
(36, 'testbr1', '453061fbb6190dc2a6be7ac8e7523fb5', 'test명&lt;br&gt;', 'test닉&lt;br&gt;', '', '남자', '', 'test@test.com', '테스트주소&lt;br&gt;', '2019-09-25');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `azuma_php_user1`
--
ALTER TABLE `azuma_php_user1`
  ADD PRIMARY KEY (`no`),
  ADD UNIQUE KEY `id` (`id`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `azuma_php_user1`
--
ALTER TABLE `azuma_php_user1`
  MODIFY `no` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
