
<template>
  <div>
    <div class="subanner animated bounceInRight">
      <div class="subannertxt">
        <h1>融资租赁</h1>
      </div>
      <img src="../../assets/venture.jpg" class="subannerImg" alt="融资租赁">
    </div>
    <div id="mainBody" class="main-body animated bounceInRightSlow">
      <div class="mainCont">
        <div class="mainTabtxt">
          <i class="item01">
          </i>
          <h2>融资租赁</h2>
          <p class="mainTabtip">EQUITY INVESTMENT</p>
          <p class="mainTabcontent">
            融资租赁（Financial Leasing），又称金融租赁或财务租赁，是指实质上转移与资产所有权有关的全部或绝大部分风险和报酬的租赁，资产的所有权最终可以转移，也可以不转移。更通俗的解释，是指出租人根据承租人对供货人和租赁标的物的选择，由出租人向供货人支付货款购买租赁标的物，然后出租给承租人使用，在约定的租赁期内承租人向出租人分期支付租金。在租赁期内出租人拥有租赁物的所有权，租赁期满时承租人支付租金完毕后，根据租赁合同约定可选择拥有租赁物所有权。融资租赁通过融物的形式达到融资的目的，是一种集融资、贸易于一体的新型金融服务产业。与一般统意义的“租赁”有本质的区别。
            2015年8月26日国务院总理李克强主持召开国务院常务会议，确定加快融资租赁和金融租赁行业发展的措施，更好服务实体经济。会议指出，加快发展融资租赁和金融租赁，是深化金融改革的重要举措，有利于缓解融资难融资贵，拉动企业设备投资，带动产业升级。会议确定，一是厉行简政放权，对融资租赁公司设立子公司不设最低注册资本限制。对船舶、农机、医疗器械、飞机等设备融资租赁简化相关登记许可或进出口手续。在经营资质认定上同等对待租赁方式购入和自行购买的设备。二是突出结构调整，加快发展高端核心装备进口、清洁能源、社会民生等领域的租赁业务，支持设立面向小微企业、“三农”的租赁公司。鼓励通过租赁推动装备走出去和国际产能合作。三是创新业务模式，用好“互联网+”，坚持融资与融物结合，建立租赁物与二手设备流通市场，发展售后回租业务。四是加大政策支持，鼓励各地通过奖励、风险补偿等方式，引导融资租赁和金融租赁更好服务实体经济。同时，有关部门要协调配合，加强风险管理。融资租赁是新的金融模式，融资公司和承租人所承担的风险都相对比较低。
          </p>
          <p class="mainTabcontent">
            华禧基金的融资租赁团队拥有众多具有金融背景的资深专家，专注于政府融资，通过导入信托、券商资产管理、中小企业私募债、中票、短融、PPN等金融产品，为各地方政府提供“一揽子”的金融解决方案服务。迄今为止，华禧基金的融资租赁业务模式已经相当成熟，大致的业务范围包括县、区、地级市的城投或建投、国投、交投等政府融资平台；BT项目；医院、药厂、医疗器械商、卫生局；大中专院校、学前教育、教育局；水务（包括自来水、污水处理厂）；涉电企业（电线电缆、开关、变电器、电厂、集成电路）；4A、5A级旅游景点、影院；燃气、供热、地炼、水电、风电、光伏、核电，垃圾发电；节能环保（包括大气治理、水处理、固废处理、膜工业新材料等）；智慧交通、智慧城市、海绵城市、市保障系统、现代农牧；高速公路、地铁、高铁、机场港口；船舶、飞机及飞机零件、通用航空；大型企业（规模10个亿以上）、国企、上市公司类型企业；影视、文化版权；汽车产业链、新能源汽车；大型房地产、高端酒店等。
          </p>
          <div>
            <el-row>
              <el-col :span="8">
                <img class="hx-img-el-col" src="../../assets/finance1.jpg" alt="交通设施">
              </el-col>
              <el-col :span="8">
                <img class="hx-img-el-col" src="../../assets/finance2.jpg" alt="医疗卫生">
              </el-col>
              <el-col :span="8">
                <img class="hx-img-el-col" src="../../assets/finance3.jpg" alt="电力装备">
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <img class="hx-img-el-col" src="../../assets/finance4.jpg" alt="船舶港口">
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  @import "../../styles/animate.css";
  .subanner {
    height: 294px;
    position: relative;
    z-index: 99;
  }
  .subannertxt {
    position: absolute;
    width: 550px;
    text-align: center;
    top: 50%;
    margin-top: -60px;
    left: 50%;
    margin-left: -275px;
  }

  .subannerImg {
    width: 100%;
    height: 100%;
    border: 0;
  }

  .subannertxt h1 {
    font: 26px/60px "Microsoft Yahei";
    color: #151515;
  }


  .main-body {
    width: 100%;
    background-color: #fff;
    /*opacity: 0;*/
  }
  .mainTabtxt {
    padding: 20px 120px 40px 180px;
    /*color: #151515;*/
  }
  .mainTabcontent{
    font: 14px/30px "Microsoft Yahei";
    padding-top: 10px;
  }
  .mainTabtxt h2 {
    font: 700 22px/30px "Microsoft Yahei";
  }
  .mainTabtip{
    color: rgba(218, 0, 0, 0.69);
    font-size: 14px;
  }
  .hx-img-el-col {
    width:100%;
    border: 1px solid #ccc;
    height: 180px;
  }

</style>