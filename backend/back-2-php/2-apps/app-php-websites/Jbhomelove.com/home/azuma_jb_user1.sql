-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- 생성 시간: 19-11-02 23:40
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
-- 테이블 구조 `azuma_jb_user1`
--

CREATE TABLE `azuma_jb_user1` (
  `id` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `pw` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `nickname` varchar(15) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 테이블의 덤프 데이터 `azuma_jb_user1`
--

INSERT INTO `azuma_jb_user1` (`id`, `pw`, `username`, `nickname`) VALUES
('tosim36', 'ukuk3636@', '염숙희', '관리자');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `azuma_jb_user1`
--
ALTER TABLE `azuma_jb_user1`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
