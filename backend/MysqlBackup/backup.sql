-- MySQL dump 10.13  Distrib 9.2.0, for Linux (x86_64)
--
-- Host: localhost    Database: ecommercesandbox
-- ------------------------------------------------------
-- Server version	9.2.0

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
-- Table structure for table `Categories`
--

DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Categories` (
  `CategoryId` char(36) NOT NULL,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`CategoryId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES ('bddc7f4d-eb9c-11ef-ac41-047c16be95e7','ALL'),('bddc827d-eb9c-11ef-ac41-047c16be95e7','ACCESSORIES'),('bddc830f-eb9c-11ef-ac41-047c16be95e7','CAMERAS & CAMCORDERS'),('bddc8350-eb9c-11ef-ac41-047c16be95e7','COMPUTERS & TABLETS'),('bddc8385-eb9c-11ef-ac41-047c16be95e7','ENTERTAINMENT');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CategoriesProducts`
--

DROP TABLE IF EXISTS `CategoriesProducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CategoriesProducts` (
  `CategoryId` char(36) NOT NULL,
  `ProductId` char(36) NOT NULL,
  `CreatedAt` datetime NOT NULL,
  PRIMARY KEY (`CategoryId`,`ProductId`),
  KEY `ProductId` (`ProductId`),
  CONSTRAINT `CategoriesProducts_ibfk_1` FOREIGN KEY (`CategoryId`) REFERENCES `Categories` (`CategoryId`),
  CONSTRAINT `CategoriesProducts_ibfk_2` FOREIGN KEY (`ProductId`) REFERENCES `Products` (`ProductId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CategoriesProducts`
--

LOCK TABLES `CategoriesProducts` WRITE;
/*!40000 ALTER TABLE `CategoriesProducts` DISABLE KEYS */;
INSERT INTO `CategoriesProducts` VALUES ('bddc827d-eb9c-11ef-ac41-047c16be95e7','5c4c1b97-eb9f-11ef-ac41-047c16be95e7','2025-02-15 10:53:04'),('bddc827d-eb9c-11ef-ac41-047c16be95e7','5c4c1fde-eb9f-11ef-ac41-047c16be95e7','2025-02-15 10:53:38'),('bddc827d-eb9c-11ef-ac41-047c16be95e7','5c4c20e8-eb9f-11ef-ac41-047c16be95e7','2025-02-15 10:53:57'),('bddc827d-eb9c-11ef-ac41-047c16be95e7','5c4c2188-eb9f-11ef-ac41-047c16be95e7','2025-02-15 11:00:19'),('bddc827d-eb9c-11ef-ac41-047c16be95e7','5c4c223c-eb9f-11ef-ac41-047c16be95e7','2025-02-15 11:00:19'),('bddc827d-eb9c-11ef-ac41-047c16be95e7','5c4c22d0-eb9f-11ef-ac41-047c16be95e7','2025-02-15 11:00:19'),('bddc827d-eb9c-11ef-ac41-047c16be95e7','bbbb2627-eb9d-11ef-ac41-047c16be95e7','2025-02-15 11:00:19'),('bddc827d-eb9c-11ef-ac41-047c16be95e7','bbbb6022-eb9d-11ef-ac41-047c16be95e7','2025-02-15 11:00:19'),('bddc830f-eb9c-11ef-ac41-047c16be95e7','bbbb6022-eb9d-11ef-ac41-047c16be95e7','2025-02-15 11:00:19'),('bddc8350-eb9c-11ef-ac41-047c16be95e7','5c4c1b97-eb9f-11ef-ac41-047c16be95e7','2025-02-15 10:53:16'),('bddc8350-eb9c-11ef-ac41-047c16be95e7','5c4c22d0-eb9f-11ef-ac41-047c16be95e7','2025-02-15 11:00:19'),('bddc8350-eb9c-11ef-ac41-047c16be95e7','bbbb6164-eb9d-11ef-ac41-047c16be95e7','2025-02-15 11:00:19'),('bddc8385-eb9c-11ef-ac41-047c16be95e7','5c4c20e8-eb9f-11ef-ac41-047c16be95e7','2025-02-15 10:54:12'),('bddc8385-eb9c-11ef-ac41-047c16be95e7','5c4c2351-eb9f-11ef-ac41-047c16be95e7','2025-02-15 11:00:19');
/*!40000 ALTER TABLE `CategoriesProducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Products` (
  `ProductId` char(36) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `HexColor` json NOT NULL,
  `Size` enum('Small','Medium','Large') NOT NULL,
  `Stars` tinyint unsigned NOT NULL,
  `FeaturedImagePath` varchar(500) NOT NULL,
  `SecondaryImagesPath` json DEFAULT NULL,
  `RegisterDate` datetime NOT NULL,
  `ProductStateId` int NOT NULL,
  PRIMARY KEY (`ProductId`),
  KEY `ProductStateId` (`ProductStateId`),
  CONSTRAINT `Products_ibfk_1` FOREIGN KEY (`ProductStateId`) REFERENCES `ProductsStates` (`ProductStateId`),
  CONSTRAINT `Products_chk_1` CHECK ((`Stars` between 1 and 5))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES ('5c4c1b97-eb9f-11ef-ac41-047c16be95e7','Google Home White Slate One Size Smart Speaker Google Assistant',145.99,'[\"#abc123\", \"#321cba\"]','Medium',1,'/Imgs/Main/productsImages/Google-Home/Google-Home-1.png','[\"/Imgs/Main/productsImages/Google-Home/Google-Home-2.png\"]','2025-02-15 10:18:35',1),('5c4c1fde-eb9f-11ef-ac41-047c16be95e7','Beats Solo 3 - Wireless Bluetooth On-Ear Headphones, Apple & Android Compatible, Up to 40H of Battery Life - Silver (Latest Model)',94.04,'[\"#ff0000\", \"#000000\"]','Medium',2,'/Imgs/Main/productsImages/HeadphoneBluetooth/Bluetooth-Headphones-red.png','[\"/Imgs/Main/productsImages/HeadphoneBluetooth/Bluetooth-Headphones.png\"]','2025-02-15 10:18:35',1),('5c4c20e8-eb9f-11ef-ac41-047c16be95e7','Smart Speaker Google Google Home Mini',140.00,'[\"#ffff\"]','Small',5,'/Imgs/Main/productsImages/HomeSmart/homeSmart.jpg','[\"/Imgs/Main/productsImages/HomeSmart/homeSmart2.jpg\"]','2025-02-15 10:18:35',1),('5c4c2188-eb9f-11ef-ac41-047c16be95e7','Klipsch Reference Theater Pack 5.1-Channel Speaker System + Onkyo TX-SR3100 80W 5.2-Channel AV Receiver',275.00,'[\"#001100\", \"#110022\", \"#223300\"]','Large',5,'/Imgs/Main/productsImages/Hometheater/Hometheater-1.png',NULL,'2025-02-15 10:18:35',1),('5c4c223c-eb9f-11ef-ac41-047c16be95e7','Wired Earbuds with Mic, Magnetic Earphones Noise Canceling in-Ear Headphones Audio Corded Headset for Mac Mini 2024 Samsung A15 A25 A14 A13 A03s S10s iPhone 6s Moto G Play Stylus Pure Pixel 5A',60.50,'[\"#123456\", \"#654321\", \"#abcdef\"]','Small',3,'/Imgs/Main/productsImages/InEar-phone/InEar-phone.png','[\"/Imgs/Main/productsImages/InEar-phone/InEar-phone-2.png\"]','2025-02-15 10:18:35',1),('5c4c22d0-eb9f-11ef-ac41-047c16be95e7','XP-PEN Artist12 11.6 Inch FHD Mesa Digitalizadora Pen Display Graphic Monitor with PN06 Battery-Free Caneta Multi-Function Luva 8192 Níveis de Pressão',99.99,'[\"#000000\"]','Medium',3,'/Imgs/Main/productsImages/Interactive-Pen-display/Interactive-Pen-display.jpg','[\"/Imgs/Main/productsImages/Interactive-Pen-display/Interactive-Pen-display-2.jpg\"]','2025-02-15 10:18:35',1),('5c4c2351-eb9f-11ef-ac41-047c16be95e7','Nintendo Wii Console, White RVL-101 (NEWEST MODEL)',105.45,'[\"#ffff\", \"#ff0000\"]','Medium',3,'/Imgs/Main/productsImages/Nintendo-wii/Nintendo-wii-1.png','[\"/Imgs/Main/productsImages/Nintendo-wii/Nintendo-wii-2.png\"]','2025-02-15 10:18:35',1),('bbbb2627-eb9d-11ef-ac41-047c16be95e7','Amazon Echo (newest model), Alexa speaker with premium sound, Ideal for large bedrooms, living rooms and kitchens, Charcoal',54.99,'[\"#1a1a1a\", \"#ff5733\", \"#33ff57\"]','Medium',5,'/Imgs/Main/productsImages/Alexa/Alexa.png','[\"/Imgs/Main/productsImages/Alexa/Alexa2.png\"]','2025-02-15 10:06:56',1),('bbbb6022-eb9d-11ef-ac41-047c16be95e7','Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor | DIGIC 4+ Image Processor and Full HD Videos',599.00,'[\"#0055ff\", \"#dd9900\"]','Medium',4,'/Imgs/Main/productsImages/canonCamera/canonCamera.jpg','[\"/Imgs/Main/productsImages/canonCamera/canonCamera2.jpg\"]','2025-02-15 10:06:56',1),('bbbb6164-eb9d-11ef-ac41-047c16be95e7','Gaming PC Desktop, GeForce GTX 1660 Super 6G, Intel Core i7 up to 3.9G, 32G RAM, 1T SSD, WiFi, BT 5.0, RGB Fan x6, RGB Mouse Pad, RGB BT Sound Bar, RGB BT Gaming Mic, Windows 10 Home',599.99,'[\"#ff0000\", \"#00ff00\", \"#0000ff\", \"#ff00ff\"]','Large',5,'/Imgs/Main/productsImages/Gamer-pc/Gamer-pc-1.png',NULL,'2025-02-15 10:06:56',1);
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ProductsStates`
--

DROP TABLE IF EXISTS `ProductsStates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProductsStates` (
  `ProductStateId` int NOT NULL AUTO_INCREMENT,
  `Sale` tinyint(1) NOT NULL DEFAULT '0',
  `NewProduct` tinyint(1) NOT NULL DEFAULT '0',
  `TopProduct` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ProductStateId`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ProductsStates`
--

LOCK TABLES `ProductsStates` WRITE;
/*!40000 ALTER TABLE `ProductsStates` DISABLE KEYS */;
INSERT INTO `ProductsStates` VALUES (1,0,0,0),(2,0,0,0),(3,0,0,0),(4,0,0,0),(5,0,0,0),(14,0,0,0),(15,0,0,0);
/*!40000 ALTER TABLE `ProductsStates` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-26  2:40:50
