USE `heroku_4f10a6637010781`;

CREATE TABLE `burgers`
(
	`id` int NOT NULL AUTO_INCREMENT,
	`burger_name` varchar(255) NOT NULL,
	`devoured` BOOLEAN DEFAULT false,
  `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);
