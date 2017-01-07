
<template>
  <div>
    <div class="subanner">
      <div class="subannertxt">
        <h1>企业文化</h1>
      </div>
      <img src="../../assets/culture.jpg" class="subannerImg" alt="企业文化">
    </div>
    <div id="mainBody" class="main-body">
      <div class="mainCont">
        <div class="mainTabtxt">
          <i class="item01">
          </i>
          <h2>企业文化</h2>
          <p class="mainTabtip">DEVELOPMENT HISTORY</p>
          <p class="mainTabcontent">
            暂无
            <!--华禧（上海）股权投资基金管理有限公司，简称华禧资本（Trust-->
            <!--Capital），于2014年7月成立，注册地上海浦东自贸区，注册资本1亿2千万，是一家由复旦、港大等名校校友所创立的新兴私募股权投资基金。目前首期管理一只房地产投资基金和一只成长型企业股权投资基金，主要投资方向为：绿色能源、先进制造、生物医药、移动互联、地产开发与资产处置等领域。-->
            <!--公司自成立以来锐意进取，资产规模不断扩大，截止2016年9月，公司资产规模突破百亿大关。华禧基金在上海相继设立三家分公司，并且在其他重要一线二线城市也有分部。公司业务涉及股权投资、创业投资、融资租赁、金融服务咨询等领域，旨在成为投资、融资、租赁等金融行业中的标杆企业。-->
            <!--在不断开放的中国金融市场中，华禧基金将在坚守党的政策和方针前提下，不断开拓创新，力争成为中国金融市场浪潮中最前沿、最具创新能力的弄潮儿！-->
          </p>

        </div>
      </div>
    </div>
  </div>
</template>
<style>
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