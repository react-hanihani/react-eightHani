/*
Navicat MySQL Data Transfer

Source Server         : myname
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : list

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-12-26 20:31:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for buycarorder
-- ----------------------------
DROP TABLE IF EXISTS `buycarorder`;
CREATE TABLE `buycarorder` (
  `id` int(11) NOT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  `todayPrice` decimal(10,2) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of buycarorder
-- ----------------------------
INSERT INTO `buycarorder` VALUES ('1', '乔丹篮球鞋男鞋高中低帮运动鞋秋季新款旅游鞋子耐磨透气外场战靴', 'shoes/a.jpg', '156.00', '0', '小明明', '1', '123');
INSERT INTO `buycarorder` VALUES ('2', 'Nike 耐克官方 NIKE BOMBAX TF 男子人造场地足球鞋 826486', 'shoes/b.jpg', '123.00', '0', '小明明', '1', '123');
INSERT INTO `buycarorder` VALUES ('11', '环球加绒高帮帆布鞋女冬棉鞋小白鞋2017新款韩版百搭球鞋板鞋布鞋', 'shoes/j.jpg', '123.00', '0', '小明明', '1', '123');
INSERT INTO `buycarorder` VALUES ('23', '森林灯光大屋礼品套装儿童女孩仿真过家家玩具别墅娃娃房生日礼物', 'toy/k.jpg', '222.00', '0', '小明明', '1', null);
