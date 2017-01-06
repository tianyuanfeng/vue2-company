<template>
  <div>
    <el-breadcrumb separator=" ">
      <el-breadcrumb-item :to="{ path: '/equity' }">股权投资</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/venture' }">创业投资</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/finance' }">融资租赁</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/special' }" >特色业务</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
</style>
