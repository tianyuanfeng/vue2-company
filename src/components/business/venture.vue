<template>
  <div>
    <div class="subanner">
      <div class="subannertxt">
        <h1>创业投资</h1>
      </div>
      <img src="../../assets/venture.jpg" class="subannerImg" alt="创业投资">
    </div>
    <div id="mainBody" class="main-body">
      <div class="mainCont">
        <div class="mainTabtxt">
          <i class="item01">
          </i>
          <h2>股权投资</h2>
          <p class="mainTabtip">EQUITY INVESTMENT</p>
          <p class="mainTabcontent">
            创业投资的经营方针是在高风险中追求高回报，特别强调创业企业的高成长性；其投资对象是那些不具备上市资格的处于起步和发展阶段的企业，甚至是仅仅处在构思之中的企业。它的投资目的不是要控股，而是希望取得少部分股权，通过资金和管理等方面的援助，促进创业公司的发展，使资本增值。一旦公司发展起来，股票可以上市，创业资本家便通过在股票市场出售股票，获取高额回报。
            创业投资也可称为风险投资（Venture Capital），是指通过向不成熟的创业企业提供股权资本，并为其提供管理和经营服务，期望在企业发展到相对成熟后，通过股权转让收取高额中长期收益的投资行为。
          </p>
          <p class="mainTabcontent">
            华禧基金一直对创业企业给予高度关注，对于前沿的互联网领域、信息技术领域、消费金融领域都有独特的投资策略。华禧基金不但协助创业者解决资金问题，还运用自己的管理经验、物力资源、人力资源来帮助初创企业成长，华禧基金致力于成为不同行业领域优秀初创企业的孵化器，让所有创业者都有可能实现创业梦想。
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
