<template>
  <div>
    connection
    <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
      <el-menu-item index="branch-jin">金茂大厦总部</el-menu-item>
      <el-menu-item index="branch-pu">浦东分公司</el-menu-item>
    </el-menu>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>
