<template>
  <div>
    <el-breadcrumb separator=" ">
      <el-breadcrumb-item :to="{ path: '/company' }">公司简介</el-breadcrumb-item>
      <br>
      <el-breadcrumb-item :to="{ path: '/history' }">发展历程</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/culture' }">企业文化</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/vision' }">公司愿景</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>
