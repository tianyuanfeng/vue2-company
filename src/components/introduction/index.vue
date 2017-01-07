<template>
  <div>
    <el-row>
      <el-col :span="9">
        <div class="login-huaxi">
          华禧基金
        </div>
        <el-breadcrumb class="hx-el-breadcrumb" separator=" ">
          <span class="hx-fl">我的位置：</span>
          <el-breadcrumb-item class="hx-el-breadcrumb-item" :to="{ path: '/company' }">公司简介</el-breadcrumb-item>
          <br>
          <div class="hx-br-height"></div>
          <el-breadcrumb-item class="hx-el-breadcrumb-item" :to="{ path: '/history' }">发展历程</el-breadcrumb-item>
          <el-breadcrumb-item class="hx-el-breadcrumb-item" :to="{ path: '/culture' }">企业文化</el-breadcrumb-item>
          <el-breadcrumb-item class="hx-el-breadcrumb-item" :to="{ path: '/vision' }">公司愿景</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="15">
        <div class="view">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  @import "../../styles/hx-app.less";
</style>
