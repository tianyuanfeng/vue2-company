
<template>
  <div>
    <div class="subanner">
      <div class="subannertxt">
        <h1>公司愿景</h1>
      </div>
      <img src="../../assets/vision.jpg" class="subannerImg" alt="公司愿景">
    </div>
    <div id="mainBody" class="main-body">
      <div class="mainCont">
        <div class="mainTabtxt">
          <i class="item01">
          </i>
          <h2>公司愿景</h2>
          <p class="mainTabtip">DEVELOPMENT HISTORY</p>
          <p class="mainTabcontent">
            暂无
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
