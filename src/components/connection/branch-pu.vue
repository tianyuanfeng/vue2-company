
<template>
  <div>
    <div class="subanner animated bounceInRight">
      <div class="subannertxt">
        <h1>浦东分公司</h1>
      </div>
      <img src="../../assets/branch-pu.jpg" class="subannerImg" alt="浦东分公司">
    </div>
    <div id="mainBody" class="main-body animated bounceInRightSlow">
      <div class="mainCont">
        <div class="mainTabtxt">
          <i class="item01">
          </i>
          <h2>浦东分公司</h2>
          <p class="mainTabtip">EQUITY INVESTMENT</p>
          <p class="mainTabcontent">电话：021-64366533邮箱：huaxirongzi@163.com传真：021-64366533</p>
          <p class="mainTabcontent">地址：上海市浦东新区浦东大道138号永华大厦18楼</p>
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
