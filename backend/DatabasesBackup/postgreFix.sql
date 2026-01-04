INSERT INTO productstates ("ProductStateId", "Sale", "NewProduct", "TopProduct") VALUES
(1, false, false, false),
(2, false, false, false),
(3, false, false, false),
(4, false, false, false),
(5, false, false, false),
(14, false, false, false),
(15, false, false, false)
ON CONFLICT ("ProductStateId") DO NOTHING;

INSERT INTO categories ("CategoryId", "Name") VALUES
('bddc7f4d-eb9c-11ef-ac41-047c16be95e7', 'ALL'),
('bddc827d-eb9c-11ef-ac41-047c16be95e7', 'ACCESSORIES'),
('bddc830f-eb9c-11ef-ac41-047c16be95e7', 'CAMERAS & CAMCORDERS'),
('bddc8350-eb9c-11ef-ac41-047c16be95e7', 'COMPUTERS & TABLETS'),
('bddc8385-eb9c-11ef-ac41-047c16be95e7', 'ENTERTAINMENT')
ON CONFLICT ("CategoryId") DO NOTHING;

INSERT INTO products (
  "ProductId",
  "Name",
  "Price",
  "HexColor",
  "Size",
  "Stars",
  "FeaturedImagePath",
  "SecondaryImagesPath",
  "RegisterDate",
  "ProductStateId"
) VALUES
(
  '5c4c1b97-eb9f-11ef-ac41-047c16be95e7',
  'Google Home White Slate One Size Smart Speaker Google Assistant',
  145.99,
  ARRAY['#abc123", "#321cba'],
  'Medium',
  1,
  '/Imgs/Main/productsImages/Google-Home/Google-Home-1.png',
  array['/Imgs/Main/productsImages/Google-Home/Google-Home-2.png'],
  '2025-02-15 10:18:35',
  1
),
(
  '5c4c1fde-eb9f-11ef-ac41-047c16be95e7',
  'Beats Solo 3 - Wireless Bluetooth On-Ear Headphones, Apple & Android Compatible, Up to 40H of Battery Life - Silver (Latest Model)',
  94.04,
  ARRAY['#ff0000', '#000000'],
  'Medium',
  2,
  '/Imgs/Main/productsImages/HeadphoneBluetooth/Bluetooth-Headphones-red.png',
  ARRAY['/Imgs/Main/productsImages/HeadphoneBluetooth/Bluetooth-Headphones.png'],
  '2025-02-15 10:18:35',
  1
),
(
  '5c4c20e8-eb9f-11ef-ac41-047c16be95e7',
  'Smart Speaker Google Google Home Mini',
  140.00,
  ARRAY['#ffff'],
  'Small',
  5,
  '/Imgs/Main/productsImages/HomeSmart/homeSmart.jpg',
  ARRAY['/Imgs/Main/productsImages/HomeSmart/homeSmart2.jpg'],
  '2025-02-15 10:18:35',
  1
),
(
  '5c4c2188-eb9f-11ef-ac41-047c16be95e7',
  'Klipsch Reference Theater Pack 5.1-Channel Speaker System + Onkyo TX-SR3100 80W 5.2-Channel AV Receiver',
  275.00,
  ARRAY['#001100', '#110022', '#223300'],
  'Large',
  5,
  '/Imgs/Main/productsImages/Hometheater/Hometheater-1.png',
  NULL,
  '2025-02-15 10:18:35',
  1
),
(
  '5c4c223c-eb9f-11ef-ac41-047c16be95e7',
  'Wired Earbuds with Mic, Magnetic Earphones Noise Canceling in-Ear Headphones Audio Corded Headset',
  60.50,
  ARRAY['#123456', '#654321', '#abcdef'],
  'Small',
  3,
  '/Imgs/Main/productsImages/InEar-phone/InEar-phone.png',
  ARRAY['/Imgs/Main/productsImages/InEar-phone/InEar-phone-2.png'],
  '2025-02-15 10:18:35',
  1
),
(
  '5c4c22d0-eb9f-11ef-ac41-047c16be95e7',
  'XP-PEN Artist12 11.6 Inch FHD Mesa Digitalizadora',
  99.99,
  ARRAY['#000000'],
  'Medium',
  3,
  '/Imgs/Main/productsImages/Interactive-Pen-display/Interactive-Pen-display.jpg',
  ARRAY['/Imgs/Main/productsImages/Interactive-Pen-display/Interactive-Pen-display-2.jpg'],
  '2025-02-15 10:18:35',
  1
),
(
  '5c4c2351-eb9f-11ef-ac41-047c16be95e7',
  'Nintendo Wii Console, White RVL-101 (NEWEST MODEL)',
  105.45,
  ARRAY['#ffff', '#ff0000'],
  'Medium',
  3,
  '/Imgs/Main/productsImages/Nintendo-wii/Nintendo-wii-1.png',
  ARRAY['/Imgs/Main/productsImages/Nintendo-wii/Nintendo-wii-2.png'],
  '2025-02-15 10:18:35',
  1
),
(
  'bbbb2627-eb9d-11ef-ac41-047c16be95e7',
  'Amazon Echo (newest model), Alexa speaker with premium sound',
  54.99,
  ARRAY['#1a1a1a', '#ff5733', '#33ff57'],
  'Medium',
  5,
  '/Imgs/Main/productsImages/Alexa/Alexa.png',
  ARRAY['/Imgs/Main/productsImages/Alexa/Alexa2.png'],
  '2025-02-15 10:06:56',
  1
),
(
  'bbbb6022-eb9d-11ef-ac41-047c16be95e7',
  'Canon EOS Rebel T7 DSLR Camera',
  599.00,
  ARRAY['#0055ff', '#dd9900'],
  'Medium',
  4,
  '/Imgs/Main/productsImages/canonCamera/canonCamera.jpg',
  ARRAY['/Imgs/Main/productsImages/canonCamera/canonCamera2.jpg'],
  '2025-02-15 10:06:56',
  1
),
(
  'bbbb6164-eb9d-11ef-ac41-047c16be95e7',
  'Gaming PC Desktop',
  599.99,
  ARRAY['#ff0000', '#00ff00', '#0000ff', '#ff00ff'],
  'Large',
  5,
  '/Imgs/Main/productsImages/Gamer-pc/Gamer-pc-1.png',
  NULL,
  '2025-02-15 10:06:56',
  1
)
ON CONFLICT ("ProductId") DO NOTHING;

