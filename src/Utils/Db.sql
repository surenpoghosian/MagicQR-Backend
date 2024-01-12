SET FOREIGN_KEY_CHECKS=0;
-- Table structure for user
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `u_id` VARCHAR(200),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`u_id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

-- Table structure for scans
DROP TABLE IF EXISTS `scan`;
CREATE TABLE `scan` ( 
  `id` INT(11) AUTO_INCREMENT,
  `u_id` VARCHAR(200),
  `q_id` VARCHAR(200),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

-- Table structure for qr codes
DROP TABLE IF EXISTS `qr_codes`;
CREATE TABLE `qr_codes` (
  `id` INT(11) AUTO_INCREMENT,
  `u_id` VARCHAR(200),
  `q_id` VARCHAR(200),
  `url` VARCHAR(200),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;
