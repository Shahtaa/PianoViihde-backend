-- MySQL dump 10.13  Distrib 9.0.1, for macos13.7 (x86_64)
--
-- Host: localhost    Database: pianoviihde
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `imageUrl` varchar(255) DEFAULT NULL,
  `facebookUrl` varchar(255) DEFAULT NULL,
  `instagramUrl` varchar(255) DEFAULT NULL,
  `youtubeUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES (1,'Anna Katariina','Lyhyt kuvaus Anna Katariinasta.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com','https://youtube.com'),(2,'Duo Songbirds','Lyhyt kuvaus Duo Songbirdsistä.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com','https://youtube.com'),(3,'Saksofonisti Anton Morozov','Lyhyt kuvaus Anton Morozovista.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com','https://youtube.com'),(4,'Tytti Koivunen','Lyhyt kuvaus Tytti Koivusesta.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com','https://youtube.com'),(5,'Lotta Virkkunen','Lyhyt kuvaus Lotta Virkkusesta.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com','https://youtube.com'),(6,'Tanja Vähäsarja','Lyhyt kuvaus Tanja Vähäsarjasta.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com','https://youtube.com'),(7,'Juontaja Kimmo Oksanen','Lyhyt kuvaus Kimmo Oksasesta.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com','https://youtube.com'),(8,'Toni Jokiniitty','Lyhyt kuvaus Toni Jokiniitystä.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com','https://youtube.com'),(9,'Joonas Eloranta','Lyhyt kuvaus Joonas Elorannasta.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com','https://youtube.com'),(10,'PUSHKIN Quintett','Lyhyt kuvaus PUSHKIN Quintetista.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com','https://youtube.com'),(11,'Night Shift','Lyhyt kuvaus Night Shiftistä.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com','https://youtube.com'),(12,'Henriikka Roo','Lyhyt kuvaus Henriikka Roosta.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com','https://youtube.com'),(13,'Tampereen Ukuleleorkesteri','Lyhyt kuvaus Tampereen Ukuleleorkesterista.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com','https://youtube.com');
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-16 12:45:11
