-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               8.0.22 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for books_db
CREATE DATABASE IF NOT EXISTS `books_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `books_db`;

-- Dumping structure for table books_db.book_tb
CREATE TABLE IF NOT EXISTS `book_tb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_name` varchar(50) NOT NULL DEFAULT 'Some Book',
  `category_id` int NOT NULL DEFAULT '0',
  `writer_id` int NOT NULL DEFAULT '0',
  `publication_year` varchar(50) NOT NULL DEFAULT 'Some Book',
  `img_url` varchar(50) NOT NULL DEFAULT 'Some Book',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table books_db.book_tb: ~5 rows (approximately)
/*!40000 ALTER TABLE `book_tb` DISABLE KEYS */;
INSERT INTO `book_tb` (`id`, `book_name`, `category_id`, `writer_id`, `publication_year`, `img_url`) VALUES
	(1, 'Belajar Bersama VSCode', 2, 2, '2020', 'here'),
	(2, 'Why am I Procarsting? Just Work, Damnit', 3, 1, '2019', 'there'),
	(3, 'Time Traveler: Recaptured Fragments of Memories', 1, 3, '2015', 'now'),
	(4, 'Dont Blame Them, Just Suck It', 3, 1, '2015', 'hehe'),
	(5, 'Kotlin is Fun and EZ!', 2, 2, '2016', 'that');
/*!40000 ALTER TABLE `book_tb` ENABLE KEYS */;

-- Dumping structure for table books_db.category_tb
CREATE TABLE IF NOT EXISTS `category_tb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(50) NOT NULL DEFAULT 'Some Book',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table books_db.category_tb: ~3 rows (approximately)
/*!40000 ALTER TABLE `category_tb` DISABLE KEYS */;
INSERT INTO `category_tb` (`id`, `category_name`) VALUES
	(1, 'Novel'),
	(2, 'Teknologi'),
	(3, 'Self Development');
/*!40000 ALTER TABLE `category_tb` ENABLE KEYS */;

-- Dumping structure for table books_db.writer_tb
CREATE TABLE IF NOT EXISTS `writer_tb` (
  `writer_id` int NOT NULL AUTO_INCREMENT,
  `writter_name` varchar(50) NOT NULL DEFAULT 'Some Name',
  PRIMARY KEY (`writer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table books_db.writer_tb: ~3 rows (approximately)
/*!40000 ALTER TABLE `writer_tb` DISABLE KEYS */;
INSERT INTO `writer_tb` (`writer_id`, `writter_name`) VALUES
	(1, 'Joshua Chistianto'),
	(2, 'Indrico Jowensen'),
	(3, 'Evelyn Natania');
/*!40000 ALTER TABLE `writer_tb` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
