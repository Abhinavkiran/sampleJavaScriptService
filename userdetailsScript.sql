CREATE TABLE `userdetails` (
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(30) DEFAULT NULL,
  `email` varchar(35) DEFAULT NULL,
  `phone` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE DATABASE `mydb` /*!40100 DEFAULT CHARACTER SET latin1 */;
UPDATE `mydb`.`userdetails`
SET
`firstname` = <{firstname: }>,
`lastname` = <{lastname: }>,
`email` = <{email: }>,
`phone` = <{phone: }>
WHERE ;

SELECT `userdetails`.`firstname`,
    `userdetails`.`lastname`,
    `userdetails`.`email`,
    `userdetails`.`phone`
FROM `mydb`.`userdetails`;
