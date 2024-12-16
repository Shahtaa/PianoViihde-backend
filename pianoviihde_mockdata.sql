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
-- Table structure for table `artist_videos`
--

DROP TABLE IF EXISTS `artist_videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artist_videos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `artist_id` int NOT NULL,
  `videoUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `artist_id` (`artist_id`),
  CONSTRAINT `artist_videos_ibfk_1` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artist_videos`
--

LOCK TABLES `artist_videos` WRITE;
/*!40000 ALTER TABLE `artist_videos` DISABLE KEYS */;
INSERT INTO `artist_videos` VALUES (1,1,'https://www.youtube.com/embed/DCopcNpzc60'),(2,1,'https://www.youtube.com/embed/oGlDJ3GxvLc'),(3,2,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(4,2,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(5,3,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(6,3,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(7,4,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(8,4,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(9,5,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(10,5,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(11,1,'https://www.youtube.com/embed/DCopcNpzc60'),(12,1,'https://www.youtube.com/embed/oGlDJ3GxvLc'),(13,2,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(14,2,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(15,3,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(16,3,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(17,4,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(18,4,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(19,5,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(20,5,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(21,6,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(22,6,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(23,7,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(24,7,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(25,8,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(26,8,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(27,9,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(28,9,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(29,10,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(30,10,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(31,11,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(32,11,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(33,12,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(34,12,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(35,13,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(36,13,'https://www.youtube.com/embed/dQw4w9WgXcQ');
/*!40000 ALTER TABLE `artist_videos` ENABLE KEYS */;
UNLOCK TABLES;

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES (1,'Anna Katariina','Lyhyt kuvaus Anna Katariinasta.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com'),(2,'Duo Songbirds','Lyhyt kuvaus Duo Songbirdsistä.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com'),(3,'Saksofonisti Anton Morozov','Lyhyt kuvaus Anton Morozovista.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com'),(4,'Tytti Koivunen','Lyhyt kuvaus Tytti Koivusesta.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com'),(5,'Lotta Virkkunen','Lyhyt kuvaus Lotta Virkkusesta.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com'),(6,'Tanja Vähäsarja','Lyhyt kuvaus Tanja Vähäsarjasta.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com'),(7,'Juontaja Kimmo Oksanen','Lyhyt kuvaus Kimmo Oksasesta.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com'),(8,'Toni Jokiniitty','Lyhyt kuvaus Toni Jokiniitystä.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com'),(9,'Joonas Eloranta','Lyhyt kuvaus Joonas Elorannasta.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com'),(10,'PUSHKIN Quintett','Lyhyt kuvaus PUSHKIN Quintetista.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com'),(11,'Night Shift','Lyhyt kuvaus Night Shiftistä.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com'),(12,'Henriikka Roo','Lyhyt kuvaus Henriikka Roosta.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com'),(13,'Tampereen Ukuleleorkesteri','Lyhyt kuvaus Tampereen Ukuleleorkesterista.','/images/artists_jpg.jpg','https://facebook.com','https://instagram.com');
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gigs`
--

DROP TABLE IF EXISTS `gigs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gigs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `location` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gigs`
--

