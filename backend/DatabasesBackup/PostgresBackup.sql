-- =========================================
-- PostgreSQL Backup Script
-- Database: ecommercesandbox
-- =========================================

-- =========================
-- Table: productstates
-- =========================
DROP TABLE IF EXISTS productstates CASCADE;

CREATE TABLE productstates (
    productstateid SERIAL PRIMARY KEY,
    sale BOOLEAN NOT NULL DEFAULT FALSE,
    newproduct BOOLEAN NOT NULL DEFAULT FALSE,
    topproduct BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO productstates (productstateid, sale, newproduct, topproduct) VALUES
(1, FALSE, FALSE, FALSE),
(2, FALSE, FALSE, FALSE),
(3, FALSE, FALSE, FALSE),
(4, FALSE, FALSE, FALSE),
(5, FALSE, FALSE, FALSE),
(14, FALSE, FALSE, FALSE),
(15, FALSE, FALSE, FALSE);

-- =========================
-- Table: categories
-- =========================
DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE categories (
    categoryid UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO categories VALUES
('bddc7f4d-eb9c-11ef-ac41-047c16be95e7', 'ALL'),
('bddc827d-eb9c-11ef-ac41-047c16be95e7', 'ACCESSORIES'),
('bddc830f-eb9c-11ef-ac41-047c16be95e7', 'CAMERAS & CAMCORDERS'),
('bddc8350-eb9c-11ef-ac41-047c16be95e7', 'COMPUTERS & TABLETS'),
('bddc8385-eb9c-11ef-ac41-047c16be95e7', 'ENTERTAINMENT');

-- =========================
-- Table: products
-- =========================
DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
    productid UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    hexcolor JSONB NOT NULL,
    size VARCHAR(10) NOT NULL CHECK (size IN ('Small', 'Medium', 'Large')),
    stars SMALLINT NOT NULL CHECK (stars BETWEEN 1 AND 5),
    featuredimagepath VARCHAR(500) NOT NULL,
    secondaryimagespath JSONB,
    registerdate TIMESTAMP NOT NULL,
    productstateid INT NOT NULL,
    CONSTRAINT fk_product_state
        FOREIGN KEY (productstateid)
        REFERENCES productstates (productstateid)
);

INSERT INTO products VALUES
('5c4c1b97-eb9f-11ef-ac41-047c16be95e7','Google Home White Slate One Size Smart Speaker Google Assistant',145.99,'["#abc123", "#321cba"]','Medium',1,'/Imgs/Main/productsImages/Google-Home/Google-Home-1.png','["/Imgs/Main/productsImages/Google-Home/Google-Home-2.png"]','2025-02-15 10:18:35',1),
('5c4c1fde-eb9f-11ef-ac41-047c16be95e7','Beats Solo 3 - Wireless Bluetooth On-Ear Headphones, Apple & Android Compatible, Up to 40H of Battery Life - Silver (Latest Model)',94.04,'["#ff0000", "#000000"]','Medium',2,'/Imgs/Main/productsImages/HeadphoneBluetooth/Bluetooth-Headphones-red.png','["/Imgs/Main/productsImages/HeadphoneBluetooth/Bluetooth-Headphones.png"]','2025-02-15 10:18:35',1),
('5c4c20e8-eb9f-11ef-ac41-047c16be95e7','Smart Speaker Google Google Home Mini',140.00,'["#ffff"]','Small',5,'/Imgs/Main/productsImages/HomeSmart/homeSmart.jpg','["/Imgs/Main/productsImages/HomeSmart/homeSmart2.jpg"]','2025-02-15 10:18:35',1),
('5c4c2188-eb9f-11ef-ac41-047c16be95e7','Klipsch Reference Theater Pack 5.1-Channel Speaker System + Onkyo TX-SR3100 80W 5.2-Channel AV Receiver',275.00,'["#001100", "#110022", "#223300"]','Large',5,'/Imgs/Main/productsImages/Hometheater/Hometheater-1.png',NULL,'2025-02-15 10:18:35',1),
('5c4c223c-eb9f-11ef-ac41-047c16be95e7','Wired Earbuds with Mic, Magnetic Earphones Noise Canceling in-Ear Headphones',60.50,'["#123456", "#654321", "#abcdef"]','Small',3,'/Imgs/Main/productsImages/InEar-phone/InEar-phone.png','["/Imgs/Main/productsImages/InEar-phone/InEar-phone-2.png"]','2025-02-15 10:18:35',1),
('5c4c22d0-eb9f-11ef-ac41-047c16be95e7','XP-PEN Artist12 11.6 Inch FHD Mesa Digitalizadora',99.99,'["#000000"]','Medium',3,'/Imgs/Main/productsImages/Interactive-Pen-display/Interactive-Pen-display.jpg','["/Imgs/Main/productsImages/Interactive-Pen-display/Interactive-Pen-display-2.jpg"]','2025-02-15 10:18:35',1),
('5c4c2351-eb9f-11ef-ac41-047c16be95e7','Nintendo Wii Console, White RVL-101',105.45,'["#ffff", "#ff0000"]','Medium',3,'/Imgs/Main/productsImages/Nintendo-wii/Nintendo-wii-1.png','["/Imgs/Main/productsImages/Nintendo-wii/Nintendo-wii-2.png"]','2025-02-15 10:18:35',1),
('bbbb2627-eb9d-11ef-ac41-047c16be95e7','Amazon Echo (newest model)',54.99,'["#1a1a1a", "#ff5733", "#33ff57"]','Medium',5,'/Imgs/Main/productsImages/Alexa/Alexa.png','["/Imgs/Main/productsImages/Alexa/Alexa2.png"]','2025-02-15 10:06:56',1),
('bbbb6022-eb9d-11ef-ac41-047c16be95e7','Canon EOS Rebel T7 DSLR Camera',599.00,'["#0055ff", "#dd9900"]','Medium',4,'/Imgs/Main/productsImages/canonCamera/canonCamera.jpg','["/Imgs/Main/productsImages/canonCamera/canonCamera2.jpg"]','2025-02-15 10:06:56',1),
('bbbb6164-eb9d-11ef-ac41-047c16be95e7','Gaming PC Desktop',599.99,'["#ff0000", "#00ff00", "#0000ff", "#ff00ff"]','Large',5,'/Imgs/Main/productsImages/Gamer-pc/Gamer-pc-1.png',NULL,'2025-02-15 10:06:56',1);

-- =========================
-- Table: categoriesproducts
-- =========================
DROP TABLE IF EXISTS categoriesproducts CASCADE;

CREATE TABLE categoriesproducts (
    categoryid UUID NOT NULL,
    productid UUID NOT NULL,
    createdat TIMESTAMP NOT NULL,
    PRIMARY KEY (categoryid, productid),
    CONSTRAINT fk_category
        FOREIGN KEY (categoryid) REFERENCES categories (categoryid),
    CONSTRAINT fk_product
        FOREIGN KEY (productid) REFERENCES products (productid)
);

INSERT INTO categoriesproducts VALUES
('bddc827d-eb9c-11ef-ac41-047c16be95e7','5c4c1b97-eb9f-11ef-ac41-047c16be95e7','2025-02-15 10:53:04'),
('bddc827d-eb9c-11ef-ac41-047c16be95e7','5c4c1fde-eb9f-11ef-ac41-047c16be95e7','2025-02-15 10:53:38'),
('bddc827d-eb9c-11ef-ac41-047c16be95e7','5c4c20e8-eb9f-11ef-ac41-047c16be95e7','2025-02-15 10:53:57'),
('bddc8385-eb9c-11ef-ac41-047c16be95e7','5c4c2351-eb9f-11ef-ac41-047c16be95e7','2025-02-15 11:00:19');

