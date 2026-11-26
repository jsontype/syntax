-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- 생성 시간: 19-11-02 23:38
-- 서버 버전: 10.3.13-MariaDB
-- PHP 버전: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `id11435617_azuma`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `azuma_jb_bbs1`
--

CREATE TABLE `azuma_jb_bbs1` (
  `no` int(15) NOT NULL,
  `familyname` varchar(15) DEFAULT NULL,
  `lastname` varchar(15) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `content` varchar(300) DEFAULT NULL,
  `message` varchar(3000) DEFAULT NULL,
  `regdate` datetime DEFAULT current_timestamp(),
  `phone` varchar(15) DEFAULT NULL,
  `delflag` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `azuma_jb_bbs1`
--
ALTER TABLE `azuma_jb_bbs1`
  ADD PRIMARY KEY (`no`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `azuma_jb_bbs1`
--
ALTER TABLE `azuma_jb_bbs1`
  MODIFY `no` int(15) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
