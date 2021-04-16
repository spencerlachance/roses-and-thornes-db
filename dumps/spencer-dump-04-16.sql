-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: roses_thornes
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `albums` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `year` year DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES (9,'Shaft',1970),(10,'Scott 3',1969),(11,'Little Dark Age',2018),(12,'Heaven Beach',1982),(13,'Mug Museum',2013),(14,'COWBOY BEBOP ( Original Motion Picture Soundtrack)',1998),(15,'855 Song Based Freestyle Mixtape, Vol. 2',2012),(16,'My Agenda',2020),(17,'Chocolate & Cheese',1993),(18,'Culture',2017),(19,'The Mollusk',1997),(20,'Bae2',2016),(21,'Hood Billionaires',2015),(22,'Merriweather Post Pavilion',2009),(23,'The Mouse and The Mask',2004),(24,'Trench Coat Towers',2015),(25,'You\'ll Cowards Don\'t Even Smoke Crack',2008),(26,'ルパン三世テレビスペシャル「セブンデイズ ラプソディ」オリジナル・サウンドトラック',2005),(27,'Priceless',2015),(28,'Ex-Military',2011),(29,'Songsthatwewontgetsuedforbutattheendofthedayweallgonnadieanyway',2016),(30,'Doggystyle',1992);
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES (26,'$uicideboy$'),(18,'Animal Collective'),(4,'Anri'),(25,'Cashy Kesh Dolla'),(5,'Cate le Bon'),(20,'CeeLo Green'),(19,'DANGERDOOM'),(28,'Daz Dillinger'),(29,'Death Grips'),(8,'Dorian Electra'),(14,'Gucci Mane'),(21,'Jody HiGHROLLER'),(16,'josh pan'),(7,'Lil B'),(24,'Lupintic Five'),(1,'Mack Browne & The Brothes'),(17,'Meek Mill'),(3,'MGMT'),(13,'Migos'),(2,'Scott Walker'),(6,'SEATBELTS'),(27,'Snoop Dogg'),(22,'Viper'),(9,'Ween'),(23,'Yuji Ohno'),(15,'Yung Bae');
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classifications`
--

DROP TABLE IF EXISTS `classifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classifications` (
  `classification` varchar(45) NOT NULL,
  PRIMARY KEY (`classification`),
  UNIQUE KEY `classification_UNIQUE` (`classification`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classifications`
--

