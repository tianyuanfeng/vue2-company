<template>
  <div class="side-menu">
    <el-row>
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
          <!--<el-submenu index="1">-->
            <!--<template slot="title"><i class="el-icon-message"></i>Tasks</template>-->
            <!--<el-menu-item index="host">host</el-menu-item>-->
            <!--<el-menu-item index="cron">cron</el-menu-item>-->
          <!--</el-submenu>-->
          <!--公司简介、业务领域、合作机构、联系我们-->
          <!--<el-menu-item index="introduction"><i class="el-icon-menu"></i>公司简介</el-menu-item>-->
          <!--<el-menu-item index="business">   <i class="el-icon-setting"></i>业务领域</el-menu-item>-->
          <!--<el-menu-item index="cooperation"><i class="el-icon-setting"></i>合作机构</el-menu-item>-->
          <!--<el-menu-item index="connection"><i class="el-icon-setting"></i>联系我们</el-menu-item>-->
          <el-menu-item index="/introduction">公司简介</el-menu-item>
          <el-menu-item index="/business">业务领域</el-menu-item>
          <el-menu-item index="/cooperation">合作机构</el-menu-item>
          <el-menu-item index="/connection">联系我们</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  .side-menu{
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    width: 180px;
    min-width: 45px;
    max-height: 100vh;
    height: 100%;
    z-index: 1023;
    background: #fff;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1);
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