LOCK TABLES `gigs` WRITE;
/*!40000 ALTER TABLE `gigs` DISABLE KEYS */;
INSERT INTO `gigs` VALUES (1,'Ravintola Helsinki','2024-12-25','Helsinki, Finland'),(2,'Yritystilaisuus Espoo','2024-12-30','Espoo, Finland'),(3,'Uudenvuoden juhla','2024-12-31','Tampere, Finland'),(4,'Kesäjuhla','2025-07-01','Turku, Finland'),(5,'Festival Espoo','2025-08-15','Espoo, Finland'),(6,'Jazz Night','2025-09-20','Helsinki, Finland'),(7,'Private Event','2025-10-05','Oulu, Finland'),(8,'Christmas Party','2025-12-24','Rovaniemi, Finland');
/*!40000 ALTER TABLE `gigs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pianist_videos`
--

DROP TABLE IF EXISTS `pianist_videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pianist_videos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pianist_id` int NOT NULL,
  `videoUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pianist_id` (`pianist_id`),
  CONSTRAINT `pianist_videos_ibfk_1` FOREIGN KEY (`pianist_id`) REFERENCES `pianists` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pianist_videos`
--

LOCK TABLES `pianist_videos` WRITE;
/*!40000 ALTER TABLE `pianist_videos` DISABLE KEYS */;
INSERT INTO `pianist_videos` VALUES (1,1,'https://www.youtube.com/embed/DCopcNpzc60'),(2,1,'https://www.youtube.com/embed/oGlDJ3GxvLc'),(3,2,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(4,2,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(5,3,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(6,3,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(7,4,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(8,4,'https://www.youtube.com/embed/dQw4w9WgXcQ'),(9,5,'https://www.youtube.com/embed/kJQP7kiw5Fk'),(10,5,'https://www.youtube.com/embed/dQw4w9WgXcQ');
/*!40000 ALTER TABLE `pianist_videos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pianists`
--

DROP TABLE IF EXISTS `pianists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pianists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `moreInfoUrl` varchar(255) DEFAULT NULL,
  `facebookUrl` varchar(255) DEFAULT NULL,
  `instagramUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pianists`
--

LOCK TABLES `pianists` WRITE;
/*!40000 ALTER TABLE `pianists` DISABLE KEYS */;
INSERT INTO `pianists` VALUES (1,'Piia Kristiina','Klassiselta taustalta monipuoliseksi viihdepianistiksi kehittynyt. Keikkailee aktiivisesti Duo Primadonnien, Duo Songbirdsin ja muiden kanssa. Musiikillisesti Piia on omistautunut viihdepianon soitolle, jolle ei löydy rajoituksia.','/images/pianist.jpg','/pianists/piia-kristiina','https://facebook.com','https://instagram.com'),(2,'Ruut','Ruut on soittanut klassista pianoa 19 vuotta Tampereen konservatoriossa. Hän soittaa tyylikästä kevyttä musiikkia, jatsahtavia viihdemusiikin klassikoita ja ikivihreitä.','/images/pianist.jpg','/pianists/ruut','https://facebook.com','https://instagram.com'),(3,'Laura','Laura on musiikin ammattilainen, joka soittaa jazzia ja klassista musiikkia. Hän on myös musiikkiopiston rehtori ja esiintyy aktiivisesti sekä pianistin että viulistin rooleissa.','/images/pianist.jpg','/pianists/laura','https://facebook.com','https://instagram.com'),(4,'Arto','Arto on romanttinen ja tunteikas pianisti, jonka soittotyyli on vaikuttunut Chopinista. Hänen musiikkinsa viehättää monia ja se sopii erinomaisesti solistin säestyksiksi tai ruokailun taustalle.','/images/pianist.jpg','/pianists/arto','https://facebook.com','https://instagram.com'),(5,'Joonas','Joonas on monipuolinen freelance-muusikko, joka on erikoistunut viihdemusiikkiin ja jazziin. Hänen ohjelmistonsa kattaa laajan valikoiman musiikkityylejä, ja hän on soittanut monilla teatterilavoilla.','/images/pianist.jpg','/pianists/joonas','https://facebook.com','https://instagram.com');
/*!40000 ALTER TABLE `pianists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_details`
--

DROP TABLE IF EXISTS `service_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `service_id` int NOT NULL,
  `heading` varchar(255) DEFAULT NULL,
  `text` text,
  `imageUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `service_id` (`service_id`),
  CONSTRAINT `service_details_ibfk_1` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_details`
--

LOCK TABLES `service_details` WRITE;
/*!40000 ALTER TABLE `service_details` DISABLE KEYS */;
INSERT INTO `service_details` VALUES (1,1,'Pianomusikki ravintola Astorissa','Perinteikkäässä Tampereen Keskustorin laidalla sijaitsevassa ravintola Astorissa on soinut livepiano jo kahdenkymmenen vuoden ajan!...','/images/livemusa1.webp'),(2,1,'Livemusiikki Paapan Kapakassa','Paappa Music Bar tai tuttavallisemmin Paapan Kapakka tunnetaan ympäri Suomea livemusiikistaan, jota on tarjolla seitsämän iltaa viikossa!...','/images/livemusa2.webp'),(3,2,'Yritystilaisuuden ohjelmisto','Räätälöity ohjelmisto tekee yritystilaisuuksista unohtumattoman...','/images/yritys_event.jpg'),(4,3,'Vastaanottojen taustamusiikki','Etsitkö tunnelmallista taustamusiikkia, joka täydentää tapahtumasi luonteen?...','/images/tausta_vastaanotto.jpg'),(5,4,'Häät seremoniassa','Meidän häämusiikkipalvelumme kattaa kaiken morsiamen saapumisesta häävalssiin...','/images/haat_seremonia.jpg'),(6,5,'Räätälöidyt sävellykset','Tarjoamme yksilöllisesti räätälöityjä sävellyksiä, jotka tuovat ainutlaatuisen tunnelman...','/images/savellys_räätälöity.jpg');
/*!40000 ALTER TABLE `service_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `imageUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'Livemusiikki ravintoloissa','Tarjoamme eläviä musiikkiesityksiä ravintoloissa ja muissa tiloissa, joissa tunnelma luodaan musiikin avulla.','/images/tilaisuus.jpg'),(2,'Yritystilaisuudet','Räätälöimme musiikkiesityksiä yritystilaisuuksiin, konferensseihin ja juhliin, jotka luovat mieleenpainuvia kokemuksia.','/images/tilaisuus.jpg'),(3,'Taustamusiikkia tilaisuuksiin','Tarjoamme taustamusiikkia monenlaisiin tilaisuuksiin, kuten vastaanottoihin, kokouksiin ja juhlien tunnelman luomiseen.','/images/tilaisuus.jpg'),(4,'Häämusiikki','Erityisesti hääjuhliin tarjoamme kauniita musiikkiesityksiä, jotka tekevät päivästä unohtumattoman.','/images/tilaisuus.jpg'),(5,'Sävellyspalvelut','Tarjoamme sävellyspalveluja niin yksityisille kuin yrityksille – luomme musiikkia erilaisiin projekteihin ja tilaisuuksiin.','/images/tilaisuus.jpg');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-16 15:19:11
