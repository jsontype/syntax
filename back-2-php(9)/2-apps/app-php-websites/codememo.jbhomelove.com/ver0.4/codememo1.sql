-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- 생성 시간: 21-10-20 11:13
-- 서버 버전: 10.5.12-MariaDB-cll-lve
-- PHP 버전: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `u359090323_azumadb`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `codememo1`
--

CREATE TABLE `codememo1` (
  `no` int(255) NOT NULL,
  `del_flg` tinyint(1) NOT NULL DEFAULT 0,
  `title` longtext NOT NULL,
  `code` longtext NOT NULL,
  `content` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='코드메모장';

--
-- 테이블의 덤프 데이터 `codememo1`
--

INSERT INTO `codememo1` (`no`, `del_flg`, `title`, `code`, `content`) VALUES
(1, 0, 'test', 'Etc', 'test');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `codememo1`
--
ALTER TABLE `codememo1`
  ADD PRIMARY KEY (`no`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `codememo1`
--
ALTER TABLE `codememo1`
  MODIFY `no` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
