/*
Navicat MySQL Data Transfer

Source Server         : hongtao
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : hanihani

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-12-26 19:49:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `productName` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `aclass` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `brand` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `hot` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `describle` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `originPrice` decimal(10,2) DEFAULT NULL,
  `todayPrice` decimal(10,2) DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `qty` int(10) DEFAULT NULL,
  `postage` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `detailclass` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '乔丹篮球鞋男鞋高中低帮运动鞋秋季新款旅游鞋子耐磨透气外场战靴', '鞋服', '乔丹', 'a.jpg', 'y', 'shoes/a1.jpg,shoes/a2.jpg,shoes/a3.jpg,shoes/a4.jpg', '320.00', '156.00', 'shoes/a.jpg', '123', '12', '匡威', 'up');
INSERT INTO `product` VALUES ('2', 'Nike 耐克官方 NIKE BOMBAX TF 男子人造场地足球鞋 826486', '鞋服', '乔丹', 'a.jpg', 'y', 'shoes/b1.jpg,shoes/b2.jpg,shoes/b3.jpg,shoes/b4.jpg', '234.00', '123.00', 'shoes/b.jpg', '123', '10', '奥康', 'up');
INSERT INTO `product` VALUES ('3', '安踏篮球鞋男鞋2017秋季新款球鞋男篮球战靴高帮运动鞋男耐磨防滑', '鞋服', '乔丹', 'a.jpg', null, 'shoes/c1.jpg,shoes/c2.jpg,shoes/c3.jpg,shoes/c4.jpg', '239.00', '123.00', 'shoes/c.jpg', '123', 'free', '红蜻蜓', 'up');
INSERT INTO `product` VALUES ('5', '环球冬季新款加绒皮面保暖球鞋学生厚底小白鞋女韩版低帮帆布鞋', '鞋服', '环球', 'd.jpg', null, 'shoes/d1.jpg,shoes/d2.jpg,shoes/d3.jpg,shoes/d4.jpg', '123.00', '55.00', 'shoes/d.jpg', '1', 'free', '蜘蛛王', 'up');
INSERT INTO `product` VALUES ('6', '环球秋冬季加绒高帮帆布鞋女韩版休闲保暖女棉鞋学生经典平底球鞋', '鞋服', '环球', 'd.jpg', null, 'shoes/e1.jpg,shoes/e2.jpg,shoes/e3.jpg,shoes/e4.jpg', '234.00', '123.00', 'shoes/e.jpg', '0', 'free', '康奈', 'up');
INSERT INTO `product` VALUES ('7', '乔丹篮球鞋男鞋高中低帮运动鞋秋季新款旅游鞋子耐磨透气外场战靴', '鞋服', '环球', 'd.jpg', null, 'shoes/f1.jpg,shoes/f2.jpg,shoes/f3.jpg,shoes/f4.jpg', '264.00', '187.00', 'shoes/f.jpg', '123', 'free', '七品芝麻', 'up');
INSERT INTO `product` VALUES ('8', '安踏篮球鞋男鞋2017秋冬季新款高帮防滑水泥地耐磨霸道学生运动鞋', '鞋服', '环球', 'd.jpg', null, 'shoes/g1.jpg,shoes/g2.jpg,shoes/g3.jpg,shoes/g4.jpg', '297.00', '297.00', 'shoes/g.jpg', '123', 'free', '森达', 'up');
INSERT INTO `product` VALUES ('9', '2017冬季新款加绒小白鞋女学生运动保暖球鞋韩版百搭二棉鞋休闲鞋', '鞋服', '帆鞋', 'h.jpg', null, 'shoes/h1.jpg,shoes/h2.jpg,shoes/h3.jpg,shoes/h4.jpg', '376.00', '300.00', 'shoes/h.jpg', '123', 'free', '百丽BELLE', 'up');
INSERT INTO `product` VALUES ('10', '春秋季白色帆布鞋男韩版休闲鞋透气板鞋子低帮布鞋学生球鞋男单鞋', '鞋服', '帆鞋', 'h.jpg', null, 'shoes/i1.jpg,shoes/i2.jpg,shoes/i3.jpg,shoes/i4.jpg', '478.00', '344.00', 'shoes/a.jpg', '23', 'free', '富贵鸟', 'up');
INSERT INTO `product` VALUES ('11', '环球加绒高帮帆布鞋女冬棉鞋小白鞋2017新款韩版百搭球鞋板鞋布鞋', '鞋服', '帆鞋', 'h.jpg', null, 'shoes/j1.jpg,shoes/j2.jpg,shoes/j3.jpg,shoes/j4.jpg', '346.00', '123.00', 'shoes/j.jpg', '123', 'free', '金猴', 'up');
INSERT INTO `product` VALUES ('12', 'adidas 阿迪达斯 篮球 男子 篮球场上篮球鞋 TMAC 3', '鞋服', '帆鞋', 'h.jpg', null, 'shoes/k1.jpg,shoes/k2.jpg,shoes/k3.jpg,shoes/k4.jpg', '235.00', '123.00', 'shoes/k.jpg', '1', 'free', '吉尔达', 'up');
INSERT INTO `product` VALUES ('4', '人本加绒高帮帆布鞋女秋冬新款韩版学生球鞋港风平底布鞋女二棉鞋', '鞋服', '帆鞋', 'h.jpg', null, 'shoes/l1.jpg,shoes/l2.jpg,shoes/l3.jpg,shoes/l4.jpg', '123.00', '123.00', 'shoes/l.jpg', '12', '5', '阿迪达斯', 'up');
INSERT INTO `product` VALUES ('13', '托马斯小火车套装轨道电动玩具男孩高铁和谐号3-6-8-10岁儿童汽车', '玩具', '大童', 'a.jpg', 'y', 'toy/a1.jpg,toy/a2.jpg,toy/a3.jpg,toy/a4.jpg', '234.00', '123.00', 'toy/a.jpg', null, 'free', '汽车', 'down');
INSERT INTO `product` VALUES ('14', '费雪托马斯小火车头Thomas轨道合金车套装儿童男孩玩具车培西高登', '玩具', '大童', 'a.jpg', 'y', 'toy/b1.jpg,toy/b2.jpg,toy/b3.jpg,toy/b4.jpg', '23.00', '12.00', 'toy/b.jpg', null, 'free', '汽车', 'down');
INSERT INTO `product` VALUES ('15', '可爱猫咪毛绒玩具大号玩偶小抱枕睡觉公仔布偶娃娃圣诞节礼物女孩', '玩具', '小童', 'c.jpg', null, 'toy/c1.jpg,toy/c2.jpg,toy/c3.jpg,toy/c4.jpg', '789.00', '234.00', 'toy/c.jpg', null, 'free', '汽车', 'up');
INSERT INTO `product` VALUES ('16', '儿童电动毛绒玩具狗狗会唱歌跳舞电子机械狗仿真泰迪牵绳走路小狗', '玩具', '小童', 'c.jpg', null, 'toy/d1.jpg,toy/d2.jpg,toy/d3.jpg,toy/d4.jpg', '123.00', '23.00', 'toy/d.jpg', null, 'free', '电动', 'up');
INSERT INTO `product` VALUES ('17', '正版粉红豹毛绒玩具可爱粉红顽皮豹公仔布娃娃生日圣诞节礼物女生', '玩具', '小童', 'c.jpg', null, 'toy/e1.jpg,toy/e2.jpg,toy/e3.jpg,toy/e4.jpg', '124.00', '78.00', 'toy/e.jpg', null, 'free', '电动', 'up');
INSERT INTO `product` VALUES ('18', '大号惯性托马斯小火车宝宝益智声光收纳玩具男孩回力耐摔汽车模型', '玩具', '小童', 'c.jpg', null, 'toy/f1.jpg,toy/f2.jpg,toy/f3.jpg,toy/f4.jpg', '234.00', '123.00', 'toy/f.jpg', null, 'free', '电动', 'up');
INSERT INTO `product` VALUES ('19', '咬手指的大嘴巴鳄鱼玩具盲约同款咬手鲨鱼海盗木桶叔叔整蛊玩具', '玩具', '小童', 'c.jpg', null, 'toy/g1.jpg,toy/g2.jpg,toy/g3.jpg,toy/g4.jpg', '345.00', '234.00', 'toy/g.jpg', null, '12', '火车', 'down');
INSERT INTO `product` VALUES ('20', '智力儿童拼图玩具2-3-4-5-6岁男女孩早教益智木质七巧板宝宝拼板', '玩具', '幼儿', 'h.jpg', null, 'toy/h1.jpg,toy/h2.jpg,toy/h3.jpg,toy/h4.jpg', '111.00', '88.00', 'toy/h.jpg', null, '10', '火车', 'down');
INSERT INTO `product` VALUES ('21', '抱抱旺趣巢电动毛绒智能机器狗对话萌宠玩具早教益智声控电子宠物', '玩具', '幼儿', 'h.jpg', 'y', 'toy/i1.jpg,toy/i2.jpg,toy/i3.jpg,toy/i4.jpg', '234.00', '90.00', 'toy/a.jpg', null, 'free', '火车', 'up');
INSERT INTO `product` VALUES ('22', '小伶玩具北美儿童过家家玩具娃娃女孩提包屋女童公主套装生日礼物', '玩具', '幼儿', 'h.jpg', null, 'toy/j1.jpg,toy/j2.jpg,toy/j3.jpg,toy/j4.jpg', '234.00', '123.00', 'toy/j.jpg', null, '10', '手枪', 'up');
INSERT INTO `product` VALUES ('23', '森林灯光大屋礼品套装儿童女孩仿真过家家玩具别墅娃娃房生日礼物', '玩具', '幼儿', 'h.jpg', null, 'toy/k1.jpg,toy/k2.jpg,toy/k3.jpg,toy/k4.jpg', '345.00', '222.00', 'toy/k.jpg', null, '10', '手枪', 'up');
INSERT INTO `product` VALUES ('24', '创意礼品呕吐蛋蛋黄君 懒蛋蛋捏捏乐/团子发泄玩具蛋黄哥动漫周边', '玩具', '幼儿', 'h.jpg', null, 'toy/l1.jpg,toy/l2.jpg,toy/l3.jpg,toy/l4.jpg', '234.00', '111.00', 'toy/l.jpg', null, 'free', '手枪', 'up');
INSERT INTO `product` VALUES ('25', '白色陶瓷花瓶摆件现代简约欧式插花干花花器 ', '家居', '客厅', 'a.jpg', 'y', 'family/a1.jpg,family/a2.jpg,family/a3.jpg,family/a4.jpg', '234.00', '123.00', 'family/a.jpg', null, 'free', '种花', 'down');
INSERT INTO `product` VALUES ('26', '现代简约北欧陶瓷花瓶摆件客厅茶几电视柜干花插花家居软装饰品', '家居', '客厅', 'a.jpg', null, 'family/b1.jpg,family/b2.jpg,family/b3.jpg,family/b4.jpg', '345.00', '222.00', 'family/b.jpg', null, 'free', '种花', 'down');
INSERT INTO `product` VALUES ('27', '喷泉流水新家庭软装摆设创意家居客厅鱼缸室内装饰品欧式落地摆件', '家居', '客厅', 'a.jpg', null, 'family/c1.jpg,family/c2.jpg,family/c3.jpg,family/c4.jpg', '1223.00', '789.00', 'family/c.jpg', null, '10', '种花', 'up');
INSERT INTO `product` VALUES ('28', '北欧简约麋鹿摆件家居装饰品客厅新婚庆礼品创意实用闺蜜结婚礼物', '家居', '客厅', 'a.jpg', null, 'family/d1.jpg,family/d2.jpg,family/d3.jpg,family/d4.jpg', '234.00', '90.00', 'family/d.jpg', null, 'free', '树木', 'up');
INSERT INTO `product` VALUES ('29', '藤条假花花藤壁挂花室内客厅的空调管遮挡仿真楼梯护栏扶手装饰品', '家居', '厨房', 'e.jpg', null, 'family/e1.jpg,family/e2.jpg,family/e3.jpg,family/e4.jpg', '234.00', '176.00', 'family/e.jpg', null, 'free', '树木', 'up');
INSERT INTO `product` VALUES ('30', '立体星星灯宿舍墙壁装饰挂件简约现代客厅墙上温馨房间装饰品壁饰', '家居', '厨房', 'e.jpg', null, 'family/f1.jpg,family/f2.jpg,family/f3.jpg,family/f4.jpg', '213.00', '200.00', 'family/f.jpg', null, 'free', '树木', 'up');
INSERT INTO `product` VALUES ('31', '计时沙漏伴睡灯创意桌面摆件家居饰品时间计时器礼品结婚礼物实用', '家居', '房间', 'e.jpg', null, 'family/g1.jpg,family/g2.jpg,family/g3.jpg,family/g4.jpg', '124.00', '90.00', 'family/g.jpg', null, 'free', '树木', 'down');
INSERT INTO `product` VALUES ('32', '欧式仿真鹿头壁挂动物头壁饰复古墙面创意挂件客厅玄关墙上装饰品', '家居', '房间', 'e.jpg', null, 'family/h1.jpg,family/h2.jpg,family/h3.jpg,family/h4.jpg', '123.00', '45.00', 'family/h.jpg', null, '10', '种子', 'down');
INSERT INTO `product` VALUES ('33', '假山流水喷泉招财风水轮加湿器家居装饰工艺礼品客厅办公室小摆件', '家居', '房间', 'e.jpg', null, 'family/i1.jpg,family/i2.jpg,family/i3.jpg,family/i4.jpg', '1.00', '67.00', 'family/i.jpg', null, '10', '种子', 'up');
INSERT INTO `product` VALUES ('34', '玉石平安扣摆件家装饰品客厅玄关酒柜电视柜摆设创意乔迁新居礼品', '家居', '客厅', 'j.jpg', null, 'family/j1.jpg,family/j2.jpg,family/j3.jpg,family/j4.jpg', '89.00', '45.00', 'family/j.jpg', null, 'free', '种子', 'up');
INSERT INTO `product` VALUES ('35', '美式乡村铁艺帆船摆件设 客厅酒柜电视柜家居软装饰品服装店房间', '家居', '房间', 'e.jpg', null, 'family/k1.jpg,family/k2.jpg,family/k3.jpg,family/k4.jpg', '123.00', '23.00', 'family/k.jpg', null, '10', '种子', 'up');
INSERT INTO `product` VALUES ('36', 'W奇居良品现代简约家居装饰摆件马利奥茶色带铜环玻璃花瓶', '家居', '房间', 'e.jpg', null, 'family/l1.jpg,family/l2.jpg,family/l3.jpg,family/l4.jpg', '127.00', '46.00', 'family/l.jpg', null, 'free', '种子', 'up');
INSERT INTO `product` VALUES ('37', '乔丹篮球鞋男鞋高中低帮运动鞋秋季新款旅游鞋子耐磨透气外场战靴', '鞋服', '乔丹', 'a.jpg', 'y', 'shoes/a1.jpg,shoes/a2.jpg,shoes/a3.jpg,shoes/a4.jpg', '320.00', '156.00', 'shoes/a.jpg', '123', '12', '匡威', 'down');
INSERT INTO `product` VALUES ('38', 'Nike 耐克官方 NIKE BOMBAX TF 男子人造场地足球鞋 826486', '鞋服', '乔丹', 'a.jpg', 'y', 'shoes/b1.jpg,shoes/b2.jpg,shoes/b3.jpg,shoes/b4.jpg', '234.00', '123.00', 'shoes/b.jpg', '123', '10', '奥康', 'down');
INSERT INTO `product` VALUES ('39', '安踏篮球鞋男鞋2017秋季新款球鞋男篮球战靴高帮运动鞋男耐磨防滑', '鞋服', '乔丹', 'a.jpg', null, 'shoes/c1.jpg,shoes/c2.jpg,shoes/c3.jpg,shoes/c4.jpg', '239.00', '123.00', 'shoes/c.jpg', '123', 'free', '红蜻蜓', 'up');
INSERT INTO `product` VALUES ('40', '环球冬季新款加绒皮面保暖球鞋学生厚底小白鞋女韩版低帮帆布鞋', '鞋服', '环球', 'd.jpg', null, 'shoes/d1.jpg,shoes/d2.jpg,shoes/d3.jpg,shoes/d4.jpg', '123.00', '55.00', 'shoes/d.jpg', '1', 'free', '蜘蛛王', 'up');
INSERT INTO `product` VALUES ('41', '环球秋冬季加绒高帮帆布鞋女韩版休闲保暖女棉鞋学生经典平底球鞋', '鞋服', '环球', 'd.jpg', null, 'shoes/e1.jpg,shoes/e2.jpg,shoes/e3.jpg,shoes/e4.jpg', '234.00', '123.00', 'shoes/e.jpg', '0', 'free', '康奈', 'up');
INSERT INTO `product` VALUES ('42', '乔丹篮球鞋男鞋高中低帮运动鞋秋季新款旅游鞋子耐磨透气外场战靴', '鞋服', '环球', 'd.jpg', null, 'shoes/f1.jpg,shoes/f2.jpg,shoes/f3.jpg,shoes/f4.jpg', '264.00', '187.00', 'shoes/f.jpg', '123', 'free', '七品芝麻', 'up');
INSERT INTO `product` VALUES ('43', '安踏篮球鞋男鞋2017秋冬季新款高帮防滑水泥地耐磨霸道学生运动鞋', '鞋服', '环球', 'd.jpg', null, 'shoes/g1.jpg,shoes/g2.jpg,shoes/g3.jpg,shoes/g4.jpg', '297.00', '297.00', 'shoes/g.jpg', '123', 'free', '森达', 'down');
INSERT INTO `product` VALUES ('44', '2017冬季新款加绒小白鞋女学生运动保暖球鞋韩版百搭二棉鞋休闲鞋', '鞋服', '帆鞋', 'h.jpg', null, 'shoes/h1.jpg,shoes/h2.jpg,shoes/h3.jpg,shoes/h4.jpg', '376.00', '300.00', 'shoes/h.jpg', '123', 'free', '百丽BELLE', 'down');
INSERT INTO `product` VALUES ('45', '春秋季白色帆布鞋男韩版休闲鞋透气板鞋子低帮布鞋学生球鞋男单鞋', '鞋服', '帆鞋', 'h.jpg', null, 'shoes/i1.jpg,shoes/i2.jpg,shoes/i3.jpg,shoes/i4.jpg', '478.00', '344.00', 'shoes/a.jpg', '23', 'free', '富贵鸟', 'up');
INSERT INTO `product` VALUES ('46', '环球加绒高帮帆布鞋女冬棉鞋小白鞋2017新款韩版百搭球鞋板鞋布鞋', '鞋服', '帆鞋', 'h.jpg', null, 'shoes/j1.jpg,shoes/j2.jpg,shoes/j3.jpg,shoes/j4.jpg', '346.00', '123.00', 'shoes/j.jpg', '123', 'free', '金猴', 'up');
INSERT INTO `product` VALUES ('47', 'adidas 阿迪达斯 篮球 男子 篮球场上篮球鞋 TMAC 3', '鞋服', '帆鞋', 'h.jpg', null, 'shoes/k1.jpg,shoes/k2.jpg,shoes/k3.jpg,shoes/k4.jpg', '235.00', '123.00', 'shoes/k.jpg', '1', 'free', '吉尔达', 'up');
INSERT INTO `product` VALUES ('48', '乔丹篮球鞋男鞋高中低帮运动鞋秋季新款旅游鞋子耐磨透气外场战靴', '鞋服', '乔丹', 'a.jpg', 'y', 'shoes/a1.jpg,shoes/a2.jpg,shoes/a3.jpg,shoes/a4.jpg', '320.00', '156.00', 'shoes/a.jpg', '123', '12', '匡威', 'down');
INSERT INTO `product` VALUES ('49', 'Nike 耐克官方 NIKE BOMBAX TF 男子人造场地足球鞋 826486', '鞋服', '乔丹', 'a.jpg', 'y', 'shoes/b1.jpg,shoes/b2.jpg,shoes/b3.jpg,shoes/b4.jpg', '234.00', '123.00', 'shoes/b.jpg', '123', '10', '奥康', 'down');
INSERT INTO `product` VALUES ('50', '安踏篮球鞋男鞋2017秋季新款球鞋男篮球战靴高帮运动鞋男耐磨防滑', '鞋服', '乔丹', 'a.jpg', null, 'shoes/c1.jpg,shoes/c2.jpg,shoes/c3.jpg,shoes/c4.jpg', '239.00', '123.00', 'shoes/c.jpg', '123', 'free', '红蜻蜓', 'up');
INSERT INTO `product` VALUES ('51', '环球冬季新款加绒皮面保暖球鞋学生厚底小白鞋女韩版低帮帆布鞋', '鞋服', '环球', 'd.jpg', null, 'shoes/d1.jpg,shoes/d2.jpg,shoes/d3.jpg,shoes/d4.jpg', '123.00', '55.00', 'shoes/d.jpg', '1', 'free', '蜘蛛王', 'up');
INSERT INTO `product` VALUES ('52', '环球秋冬季加绒高帮帆布鞋女韩版休闲保暖女棉鞋学生经典平底球鞋', '鞋服', '环球', 'd.jpg', null, 'shoes/e1.jpg,shoes/e2.jpg,shoes/e3.jpg,shoes/e4.jpg', '234.00', '123.00', 'shoes/e.jpg', '0', 'free', '康奈', 'up');
INSERT INTO `product` VALUES ('53', '乔丹篮球鞋男鞋高中低帮运动鞋秋季新款旅游鞋子耐磨透气外场战靴', '鞋服', '环球', 'd.jpg', null, 'shoes/f1.jpg,shoes/f2.jpg,shoes/f3.jpg,shoes/f4.jpg', '264.00', '187.00', 'shoes/f.jpg', '123', 'free', '七品芝麻', 'down');
INSERT INTO `product` VALUES ('54', '安踏篮球鞋男鞋2017秋冬季新款高帮防滑水泥地耐磨霸道学生运动鞋', '鞋服', '环球', 'd.jpg', null, 'shoes/g1.jpg,shoes/g2.jpg,shoes/g3.jpg,shoes/g4.jpg', '297.00', '297.00', 'shoes/g.jpg', '123', 'free', '森达', 'down');
INSERT INTO `product` VALUES ('55', '2017冬季新款加绒小白鞋女学生运动保暖球鞋韩版百搭二棉鞋休闲鞋', '鞋服', '帆鞋', 'h.jpg', null, 'shoes/h1.jpg,shoes/h2.jpg,shoes/h3.jpg,shoes/h4.jpg', '376.00', '300.00', 'shoes/h.jpg', '123', 'free', '百丽BELLE', 'up');
INSERT INTO `product` VALUES ('56', '春秋季白色帆布鞋男韩版休闲鞋透气板鞋子低帮布鞋学生球鞋男单鞋', '鞋服', '帆鞋', 'h.jpg', null, 'shoes/i1.jpg,shoes/i2.jpg,shoes/i3.jpg,shoes/i4.jpg', '478.00', '344.00', 'shoes/a.jpg', '23', 'free', '富贵鸟', 'up');
INSERT INTO `product` VALUES ('57', '环球加绒高帮帆布鞋女冬棉鞋小白鞋2017新款韩版百搭球鞋板鞋布鞋', '鞋服', '帆鞋', 'h.jpg', null, 'shoes/j1.jpg,shoes/j2.jpg,shoes/j3.jpg,shoes/j4.jpg', '346.00', '123.00', 'shoes/j.jpg', '123', 'free', '金猴', 'down');
INSERT INTO `product` VALUES ('58', 'adidas 阿迪达斯 篮球 男子 篮球场上篮球鞋 TMAC 3', '鞋服', '帆鞋', 'h.jpg', null, 'shoes/k1.jpg,shoes/k2.jpg,shoes/k3.jpg,shoes/k4.jpg', '235.00', '123.00', 'shoes/k.jpg', '1', 'free', '吉尔达', 'down');
