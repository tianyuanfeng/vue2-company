
<template>
  <div>
    <div class="subanner animated bounceInRight">
      <div class="subannertxt">
        <h1>特色业务</h1>
      </div>
      <img src="../../assets/venture.jpg" class="subannerImg" alt="特色业务">
    </div>
    <div id="mainBody" class="main-body animated bounceInRightSlow">
      <div class="mainCont">
        <div class="mainTabtxt">
          <i class="item01">
          </i>
          <h2>特色业务</h2>
          <p class="mainTabtip">EQUITY INVESTMENT</p>
          <p class="mainTabcontent">
            2016年对于华禧基金是特殊的一年，一方面公司的资产规模突破了百亿大关，成为金融市场中一支极具发展潜力的创新力量；另一方面，华禧基金的团队不断扩张，并且开始涉足一些特色领域业务。
            特色业务一：大飞机租赁业务
          </p>
          <p class="mainTabcontent">
            飞机租赁是租赁公司从制造厂商或者其他机构购买飞机，然后将飞机租给航空公司或其他承租人，然后依据租赁协议，按照月度或季度向承租人收取租金的业务。中国航空租赁市场发展速度越来越快，并且仍有很大市场空间。华禧基金审时度势，凭借自身丰富的租赁经验、雄厚的资金实力，果断进入大飞机租赁市场。目前，华禧基金已与国内数家机场、航空公司、融资租赁公司等达成初步合作意向。
            特色业务二：大型PPP项目
            PPP（Public-Private Partnership），即政府和社会资本合作，是公共基础设施中的一种项目融资模式。在该模式下，鼓励私营企业、民营资本与政府进行合作，参与公共基础设施的建设。近年来，国务院、财政部、发改委等部门密集出台PPP相关政策，鼓励各行业大力开展PPP项目。业内人士对于PPP与融资租赁的结合都比较看好，华禧基金也在该领域不断深入参与。
          </p>
          <div>
            <el-row>
              <el-col :span="12">
                <img class="hx-img-el-col" src="../../assets/special1.jpg" alt="special1">
              </el-col>
              <el-col :span="12">
                <img  class="hx-img-el-col" src="../../assets/special2.jpg" alt="special2">
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