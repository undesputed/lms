-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: 127.0.0.1    Database: ec_care
-- ------------------------------------------------------
-- Server version	8.1.0

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
-- Table structure for table `lms_company`
--

DROP TABLE IF EXISTS `lms_company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `patient_id` int DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_company`
--

LOCK TABLES `lms_company` WRITE;
/*!40000 ALTER TABLE `lms_company` DISABLE KEYS */;
/*!40000 ALTER TABLE `lms_company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_hmo`
--

DROP TABLE IF EXISTS `lms_hmo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_hmo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `hmo_name` varchar(100) DEFAULT NULL,
  `contact_person` varchar(100) DEFAULT NULL,
  `email_address` varchar(100) DEFAULT NULL,
  `contact_number` varchar(20) DEFAULT NULL,
  `link_to_rates` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_hmo`
--

LOCK TABLES `lms_hmo` WRITE;
/*!40000 ALTER TABLE `lms_hmo` DISABLE KEYS */;
INSERT INTO `lms_hmo` VALUES (1,'GENERALI','Maria Bernadette K. Cuaresma','mbkcuaresma@generali.com.ph','9457717894','https://docs.google.com/document/d/13Ipn8vekMIjB0LFnF4QzsKQD9l9IwJK7RliWnPzR0WQ/edit',1,'2023-10-06 04:37:23','2023-10-06 04:37:24'),(2,'PHILCARE','Noel Gregory R. Eguia','Noel.Eguia@philcare.com.ph','0998-965-3301','file:///Users/jonmendoza/Downloads/LIST%20&%20PRICE%20OF%20SERVICES%20(EC%20CARE%20MEDICAL)%20(1).pdf',1,'2023-10-06 04:37:54','2023-10-06 04:37:54'),(3,'Life and Health','Maria Desiree Abella','accreditation@lifeandhealthhmp.com','9177955157','https://drive.google.com/drive/folders/1ue9XTCV3oExt_0bz73wVWUmPjj31pZw8?usp=drive_link',0,'2023-10-06 04:38:20','2023-10-06 04:38:20'),(4,'Intellicare/Avega','Raymond Paradela/Maria Fatima E. Camoro','mariafatima@intellicare.com.ph/raymond.paradela@avega.net.ph','9178455638',NULL,0,'2023-10-06 04:38:40','2023-10-06 04:38:40'),(5,'Medicard','ALDELVIR JEAN M. SAAVEDRA','ajsaavedra@medicardphils.com','9688843133',NULL,0,'2023-10-06 04:38:56','2023-10-06 04:38:57'),(6,'Etiqa','Maria Ayda Rochelle G. Jalandoni','mgjalandoni@etiqa.com.ph','0939 915 5547',NULL,0,'2023-10-06 04:39:16','2023-10-06 04:39:16');
/*!40000 ALTER TABLE `lms_hmo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_patient`
--

DROP TABLE IF EXISTS `lms_patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_patient` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(255) DEFAULT NULL,
  `sex` int DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `dateOfVisit` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `status` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `lms_company_id` int DEFAULT NULL,
  `lms_referral_id` int DEFAULT NULL,
  `lms_hmo_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `lms_company_id` (`lms_company_id`),
  KEY `lms_referral_id` (`lms_referral_id`),
  KEY `lms_hmo_id` (`lms_hmo_id`),
  CONSTRAINT `lms_company_id` FOREIGN KEY (`lms_company_id`) REFERENCES `lms_company` (`id`),
  CONSTRAINT `lms_hmo_id` FOREIGN KEY (`lms_hmo_id`) REFERENCES `lms_hmo` (`id`),
  CONSTRAINT `lms_referral_id` FOREIGN KEY (`lms_referral_id`) REFERENCES `lms_referral` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_patient`
--

LOCK TABLES `lms_patient` WRITE;
/*!40000 ALTER TABLE `lms_patient` DISABLE KEYS */;
INSERT INTO `lms_patient` VALUES (64,'Carrie A. Yu',1,'1997-12-11','2023-11-25','','eirracyu12@gmail.com','09771324804',0,'2023-11-25 14:34:25',NULL,NULL,NULL,NULL),(65,'Alyn Magdadaro',1,'1998-11-04','2023-11-25','','eirracyu12@gmail.com','09296604887',0,'2023-11-25 14:37:08',NULL,NULL,2,NULL),(66,'Peter Aliasut',1,'1997-10-10','2023-11-26','','eirracyu12@gmail.com','09771324804',0,'2023-11-26 15:12:52',NULL,NULL,NULL,4),(67,'Rey Patory',1,'1994-10-10','2023-11-26','','carrie@bpoc.co.jp','09771324804',0,'2023-11-26 16:20:24',NULL,NULL,4,4),(68,'PAOLO J. CANI',1,'1995-12-02','2023-11-27','','eirracyu12@gmail.com','09771324804',0,'2023-11-27 05:23:21',NULL,NULL,3,NULL);
/*!40000 ALTER TABLE `lms_patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_patient_results`
--

DROP TABLE IF EXISTS `lms_patient_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_patient_results` (
  `id` int NOT NULL AUTO_INCREMENT,
  `result` varchar(255) DEFAULT NULL,
  `lms_patient_id` int NOT NULL,
  `lms_test_id` int NOT NULL,
  `testDate` date DEFAULT NULL,
  `status` int NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=178 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_patient_results`
--

LOCK TABLES `lms_patient_results` WRITE;
/*!40000 ALTER TABLE `lms_patient_results` DISABLE KEYS */;
INSERT INTO `lms_patient_results` VALUES (4,'mon',65,61,'2023-11-25',0,'2023-11-25 14:37:08',NULL),(5,'90.0',65,69,'2023-11-25',0,'2023-11-25 14:37:08',NULL),(6,'mchc',65,70,'2023-11-25',0,'2023-11-25 14:37:08',NULL),(7,'remai',65,71,'2023-11-25',0,'2023-11-25 14:37:08',NULL),(8,'others',65,72,'2023-11-25',0,'2023-11-25 14:37:08',NULL),(9,'12',65,62,'2023-11-25',0,'2023-11-25 14:37:08',NULL),(10,'99',65,73,'2023-11-25',0,'2023-11-25 14:37:08',NULL),(11,'plt',65,74,'2023-11-25',0,'2023-11-25 14:37:08',NULL),(12,'neu',65,75,'2023-11-25',0,'2023-11-25 14:37:08',NULL),(13,'eos',65,63,'2023-11-25',0,'2023-11-25 14:37:08',NULL),(14,'lym',65,76,'2023-11-25',0,'2023-11-25 14:37:08',NULL),(15,'bas',65,64,'2023-11-25',0,'2023-11-25 14:37:08',NULL),(16,'total',65,65,'2023-11-25',0,'2023-11-25 14:37:08',NULL),(17,'10',65,66,'2023-11-25',0,'2023-11-25 14:37:08',NULL),(18,'mc',65,67,'2023-11-25',0,'2023-11-25 14:37:08',NULL),(19,'mch',65,68,'2023-11-25',0,'2023-11-25 14:37:08',NULL),(53,NULL,65,95,'2023-11-26',0,'2023-11-26 14:16:36',NULL),(54,NULL,65,103,'2023-11-26',0,'2023-11-26 14:16:36',NULL),(55,NULL,65,105,'2023-11-26',0,'2023-11-26 14:16:36',NULL),(56,NULL,65,104,'2023-11-26',0,'2023-11-26 14:16:36',NULL),(57,NULL,65,96,'2023-11-26',0,'2023-11-26 14:16:36',NULL),(58,NULL,65,107,'2023-11-26',0,'2023-11-26 14:16:36',NULL),(59,NULL,65,108,'2023-11-26',0,'2023-11-26 14:16:36',NULL),(60,NULL,65,97,'2023-11-26',0,'2023-11-26 14:16:36',NULL),(61,NULL,65,106,'2023-11-26',0,'2023-11-26 14:16:36',NULL),(62,NULL,65,109,'2023-11-26',0,'2023-11-26 14:16:36',NULL),(63,NULL,65,98,'2023-11-26',0,'2023-11-26 14:16:36',NULL),(64,NULL,65,99,'2023-11-26',0,'2023-11-26 14:16:36',NULL),(65,NULL,65,100,'2023-11-26',0,'2023-11-26 14:16:36',NULL),(66,NULL,65,101,'2023-11-26',0,'2023-11-26 14:16:36',NULL),(67,NULL,65,102,'2023-11-26',0,'2023-11-26 14:16:36',NULL),(86,'8',66,61,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(87,NULL,66,72,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(88,'145',66,74,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(89,'4.64',66,62,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(90,'54',66,75,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(91,'36.7',66,73,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(92,'37',66,76,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(93,'1',66,63,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(94,'0',66,64,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(95,'100',66,65,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(96,'4.00',66,66,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(97,'79.1',66,67,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(98,'26.1',66,68,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(99,'330.0',66,70,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(100,NULL,66,71,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(101,'121',66,69,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(102,'YELLOW BROWN',66,95,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(103,'NONE SEEN',66,96,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(104,'NONE SEEN',66,97,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(105,'NONE SEEN',66,98,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(106,'FORMED',66,99,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(107,'NONE SEEN',66,100,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(108,'NONE SEEN',66,101,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(109,'0-1',66,102,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(110,'NONE SEEN',66,103,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(111,'NONE SEEN',66,104,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(112,NULL,66,105,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(113,'0-1',66,106,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(114,NULL,66,107,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(115,'MODERATE',66,108,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(116,NULL,66,109,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(117,'23',66,146,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(118,NULL,66,147,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(119,'145.11',66,148,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(120,'19',66,149,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(121,'49',66,150,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(122,'9',66,151,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(123,NULL,66,152,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(124,'55.5%',66,153,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(125,NULL,66,154,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(126,NULL,66,155,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(127,'37.20',66,156,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(128,NULL,66,157,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(129,NULL,66,158,'2023-11-26',0,'2023-11-26 15:12:52',NULL),(130,NULL,67,158,'2023-11-26',0,'2023-11-26 16:20:24',NULL),(131,'37.20',67,156,'2023-11-26',0,'2023-11-26 16:20:24',NULL),(132,NULL,67,157,'2023-11-26',0,'2023-11-26 16:20:24',NULL),(133,'55.5%',67,153,'2023-11-26',0,'2023-11-26 16:20:24',NULL),(134,NULL,67,154,'2023-11-26',0,'2023-11-26 16:20:24',NULL),(135,NULL,67,155,'2023-11-26',0,'2023-11-26 16:20:24',NULL),(136,'234.02',67,146,'2023-11-26',0,'2023-11-26 16:20:24',NULL),(137,'145.11',67,148,'2023-11-26',0,'2023-11-26 16:20:24',NULL),(138,'remarks',67,147,'2023-11-26',0,'2023-11-26 16:20:24',NULL),(139,'197.58',67,149,'2023-11-26',0,'2023-11-26 16:20:24',NULL),(140,'49.39',67,150,'2023-11-26',0,'2023-11-26 16:20:24',NULL),(141,'95.75',67,151,'2023-11-26',0,'2023-11-26 16:20:24',NULL),(142,NULL,67,152,'2023-11-26',0,'2023-11-26 16:20:24',NULL),(143,'33',68,70,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(144,'10',68,61,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(145,NULL,68,72,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(146,'37.7',68,73,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(147,NULL,68,71,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(148,'209',68,74,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(149,'69',68,75,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(150,'7',68,76,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(151,'0',68,63,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(152,'0',68,64,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(153,'100',68,65,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(154,'4.5',68,66,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(155,'43',68,68,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(156,'108',68,69,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(157,'88',68,67,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(158,'YELLOW',68,95,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(159,'4.',68,62,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(160,'NONE SEEN',68,96,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(161,'NONE ',68,97,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(162,'NONE SEEN',68,98,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(163,'',68,99,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(164,'NONE SEEN',68,100,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(165,'NONE SEEN',68,101,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(166,'NONE SEEN',68,103,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(167,'10.0',68,102,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(168,'NONE SEEN',68,104,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(169,NULL,68,105,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(170,'12',68,106,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(171,NULL,68,107,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(172,'MODERATE',68,108,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(173,NULL,68,109,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(174,'14',68,156,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(175,NULL,68,157,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(176,NULL,68,158,'2023-11-27',0,'2023-11-27 05:23:22',NULL),(177,NULL,68,159,'2023-11-27',0,'2023-11-27 05:30:16',NULL);
/*!40000 ALTER TABLE `lms_patient_results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_referral`
--

DROP TABLE IF EXISTS `lms_referral`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_referral` (
  `id` int NOT NULL AUTO_INCREMENT,
  `surname` varchar(255) DEFAULT NULL,
  `givenName` varchar(255) DEFAULT NULL,
  `middleInitial` varchar(255) DEFAULT NULL,
  `specialization` varchar(255) DEFAULT NULL,
  `prc_no` varchar(255) DEFAULT NULL,
  `philhealth_no` varchar(255) DEFAULT NULL,
  `tin_no` varchar(255) DEFAULT NULL,
  `room_no` int DEFAULT NULL,
  `schedule` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `status` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_referral`
--

LOCK TABLES `lms_referral` WRITE;
/*!40000 ALTER TABLE `lms_referral` DISABLE KEYS */;
INSERT INTO `lms_referral` VALUES (1,'Padilla','Neva Dyan','P. ','General Surgery','134168','1501-1739694','494-178-590-000',201,'By Appointment','9692750816',NULL,NULL,1,'2023-10-06 04:31:19','2023-10-06 04:31:19'),(2,'Romero','Heide ','T.','Obstetrics & Gynecology','132708','1501-2256261-1','443294943000',201,'By Appointment',NULL,NULL,NULL,1,'2023-10-06 04:32:07','2023-10-06 04:32:07'),(3,'Armindo','Ceniza Jr.','N.','Family Medicine','80153','120000206097','190092588',201,'By Appointment','9234585440',NULL,NULL,1,'2023-10-06 04:33:03','2023-10-06 04:33:03'),(4,'Garces','Jin Marie ','B. ','General Practice','150528','11002153075','729771163-000',201,'By Appointment','9564026638',NULL,NULL,1,'2023-10-06 04:33:41','2023-10-06 04:33:41'),(5,'Alvero','Tessie Venus','O.','Obstetrics & Gynecology',NULL,NULL,NULL,201,'By Appointment',NULL,NULL,NULL,1,'2023-10-06 04:34:08','2023-10-06 04:34:08'),(6,'Garces','Ruth','B.','OBGYNE',NULL,NULL,NULL,201,'By Appointment',NULL,NULL,NULL,1,'2023-10-06 04:35:18','2023-10-06 04:35:18');
/*!40000 ALTER TABLE `lms_referral` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_test`
--

DROP TABLE IF EXISTS `lms_test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_test` (
  `id` int NOT NULL AUTO_INCREMENT,
  `test_id` int DEFAULT NULL,
  `field_id` int DEFAULT NULL,
  `testDate` timestamp NULL DEFAULT NULL,
  `status` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `test_id` (`test_id`),
  KEY `field_id` (`field_id`),
  CONSTRAINT `FK_lms_test_lms_test_category` FOREIGN KEY (`test_id`) REFERENCES `lms_test_category` (`id`),
  CONSTRAINT `FK_lms_test_lms_test_field` FOREIGN KEY (`field_id`) REFERENCES `lms_test_field` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=160 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_test`
--

LOCK TABLES `lms_test` WRITE;
/*!40000 ALTER TABLE `lms_test` DISABLE KEYS */;
INSERT INTO `lms_test` VALUES (61,71,8,NULL,0,'2023-11-25 08:19:54',NULL),(62,71,2,NULL,0,'2023-11-25 08:19:54',NULL),(63,71,9,NULL,0,'2023-11-25 08:19:54',NULL),(64,71,10,NULL,0,'2023-11-25 08:19:54',NULL),(65,71,11,NULL,0,'2023-11-25 08:19:54',NULL),(66,71,1,NULL,0,'2023-11-25 08:19:54',NULL),(67,71,12,NULL,0,'2023-11-25 08:19:54',NULL),(68,71,13,NULL,0,'2023-11-25 08:19:54',NULL),(69,71,3,NULL,0,'2023-11-25 08:19:54',NULL),(70,71,14,NULL,0,'2023-11-25 08:19:54',NULL),(71,71,79,NULL,0,'2023-11-25 08:19:54',NULL),(72,71,80,NULL,0,'2023-11-25 08:19:54',NULL),(73,71,4,NULL,0,'2023-11-25 08:19:54',NULL),(74,71,5,NULL,0,'2023-11-25 08:19:54',NULL),(75,71,6,NULL,0,'2023-11-25 08:19:54',NULL),(76,71,7,NULL,0,'2023-11-25 08:19:54',NULL),(95,73,15,NULL,0,'2023-11-25 08:22:57',NULL),(96,73,34,NULL,0,'2023-11-25 08:22:57',NULL),(97,73,33,NULL,0,'2023-11-25 08:22:57',NULL),(98,73,35,NULL,0,'2023-11-25 08:22:57',NULL),(99,73,31,NULL,0,'2023-11-25 08:22:57',NULL),(100,73,36,NULL,0,'2023-11-25 08:22:57',NULL),(101,73,37,NULL,0,'2023-11-25 08:22:57',NULL),(102,73,1,NULL,0,'2023-11-25 08:22:57',NULL),(103,73,38,NULL,0,'2023-11-25 08:22:57',NULL),(104,73,39,NULL,0,'2023-11-25 08:22:57',NULL),(105,73,79,NULL,0,'2023-11-25 08:22:57',NULL),(106,73,2,NULL,0,'2023-11-25 08:22:57',NULL),(107,73,32,NULL,0,'2023-11-25 08:22:57',NULL),(108,73,27,NULL,0,'2023-11-25 08:22:57',NULL),(109,73,80,NULL,0,'2023-11-25 08:22:57',NULL),(146,77,40,NULL,0,'2023-11-26 15:07:13',NULL),(147,77,79,NULL,0,'2023-11-26 15:07:13',NULL),(148,77,43,NULL,0,'2023-11-26 15:07:13',NULL),(149,77,41,NULL,0,'2023-11-26 15:07:13',NULL),(150,77,42,NULL,0,'2023-11-26 15:07:13',NULL),(151,77,44,NULL,0,'2023-11-26 15:07:13',NULL),(152,77,80,NULL,0,'2023-11-26 15:07:13',NULL),(153,78,68,NULL,0,'2023-11-26 15:10:23',NULL),(154,78,80,NULL,0,'2023-11-26 15:10:23',NULL),(155,78,79,NULL,0,'2023-11-26 15:10:23',NULL),(156,79,47,NULL,0,'2023-11-26 15:11:59',NULL),(157,79,79,NULL,0,'2023-11-26 15:11:59',NULL),(158,79,80,NULL,0,'2023-11-26 15:11:59',NULL),(159,80,64,NULL,0,'2023-11-27 05:29:59',NULL);
/*!40000 ALTER TABLE `lms_test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_test_cat_test_field`
--

DROP TABLE IF EXISTS `lms_test_cat_test_field`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_test_cat_test_field` (
  `id` int NOT NULL AUTO_INCREMENT,
  `test_category_id` int DEFAULT NULL,
  `test_field_id` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_lms_test_cat_test_field_lms_test_category` (`test_category_id`),
  KEY `FK_lms_test_cat_test_field_lms_test_field` (`test_field_id`),
  CONSTRAINT `FK_lms_test_cat_test_field_lms_test_category` FOREIGN KEY (`test_category_id`) REFERENCES `lms_test_category` (`id`),
  CONSTRAINT `FK_lms_test_cat_test_field_lms_test_field` FOREIGN KEY (`test_field_id`) REFERENCES `lms_test_field` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_test_cat_test_field`
--

LOCK TABLES `lms_test_cat_test_field` WRITE;
/*!40000 ALTER TABLE `lms_test_cat_test_field` DISABLE KEYS */;
/*!40000 ALTER TABLE `lms_test_cat_test_field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_test_category`
--

DROP TABLE IF EXISTS `lms_test_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_test_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` longtext,
  `department` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `table_name` varchar(50) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_test_category`
--

LOCK TABLES `lms_test_category` WRITE;
/*!40000 ALTER TABLE `lms_test_category` DISABLE KEYS */;
INSERT INTO `lms_test_category` VALUES (71,'CBC','A complete blood count, or CBC, is a blood test that measures many different parts and features of your blood, including: Red blood cells, which carry oxygen from your lungs to the rest of your body. White blood cells, which fight infections and other diseases. There are five major types of white blood cells.','HEMATOLOGY RESULT',200,'Routine',NULL,0,'2023-11-25 08:19:54',NULL),(73,'STOOL EXAM','The stool will be checked for colour, consistency, amount, shape, and the presence of mucus. The stool may be examined for hidden (occult) blood, fat, meat fibres, bile, white blood cells , and sugars called reducing substances. The pH of the stool also may be measured.','STOOL EXAM RESULT',75,'Routine',NULL,0,'2023-11-25 08:22:57',NULL),(77,'FASTING PROFILE','FASTING PROFILE DESCRIPTION','CLINICAL CHEMISTRY RESULT',175,'Metabolism',NULL,0,'2023-11-26 15:07:13',NULL),(78,'HbA1c','The hemoglobin A1c (HbA1c) test measures the amount of blood sugar (glucose) attached to your hemoglobin. Hemoglobin is the part of your red blood cells that carries oxygen from your lungs to the rest of your body. It is an important blood test that gives a good indication of how well your diabetes is being controlled.','HEMATOLOGY RESULT',650,'Metabolism',NULL,0,'2023-11-26 15:10:23',NULL),(79,'BUN','The BUN test measures the amount of urea nitrogen in your blood. Urea nitrogen is a waste product that your kidneys remove from your blood. Higher than normal BUN levels may be a sign that your kidneys aren\'t working well','CLINICAL CHEMISTRY RESULT',250,'Renal Function',NULL,0,'2023-11-26 15:11:59',NULL),(80,'RPR','RPR DILUTION WITH TITE','IMMUNOLOGY/SEROLOGY',600,'Serology',NULL,0,'2023-11-27 05:29:59',NULL);
/*!40000 ALTER TABLE `lms_test_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_test_field`
--

DROP TABLE IF EXISTS `lms_test_field`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_test_field` (
  `id` int NOT NULL AUTO_INCREMENT,
  `test_name` varchar(255) DEFAULT NULL,
  `unit` varchar(50) DEFAULT NULL,
  `maleRefRange` varchar(50) DEFAULT NULL,
  `femaleRefRange` varchar(50) DEFAULT NULL,
  `refRange` varchar(50) DEFAULT NULL,
  `desirableRefRange` varchar(50) DEFAULT NULL,
  `borderlineRefRange` varchar(50) DEFAULT NULL,
  `highRiskRefRange` varchar(50) DEFAULT NULL,
  `other` varchar(50) DEFAULT NULL,
  `status` int DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_test_field`
--

LOCK TABLES `lms_test_field` WRITE;
/*!40000 ALTER TABLE `lms_test_field` DISABLE KEYS */;
INSERT INTO `lms_test_field` VALUES (1,'wbc','x 10^9/L','4-10','4-11','4-12',NULL,NULL,NULL,'/HPF',1,'2023-10-28 03:25:35',NULL),(2,'rbc','x 10^12/L','4.00-5.50','3.50-5.00','3.50-5.20',NULL,NULL,NULL,'/HPF',1,'2023-10-28 03:26:47',NULL),(3,'hgb','g/L','120-160','110-150','120-160',NULL,NULL,NULL,NULL,1,'2023-10-28 03:27:25',NULL),(4,'hct','%','40-54','37-47','35-49',NULL,NULL,NULL,NULL,1,'2023-10-28 03:27:59',NULL),(5,'plt','x 10^9/L',NULL,NULL,'100-300',NULL,NULL,NULL,NULL,1,'2023-10-28 03:28:39',NULL),(6,'neu','%',NULL,NULL,'50-70',NULL,NULL,NULL,NULL,1,'2023-10-28 03:29:17',NULL),(7,'lym','%',NULL,NULL,'20-40',NULL,NULL,NULL,NULL,1,'2023-10-28 03:29:36',NULL),(8,'mon','%',NULL,NULL,'10-15',NULL,NULL,NULL,NULL,1,'2023-10-28 03:29:55',NULL),(9,'eos','%',NULL,NULL,'1-5',NULL,NULL,NULL,NULL,1,'2023-10-28 03:30:17',NULL),(10,'bas','%',NULL,NULL,'0-1',NULL,NULL,NULL,NULL,1,'2023-10-28 03:30:43',NULL),(11,'total','%',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-28 03:31:22',NULL),(12,'MCV','fL',NULL,NULL,'80-100',NULL,NULL,NULL,NULL,1,'2023-10-28 03:31:47',NULL),(13,'MCH','pg',NULL,NULL,'27-32',NULL,NULL,NULL,NULL,1,'2023-10-28 03:31:55',NULL),(14,'MCHC','g/L',NULL,NULL,'320-360',NULL,NULL,NULL,NULL,1,'2023-10-28 03:32:24',NULL),(15,'Color',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-28 03:33:05',NULL),(16,'Transparency',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-28 03:34:10',NULL),(17,'Leukocyte',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-28 03:34:22',NULL),(18,'Nitrite',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:35',NULL),(19,'Urobilinogen',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:34',NULL),(20,'Protein',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-11-30 01:17:33',NULL),(21,'pH',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:32',NULL),(22,'Blood',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:32',NULL),(23,'Sp. Gravity',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:31',NULL),(24,'Ketone',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:31',NULL),(25,'Bilirubin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:31',NULL),(26,'Glucose',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:30',NULL),(27,'Bacteria',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:30',NULL),(28,'Epithelial Cells',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:29',NULL),(29,'Amorphous Urate',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:29',NULL),(30,'Mucus threads',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:28',NULL),(31,'Consistency',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:28',NULL),(32,'Fat Globules',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:28',NULL),(33,'Ascaris L.	',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:27',NULL),(34,'Trichuris trichuria	',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:26',NULL),(35,'Hookworm	',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:26',NULL),(36,'Schistosoma	',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:25',NULL),(37,'Entamoeba histolytica: Troph.	',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:23',NULL),(38,'Entamoeba histolytica: Cyst	',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:23',NULL),(39,'entamoebaColi',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:22',NULL),(40,'Cholesterol	','mg/dL',NULL,NULL,NULL,'< 200','200 - 239','> 240',NULL,1,'2023-10-30 01:17:21',NULL),(41,'Triglycerides	','mg/dL','40 - 160','35 - 145',NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:21',NULL),(42,'HDL Cholesterol	','mg/dL','35-50','45-60',NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:20',NULL),(43,'LDL Cholesterol	','mg/dL',NULL,NULL,NULL,'< 114','115 - 150','> 151',NULL,1,'2023-10-30 01:17:20',NULL),(44,'Fasting Blood Sugar (Glucose)	\r\n	','mg/dL',NULL,NULL,'70-110',NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:19',NULL),(45,'Creatinine	','mg/dL',NULL,NULL,'0.5-1.3	',NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:19',NULL),(46,'BUN (PRE HEMODIALISYS)	','mg/dL',NULL,NULL,'15-45	',NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:18',NULL),(47,'BUN (POST HEMODIALISYS)	','mg/dL',NULL,'(NULL)','15-45	',NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:18',NULL),(48,'INORGANIC PHOSPHORUS','mg/dL',NULL,NULL,'2.7-4.5	',NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:18',NULL),(49,'ALBUMIN 	','g/L',NULL,NULL,'35-55	',NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:17',NULL),(50,'POTASSIUM (K+)	','mmol/L',NULL,NULL,'3.5 - 5.0	',NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:17',NULL),(51,'TOTAL CALCIUM','mmol/L',NULL,NULL,'2.30-2.70	',NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:16',NULL),(52,'SGPT (ALT)','U/L',NULL,NULL,'0 - 41	',NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:15',NULL),(53,'SODIUM (Na+)','mmol/L',NULL,NULL,'135.0 - 145.0	',NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:10',NULL),(54,'CHLORIDE (Cl)','mmol/L',NULL,NULL,'97.0-107.0	',NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:10',NULL),(55,'IONIZED CALCIUM (iCa)','mmol/L',NULL,NULL,'1.15-1.35	',NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:09',NULL),(56,'HBsAg Screening',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:09',NULL),(57,'HIV Screening (Quali)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:08',NULL),(58,'Syphilis Screening',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:08',NULL),(59,'SGOT (AST)	','U/L',NULL,NULL,'0-41	',NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:07',NULL),(60,'Blood Uric Acid (BUA)','mg/dL',NULL,NULL,'2.3-8.2	',NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:07',NULL),(61,'HCV Screening',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:06',NULL),(62,'HAV Screening',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:06',NULL),(63,'Pregnancy Test (Serum)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:17:05',NULL),(64,'RPR Titer With Dilution',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-11-30 01:17:03',NULL),(65,'Fecal Occult Blood Test (FOBT)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-11-30 01:17:01',NULL),(66,'CARDIAC TROPONIN I (cTn I)	','ng/mL',NULL,NULL,'< 0.30 ng/mL',NULL,NULL,NULL,NULL,1,'2023-10-30 01:16:58',NULL),(67,'Prostate-Specific Antigen (PSA)','ng/mL',NULL,NULL,'< 4 ng/mL',NULL,NULL,NULL,NULL,1,'2023-11-30 01:16:59',NULL),(68,'Hemoglobin A1C (HbA1C)','%',NULL,NULL,'<6.5%',NULL,NULL,NULL,NULL,1,'2023-10-30 01:16:57',NULL),(69,'Blood Type',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:16:57',NULL),(70,'Rh',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:16:56',NULL),(71,'NS1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:16:56',NULL),(72,'IgM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:16:55',NULL),(73,'IgG',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:16:55',NULL),(74,'FASTING','mg/dL',NULL,NULL,'70-100	',NULL,NULL,NULL,NULL,1,'2023-10-30 01:16:54',NULL),(75,'1st HOUR	','mg/dL',NULL,NULL,'<180	',NULL,NULL,NULL,NULL,1,'2023-10-30 01:16:53',NULL),(76,'2nd HOUR	','mg/dL',NULL,NULL,'<155	',NULL,NULL,NULL,NULL,1,'2023-11-30 01:16:52',NULL),(77,'BLEEDING TIME',NULL,NULL,NULL,'2-7 mins',NULL,NULL,NULL,NULL,1,'2023-11-30 01:16:51',NULL),(78,'CLOTTING TIME',NULL,NULL,NULL,'5-15 mins',NULL,NULL,NULL,NULL,1,'2023-11-30 01:16:50',NULL),(79,'remarks',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:16:37',NULL),(80,'others',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2023-10-30 01:16:49',NULL);
/*!40000 ALTER TABLE `lms_test_field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_test_results`
--

DROP TABLE IF EXISTS `lms_test_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_test_results` (
  `id` int NOT NULL AUTO_INCREMENT,
  `test_id` int NOT NULL,
  `patient_id` int NOT NULL,
  `wbc` varchar(50) DEFAULT NULL,
  `rbc` varchar(50) DEFAULT NULL,
  `hgb` float DEFAULT NULL,
  `hct` float DEFAULT NULL,
  `plt` float DEFAULT NULL,
  `neu` float DEFAULT NULL,
  `lym` float DEFAULT NULL,
  `mon` float DEFAULT NULL,
  `eos` float DEFAULT NULL,
  `bas` float DEFAULT NULL,
  `total` float DEFAULT NULL,
  `mcv` float DEFAULT NULL,
  `mch` float DEFAULT NULL,
  `mchc` float DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `transparency` varchar(50) DEFAULT NULL,
  `leukocyte` varchar(50) DEFAULT NULL,
  `nitrite` varchar(50) DEFAULT NULL,
  `urobilinogen` varchar(50) DEFAULT NULL,
  `protein` varchar(50) DEFAULT NULL,
  `ph` float DEFAULT NULL,
  `blood` varchar(50) DEFAULT NULL,
  `spGravity` float DEFAULT NULL,
  `ketone` varchar(50) DEFAULT NULL,
  `bilirubin` varchar(50) DEFAULT NULL,
  `glucose` varchar(50) DEFAULT NULL,
  `bacteria` varchar(50) DEFAULT NULL,
  `epithelialCells` varchar(50) DEFAULT NULL,
  `amorphousUrate` varchar(50) DEFAULT NULL,
  `mucusThreads` varchar(50) DEFAULT NULL,
  `consistency` varchar(50) DEFAULT NULL,
  `fatGlobules` varchar(50) DEFAULT NULL,
  `ascarisL` varchar(50) DEFAULT NULL,
  `trichurisTrichuria` varchar(50) DEFAULT NULL,
  `hookworm` varchar(50) DEFAULT NULL,
  `schistosoma` varchar(50) DEFAULT NULL,
  `entamoebaHistolyticaTroph` varchar(50) DEFAULT NULL,
  `entamoebaHistolyticaCyst` varchar(50) DEFAULT NULL,
  `entamoebaColi` varchar(50) DEFAULT NULL,
  `cholesterol` float DEFAULT NULL,
  `triglycerides` float DEFAULT NULL,
  `hdlCholesterol` float DEFAULT NULL,
  `ldlCholesterol` float DEFAULT NULL,
  `creatinine` float DEFAULT NULL,
  `potassium` float DEFAULT NULL,
  `totalCalcium` float DEFAULT NULL,
  `bun` float DEFAULT NULL,
  `hbsAgScreening` float DEFAULT NULL,
  `hepatitisCAntibody` float DEFAULT NULL,
  `sgptAlt` float DEFAULT NULL,
  `sgotAst` float DEFAULT NULL,
  `bua` float DEFAULT NULL,
  `cardiacTroponinI` varchar(50) DEFAULT NULL,
  `prostateSpecificAntigen` varchar(50) DEFAULT NULL,
  `hemoglobinA1C` float DEFAULT NULL,
  `pregnancyTest` varchar(50) DEFAULT NULL,
  `bloodType` varchar(50) DEFAULT NULL,
  `rh` varchar(50) DEFAULT NULL,
  `ns1` varchar(50) DEFAULT NULL,
  `igM` varchar(50) DEFAULT NULL,
  `igG` varchar(50) DEFAULT NULL,
  `rprTiterWithDilution` varchar(50) DEFAULT NULL,
  `vdrl` varchar(50) DEFAULT NULL,
  `fasting` float DEFAULT NULL,
  `firstHour` float DEFAULT NULL,
  `secondHour` float DEFAULT NULL,
  `urinePregnancyTest` varchar(50) DEFAULT NULL,
  `sodium` varchar(50) DEFAULT NULL,
  `chloride` varchar(50) DEFAULT NULL,
  `ionizedCalcium` varchar(50) DEFAULT NULL,
  `bleedingTime` varchar(50) DEFAULT NULL,
  `clottingTime` varchar(50) DEFAULT NULL,
  `testDate` date DEFAULT NULL,
  `others` varchar(50) DEFAULT NULL,
  `remarks` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `test_id` (`test_id`),
  KEY `patient_id` (`patient_id`),
  CONSTRAINT `patient_id` FOREIGN KEY (`patient_id`) REFERENCES `lms_patient` (`id`),
  CONSTRAINT `test_id` FOREIGN KEY (`test_id`) REFERENCES `lms_test_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_test_results`
--

LOCK TABLES `lms_test_results` WRITE;
/*!40000 ALTER TABLE `lms_test_results` DISABLE KEYS */;
INSERT INTO `lms_test_results` VALUES (10,71,64,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-11-25',NULL,NULL,'0','2023-11-25 14:34:24',NULL),(11,73,64,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-11-25',NULL,NULL,'0','2023-11-25 14:34:24',NULL),(13,71,65,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-11-25',NULL,NULL,'0','2023-11-25 14:37:08',NULL),(16,73,65,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-11-26',NULL,NULL,'0','2023-11-26 14:16:35',NULL),(18,71,66,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-11-26',NULL,NULL,'0','2023-11-26 15:12:52',NULL),(19,73,66,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-11-26',NULL,NULL,'0','2023-11-26 15:12:52',NULL),(20,77,66,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-11-26',NULL,NULL,'0','2023-11-26 15:12:52',NULL),(21,78,66,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-11-26',NULL,NULL,'0','2023-11-26 15:12:52',NULL),(22,79,66,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-11-26',NULL,NULL,'0','2023-11-26 15:12:52',NULL),(23,77,67,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-11-27',NULL,NULL,'0','2023-11-26 16:20:24',NULL),(24,78,67,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-11-27',NULL,NULL,'0','2023-11-26 16:20:24',NULL),(25,79,67,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-11-27',NULL,NULL,'0','2023-11-26 16:20:24',NULL),(26,71,68,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-11-27',NULL,NULL,'0','2023-11-27 05:23:21',NULL),(27,79,68,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-11-27',NULL,NULL,'0','2023-11-27 05:23:21',NULL),(28,73,68,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-11-27',NULL,NULL,'0','2023-11-27 05:23:21',NULL),(29,80,68,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-11-27',NULL,NULL,'0','2023-11-27 05:30:15',NULL);
/*!40000 ALTER TABLE `lms_test_results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_user_account`
--

DROP TABLE IF EXISTS `lms_user_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_user_account` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_user_account`
--

LOCK TABLES `lms_user_account` WRITE;
/*!40000 ALTER TABLE `lms_user_account` DISABLE KEYS */;
/*!40000 ALTER TABLE `lms_user_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lms_user_profile`
--

DROP TABLE IF EXISTS `lms_user_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lms_user_profile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `lms_user_account_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_lms_user_profile_lms_user_account1_idx` (`lms_user_account_id`),
  CONSTRAINT `fk_lms_user_profile_lms_user_account1` FOREIGN KEY (`lms_user_account_id`) REFERENCES `eccaremedical`.`lms_user_account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lms_user_profile`
--

LOCK TABLES `lms_user_profile` WRITE;
/*!40000 ALTER TABLE `lms_user_profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `lms_user_profile` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-27 14:02:49
