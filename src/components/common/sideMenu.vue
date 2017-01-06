<template>
  <div class="side-menu">
    <el-row>
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
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