LOCK TABLES `classifications` WRITE;
/*!40000 ALTER TABLE `classifications` DISABLE KEYS */;
INSERT INTO `classifications` VALUES ('OUTRO'),('ROSE'),('THORNE');
/*!40000 ALTER TABLE `classifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `days_of_week`
--

DROP TABLE IF EXISTS `days_of_week`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `days_of_week` (
  `day_of_week` varchar(45) NOT NULL,
  PRIMARY KEY (`day_of_week`),
  UNIQUE KEY `day_of_week_UNIQUE` (`day_of_week`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `days_of_week`
--

LOCK TABLES `days_of_week` WRITE;
/*!40000 ALTER TABLE `days_of_week` DISABLE KEYS */;
INSERT INTO `days_of_week` VALUES ('FRIDAY'),('MONDAY'),('SATURDAY'),('SUNDAY'),('THURSDAY'),('TUESDAY'),('WEDNESDAY');
/*!40000 ALTER TABLE `days_of_week` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `episodes`
--

DROP TABLE IF EXISTS `episodes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `episodes` (
  `season` int NOT NULL,
  `episode` int NOT NULL,
  `date` date NOT NULL,
  `is_finale` tinyint NOT NULL,
  `is_special` tinyint NOT NULL,
  PRIMARY KEY (`season`,`episode`),
  CONSTRAINT `season` FOREIGN KEY (`season`) REFERENCES `seasons` (`season`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `episodes`
--

LOCK TABLES `episodes` WRITE;
/*!40000 ALTER TABLE `episodes` DISABLE KEYS */;
INSERT INTO `episodes` VALUES (2,1,'2017-09-17',0,0),(10,9,'2021-04-01',0,0);
/*!40000 ALTER TABLE `episodes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `performances`
--

DROP TABLE IF EXISTS `performances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `performances` (
  `id` int NOT NULL AUTO_INCREMENT,
  `song_id` int NOT NULL,
  `artist_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `song_id_idx` (`song_id`),
  KEY `artist_id_idx` (`artist_id`),
  CONSTRAINT `artist_id` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`),
  CONSTRAINT `song_id` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `performances`
--

LOCK TABLES `performances` WRITE;
/*!40000 ALTER TABLE `performances` DISABLE KEYS */;
INSERT INTO `performances` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5),(6,6,6),(7,7,7),(8,8,8),(9,9,8),(10,10,9),(11,11,13),(12,11,14),(13,12,9),(14,13,15),(15,13,16),(16,14,17),(17,15,18),(18,16,19),(19,16,20),(20,17,21),(21,18,22),(22,19,23),(23,19,24),(24,20,25),(25,21,29),(26,22,26),(27,23,27),(28,23,28);
/*!40000 ALTER TABLE `performances` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seasons`
--

DROP TABLE IF EXISTS `seasons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seasons` (
  `season` int NOT NULL,
  `semester` varchar(45) NOT NULL,
  `year` year NOT NULL,
  `day_of_week` varchar(45) NOT NULL,
  `time` time NOT NULL,
  PRIMARY KEY (`season`),
  UNIQUE KEY `season_UNIQUE` (`season`),
  KEY `day_of_week_idx` (`day_of_week`),
  KEY `semester_idx` (`semester`),
  CONSTRAINT `day_of_week` FOREIGN KEY (`day_of_week`) REFERENCES `days_of_week` (`day_of_week`),
  CONSTRAINT `semester` FOREIGN KEY (`semester`) REFERENCES `semesters` (`semester`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seasons`
--

LOCK TABLES `seasons` WRITE;
/*!40000 ALTER TABLE `seasons` DISABLE KEYS */;
INSERT INTO `seasons` VALUES (2,'FALL',2017,'TUESDAY','23:00:00'),(10,'SPRING',2021,'THURSDAY','18:00:00');
/*!40000 ALTER TABLE `seasons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `selections`
--

DROP TABLE IF EXISTS `selections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `selections` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `song_id` int NOT NULL,
  `episode` int NOT NULL,
  `classification` varchar(45) NOT NULL,
  `season` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  KEY `song_id_idx` (`song_id`),
  KEY `episode_id_idx` (`episode`),
  KEY `season_idx` (`season`),
  KEY `classification_idx` (`classification`),
  KEY `season_episode` (`season`,`episode`),
  CONSTRAINT `classification` FOREIGN KEY (`classification`) REFERENCES `classifications` (`classification`),
  CONSTRAINT `season_episode` FOREIGN KEY (`season`, `episode`) REFERENCES `episodes` (`season`, `episode`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `selection_song_id` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `selections`
--

LOCK TABLES `selections` WRITE;
/*!40000 ALTER TABLE `selections` DISABLE KEYS */;
INSERT INTO `selections` VALUES (21,1,1,9,'ROSE',10),(22,2,2,9,'ROSE',10),(23,3,3,9,'ROSE',10),(24,1,4,9,'ROSE',10),(25,2,5,9,'ROSE',10),(26,3,6,9,'ROSE',10),(27,1,7,9,'THORNE',10),(28,2,8,9,'THORNE',10),(29,2,9,9,'THORNE',10),(30,3,10,9,'THORNE',10),(31,1,11,1,'ROSE',2),(32,2,12,1,'ROSE',2),(33,3,13,1,'ROSE',2),(34,1,14,1,'ROSE',2),(35,2,15,1,'ROSE',2),(36,3,16,1,'ROSE',2),(37,1,17,1,'THORNE',2),(38,2,18,1,'THORNE',2),(39,3,19,1,'THORNE',2),(40,1,20,1,'THORNE',2),(41,2,21,1,'THORNE',2),(42,3,22,1,'THORNE',2),(43,1,23,1,'OUTRO',2);
/*!40000 ALTER TABLE `selections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `semesters`
--

DROP TABLE IF EXISTS `semesters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `semesters` (
  `semester` varchar(45) NOT NULL,
  PRIMARY KEY (`semester`),
  UNIQUE KEY `semesterscol_UNIQUE` (`semester`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semesters`
--

LOCK TABLES `semesters` WRITE;
/*!40000 ALTER TABLE `semesters` DISABLE KEYS */;
INSERT INTO `semesters` VALUES ('FALL'),('SPRING'),('SUMMER I'),('SUMMER II');
/*!40000 ALTER TABLE `semesters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `album_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `album_id_idx` (`album_id`),
  CONSTRAINT `album_id` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (1,'Bumpy\'s Lament',9),(2,'It\'s Raining Today',10),(3,'Days That Got Away',11),(4,'Last Summer Whisper',12),(5,'Are You With Me Now?',13),(6,'Too Good Too Bad',14),(7,'Cookies and Planes Based Freestyle',15),(8,'Gentlemen',16),(9,'Sorry Bro (I Love You)',16),(10,'Candi',17),(11,'Slippery',18),(12,'The Mollusk',19),(13,'Ain\'t Nobody Like You',20),(14,'Chiraq',21),(15,'Summertime Clothes',22),(16,'Benzi Box',23),(17,'Brick off the Balcony',24),(18,'You\'ll Cowards Don\'t Even Smoke Crack',25),(19,'Bossa Diamante',26),(20,'Drugs',27),(21,'Spread Eagle Across The Block',28),(22,'Diemonds',29),(23,'Gin and Juice',30);
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Brian','Hughes','bhughes','djmayhem','bhughes@rosesandthornes.com','1998-03-04'),(2,'Spencer','LaChance','slachance','mcboing','slachance@rosesandthornes.com','1998-02-25'),(3,'Sean','Wallace','swallace','djdanny','swallace@rosesandthornes.com','1998-04-09');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-16 17:13:22
