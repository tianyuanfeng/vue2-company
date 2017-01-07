
<template>
    <div>
        <div class="subanner">
            <div class="subannertxt">
                <h1>合作机构1</h1>
            </div>
            <img src="../../assets/subBanner.jpg" class="subannerImg" alt="合作机构1">
        </div>
        <div id="mainBody" class="main-body">
            <div class="mainCont">
                <div class="mainTabtxt">
                    <i class="item01">
                    </i>
                    <h2>合作机构1</h2>
                    <p class="mainTabtip">DEVELOPMENT HISTORY</p>
                    <p class="mainTabcontent">
                        华禧基金拥有众多具有金融背景的资深专家，专注于政府融资，通过导入信托、公司债、企业债、券商资产管理、中小企业私募债、中票、短融、PPN等金融产品，为地方提供“一揽子”的金融解决方案服务。此外，华禧基金还与金融市场中众多金融机构达成了友好合作关系。
                    </p>
                    <div>
                        <el-row>
                            <el-col :span="8">
                                <img class="hx-img-el-col" src="../../assets/cooperation1.jpg" alt="cooperation1">
                            </el-col>
                            <el-col :span="8">
                                <img class="hx-img-el-col" src="../../assets/cooperation2.jpg" alt="cooperation2">
                            </el-col>
                            <el-col :span="8">
                                <img  class="hx-img-el-col" src="../../assets/cooperation3.png" alt="cooperation3">
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <img  class="hx-img-el-col" src="../../assets/cooperation4.jpg" alt="cooperation4">
                            </el-col>
                            <el-col :span="8">
                                <img  class="hx-img-el-col" src="../../assets/cooperation5.png" alt="cooperation5">
                            </el-col>
                            <el-col :span="8">
                                <img  class="hx-img-el-col" src="../../assets/cooperation6.png" alt="cooperation6">
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <img  class="hx-img-el-col" src="../../assets/cooperation7.jpg" alt="cooperation7">
                            </el-col>
                            <el-col :span="8">
                                <img  class="hx-img-el-col" src="../../assets/cooperation8.jpg" alt="cooperation8">
                            </el-col>
                        </el-row>
                    </div>

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
