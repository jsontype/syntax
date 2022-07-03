-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- 생성 시간: 19-11-02 18:22
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
-- 테이블 구조 `azuma_jb_blog2`
--

CREATE TABLE `azuma_jb_blog2` (
  `no` int(15) NOT NULL,
  `id` char(15) NOT NULL,
  `nickname` char(15) NOT NULL,
  `title` varchar(100) NOT NULL,
  `content` mediumtext NOT NULL,
  `regdate` datetime NOT NULL DEFAULT current_timestamp(),
  `delflag` tinyint(1) NOT NULL DEFAULT 0,
  `imgfile1` varchar(64) DEFAULT NULL,
  `imgsize1` int(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `azuma_jb_blog2`
--
ALTER TABLE `azuma_jb_blog2`
  ADD PRIMARY KEY (`no`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `azuma_jb_blog2`
--
ALTER TABLE `azuma_jb_blog2`
  MODIFY `no` int(15) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
