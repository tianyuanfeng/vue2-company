<template>
  <div class="side-menu">
    <el-row>
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
          <el-menu-item class="el-menu-item-demo" style="padding-left: 35px;" index="/introduction">公司简介</el-menu-item>
          <el-menu-item class="el-menu-item-demo" style="padding-left: 35px;" index="/business">业务领域</el-menu-item>
          <el-menu-item class="el-menu-item-demo" style="padding-left: 35px;" index="/cooperation">合作机构</el-menu-item>
          <el-menu-item class="el-menu-item-demo" style="padding-left: 35px;" index="/connection">联系我们</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  .side-menu{
    position: fixed;
    top: 60px;
    height: 100%;
    float: left;
    font-weight: bold;
    width: 120px;
    background: #fff;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1);
    overflow-y: auto;
    overflow-x: hidden;
  }
  .el-menu-item-demo.is-active{
    color: #da0000;
    background-color: #ededed;
  }
  .el-menu-vertical-demo {
    background-color: #fff;
  }
  .el-menu-item-demo{
    padding-left: 40px;
  }

</style>
