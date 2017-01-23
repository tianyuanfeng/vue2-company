<template>
  <div>
    <el-row>
      <el-col :span="9">
        <div class="login-huaxi">
          华禧基金
        </div>
        <el-breadcrumb class="hx-el-breadcrumb" separator=" ">
          <span class="hx-fl">我的位置：</span>
          <el-breadcrumb-item class="hx-el-breadcrumb-item" :to="{ path: '/operation' }">{{name}}业务领域</el-breadcrumb-item>
          <br>
          <div class="hx-br-height"></div>
          <el-breadcrumb-item class="hx-el-breadcrumb-item" :to="{ path: '/equity' }">股权投资</el-breadcrumb-item>
          <el-breadcrumb-item class="hx-el-breadcrumb-item" :to="{ path: '/venture' }">创业投资</el-breadcrumb-item>
          <el-breadcrumb-item class="hx-el-breadcrumb-item" :to="{ path: '/finance' }">融资租赁</el-breadcrumb-item>
          <el-breadcrumb-item class="hx-el-breadcrumb-item" :to="{ path: '/special' }" >特色业务</el-breadcrumb-item>
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