INSERT INTO categoriesproducts (
  "CategoryId",
  "ProductId",
  "CreatedAt"
) VALUES
('bddc827d-eb9c-11ef-ac41-047c16be95e7','5c4c1b97-eb9f-11ef-ac41-047c16be95e7','2025-02-15 10:53:04'),
('bddc827d-eb9c-11ef-ac41-047c16be95e7','5c4c1fde-eb9f-11ef-ac41-047c16be95e7','2025-02-15 10:53:38'),
('bddc827d-eb9c-11ef-ac41-047c16be95e7','5c4c20e8-eb9f-11ef-ac41-047c16be95e7','2025-02-15 10:53:57'),
('bddc827d-eb9c-11ef-ac41-047c16be95e7','5c4c2188-eb9f-11ef-ac41-047c16be95e7','2025-02-15 11:00:19'),
('bddc827d-eb9c-11ef-ac41-047c16be95e7','5c4c223c-eb9f-11ef-ac41-047c16be95e7','2025-02-15 11:00:19'),
('bddc827d-eb9c-11ef-ac41-047c16be95e7','5c4c22d0-eb9f-11ef-ac41-047c16be95e7','2025-02-15 11:00:19'),
('bddc827d-eb9c-11ef-ac41-047c16be95e7','bbbb2627-eb9d-11ef-ac41-047c16be95e7','2025-02-15 11:00:19'),
('bddc827d-eb9c-11ef-ac41-047c16be95e7','bbbb6022-eb9d-11ef-ac41-047c16be95e7','2025-02-15 11:00:19'),
('bddc830f-eb9c-11ef-ac41-047c16be95e7','bbbb6022-eb9d-11ef-ac41-047c16be95e7','2025-02-15 11:00:19'),
('bddc8350-eb9c-11ef-ac41-047c16be95e7','5c4c1b97-eb9f-11ef-ac41-047c16be95e7','2025-02-15 10:53:16'),
('bddc8350-eb9c-11ef-ac41-047c16be95e7','5c4c22d0-eb9f-11ef-ac41-047c16be95e7','2025-02-15 11:00:19'),
('bddc8350-eb9c-11ef-ac41-047c16be95e7','bbbb6164-eb9d-11ef-ac41-047c16be95e7','2025-02-15 11:00:19'),
('bddc8385-eb9c-11ef-ac41-047c16be95e7','5c4c20e8-eb9f-11ef-ac41-047c16be95e7','2025-02-15 10:54:12'),
('bddc8385-eb9c-11ef-ac41-047c16be95e7','5c4c2351-eb9f-11ef-ac41-047c16be95e7','2025-02-15 11:00:19')
ON CONFLICT DO NOTHING;

