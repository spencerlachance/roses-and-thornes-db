-- MySQL dump 10.13  Distrib 8.0.15, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: roses_thornes
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `selections`
--

DROP TABLE IF EXISTS `selections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-26 17:43:41
