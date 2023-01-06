-- Create Tables and Columns
CREATE TABLE `azuma_fm1_user1` (
  `id` varchar(15) NOT NULL,
  `password` varchar(100) NOT NULL,
  `realname` varchar(15) NOT NULL,
  `nickname` varchar(15) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `birth` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `tel` varchar(15) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `facebook` varchar(100) DEFAULT NULL,
  `twitter` varchar(100) DEFAULT NULL,
  `instagram` varchar(100) DEFAULT NULL,
  `googleplus` varchar(100) DEFAULT NULL,
  `tumblr` varchar(100) DEFAULT NULL,
  `dribble` varchar(100) DEFAULT NULL,
  `dream1` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='User1 Table'

CREATE TABLE `azuma_fm1_bbs1` (
  `no` int(10) NOT NULL,
  `id` varchar(15) NOT NULL,
  `category` varchar(15) DEFAULT 'Etc',
  `title` varchar(70) NOT NULL,
  `content` mediumtext NOT NULL,
  `nickname` varchar(15) NOT NULL,
  `reg_date` datetime NOT NULL DEFAULT current_timestamp(),
  `mod_date` datetime DEFAULT NULL,
  `img_file1` varchar(100) DEFAULT NULL,
  `img_size1` int(10) DEFAULT NULL,
  `del_flg` char(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='BBS1 Table'

-- Set Primary Key (基本キーを設定)
ALTER TABLE `azuma_fm1_user1`
  ADD PRIMARY KEY (`id`)

ALTER TABLE `azuma_fm1_bbs1`
  ADD PRIMARY KEY (`no`)

-- AUTO_INCREMENT (基本キーだけ可能)
ALTER TABLE `azuma_fm1_bbs1`
  MODIFY `no` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1

-- Dummy Data (Test用、 ID： test、 pw： test)
INSERT INTO `azuma_fm1_user1` (`id`, `password`, `realname`, `nickname`, `gender`, `birth`, `email`, `tel`, `phone`, `facebook`, `twitter`, `instagram`, `googleplus`, `tumblr`, `dribble`, `dream1`, `address`)
VALUES ('test', 'test', 'ヤン', 'テスター', 'male', '111111', 'test@test.com', '0311112222', '07011112222', 'https://facebook.com/yangdonghwa', 'https://twitter.com/yangdonghwa', 'https://instagram.com/yangdonghwa', 'https://googleplus.com/yangdonghwa', 'https://tumblr.com/yangdonghwa', 'https://dribble.com/yangdonghwa', 'AI技術者', '東京都')
