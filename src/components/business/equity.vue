<template>
  <div>
    <div class="subanner animated bounceInRight">
      <div class="subannertxt">
        <!--<h1>股权投资</h1>-->
        <h1>{{name}}</h1>
      </div>
      <img src="../../assets/equity.jpg" class="subannerImg" alt="股权投资">
    </div>
    <div id="mainBody" class="main-body animated bounceInRightSlow">
      <div class="mainCont">
        <div class="mainTabtxt">
          <i class="item01">
          </i>
          <h2>股权投资</h2>
          <p class="mainTabtip">EQUITY INVESTMENT</p>
          <p class="mainTabcontent">
            国内通常把股权投资译作PE，广义的PE为涵盖企业首次公开发行前各阶段的权益投资，即对处于种子期、初创期、发展期、扩展期、成熟期和Pre-IPO各个时期企业所进行的投资，相关资本按照投资阶段可划分为天使投资、发展资本、并购基金、夹层资本、Pre-IPO资本等。在中国金融市场内，私募分为直接投资到中国境内目标企业的私募和通过在海外设立离岸公司方式进行的红筹私募。
            华禧基金投资团队核心成员由来自证券、银行、基金等领域的资深金融行业从业人员组成，团队主要投资方向包括但不限于先进制造领域、医疗健康领域、互联网领域、新能源领域等最具投资价值的新兴行业。从公司成立到现在，华禧基金凭借过硬的团队实力，专业的投资策略，为客户创造了高于市场平均水平的收益。未来，华禧基金还将砥砺前行，继续创造更加傲人的业绩！
          </p>
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
</style>
