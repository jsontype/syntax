-- Create Tables

CREATE TABLE `azuma_f_bbs1` (
  `no` int(10) NOT NULL,
  `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `content` mediumtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `nickname` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `reg_date` datetime NOT NULL DEFAULT current_timestamp(),
  `mod_date` datetime DEFAULT NULL,
  `blackbox1` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tag1` mediumtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `view` int(10) NOT NULL,
  `del_flg` char(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `img_file1` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `img_size1` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='강의게시판1';

CREATE TABLE `azuma_f_bbs2` (
  `no` int(10) NOT NULL,
  `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `content` mediumtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `nickname` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `reg_date` datetime NOT NULL DEFAULT current_timestamp(),
  `mod_date` datetime DEFAULT NULL,
  `blackbox1` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tag1` mediumtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `view` int(10) NOT NULL,
  `del_flg` char(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `img_file1` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `img_size1` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='강의게시판2';

CREATE TABLE `azuma_f_bbs3` (
  `no` int(10) NOT NULL,
  `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `content` mediumtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `nickname` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `reg_date` datetime NOT NULL DEFAULT current_timestamp(),
  `mod_date` datetime DEFAULT NULL,
  `blackbox1` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tag1` mediumtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `view` int(10) NOT NULL,
  `del_flg` char(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `img_file1` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `img_size1` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='강의게시판3';




CREATE TABLE `azuma_f_comment1` (
  `cno` int(10) NOT NULL,
  `no` int(10) NOT NULL,
  `cid` varchar(10) NOT NULL,
  `id` varchar(10) NOT NULL,
  `nickname` varchar(15) NOT NULL,
  `reg_date` datetime NOT NULL DEFAULT current_timestamp(),
  `mod_date` datetime DEFAULT NULL,
  `comment` varchar(300) NOT NULL,
  `del_flg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `azuma_f_user1` (
  `id` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `realname` varchar(20) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `birth` int(30) NOT NULL,
  `email` varchar(70) NOT NULL,
  `tel` int(30) DEFAULT NULL,
  `phone` int(30) DEFAULT NULL,
  `address` varchar(30) DEFAULT NULL,
  `bill1` int(1) NOT NULL DEFAULT 0,
  `bill2` int(1) NOT NULL DEFAULT 0,
  `bill3` int(1) NOT NULL DEFAULT 0,
  `bill4` int(1) NOT NULL DEFAULT 0,
  `bill5` int(1) NOT NULL DEFAULT 0,
  `bill6` int(1) NOT NULL DEFAULT 0,
  `bill7` int(1) NOT NULL DEFAULT 0,
  `bill8` int(1) NOT NULL DEFAULT 0,
  `bill9` int(1) NOT NULL DEFAULT 0,
  `bill10` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='유';

CREATE TABLE `azuma_f_letter1` (
  `no` int(10) NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `subject` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `message` varchar(15000) COLLATE utf8_unicode_ci NOT NULL,
  `reg_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='편지';




-- Set Primary Key
ALTER TABLE `azuma_f_bbs1`
  ADD PRIMARY KEY (`no`);
ALTER TABLE `azuma_f_bbs2`
  ADD PRIMARY KEY (`no`);
ALTER TABLE `azuma_f_bbs3`
  ADD PRIMARY KEY (`no`);
ALTER TABLE `azuma_f_comment1`
  ADD PRIMARY KEY (`cno`);
ALTER TABLE `azuma_f_user1`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `azuma_f_letter1`
  ADD PRIMARY KEY (`no`);





-- Dummy Data
INSERT INTO `azuma_f_user1` (`id`, `password`, `realname`, `nickname`, `gender`, `birth`, `email`, `tel`, `phone`, `address`, `bill1`, `bill2`, `bill3`, `bill4`, `bill5`, `bill6`, `bill7`, `bill8`, `bill9`, `bill10`) VALUES ('test1', 'test1', 'test1', 'test1', 'male', '001010', 'test@test.com', '01002102130', '2130350210', 'fsdkljfsdajklhsdf', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');





-- AUTO_INCREMENT
ALTER TABLE `azuma_f_bbs1`
  MODIFY `no` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
ALTER TABLE `azuma_f_bbs2`
  MODIFY `no` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
ALTER TABLE `azuma_f_bbs3`
  MODIFY `no` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
ALTER TABLE `azuma_f_comment1`
  MODIFY `cno` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
ALTER TABLE `azuma_f_letter1`
  MODIFY `no` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;
