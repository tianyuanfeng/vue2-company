<template>
  <div>
    <el-breadcrumb separator=" ">
      <el-breadcrumb-item :to="{ path: '/branch-jin' }">金茂大厦总部</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/branch-pu' }">浦东分公司</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>
