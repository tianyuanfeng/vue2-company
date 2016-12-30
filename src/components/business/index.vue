<template>
  ccccccccccccc
  <div>
    <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
      <el-menu-item index="equity">股权投资</el-menu-item>
      <el-menu-item index="venture">创业投资</el-menu-item>
      <el-menu-item index="finance">融资租赁</el-menu-item>
      <el-menu-item index="special">特色业务</el-menu-item>
    </el-menu>
    <div class="view">
      <router-view></router-view>
    </div>
    <!--<el-menu default-active="2" class="el-menu-vertical-demo" >-->
   <!---->
      <!--&lt;!&ndash;公司简介、业务领域、合作机构、联系我们&ndash;&gt;-->
      <!--&lt;!&ndash;<el-menu-item index="introduction"><i class="el-icon-menu"></i>公司简介</el-menu-item>&ndash;&gt;-->
      <!--&lt;!&ndash;<el-menu-item index="business">   <i class="el-icon-setting"></i>业务领域</el-menu-item>&ndash;&gt;-->
      <!--&lt;!&ndash;<el-menu-item index="cooperation"><i class="el-icon-setting"></i>合作机构</el-menu-item>&ndash;&gt;-->
      <!--&lt;!&ndash;<el-menu-item index="connection"><i class="el-icon-setting"></i>联系我们</el-menu-item>&ndash;&gt;-->
      <!--<el-menu-item index="introduction">公司简介</el-menu-item>-->
      <!--<el-menu-item index="business">业务领域</el-menu-item>-->
      <!--<el-menu-item index="cooperation">合作机构</el-menu-item>-->
      <!--<el-menu-item index="connection">联系我们</el-menu-item>-->
    <!--</el-menu>-->


    <!--<el-submenu index="1">-->
    <!--<template slot="title"><i class="el-icon-message"></i>Tasks</template>-->
    <!--<el-menu-item index="history">host</el-menu-item>-->
    <!--<el-menu-item index="culture">cron</el-menu-item>-->
    <!--</el-submenu>-->
  </div>
  <!--<router-view></router-view>-->
</template>
