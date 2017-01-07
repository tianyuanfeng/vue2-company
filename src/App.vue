<template>
  <div>
    <nav-menu></nav-menu>
    <side-menu></side-menu>
    <div class="view-wrap">
      <router-view></router-view>
    </div>
    <foot-menu></foot-menu>
  </div>
</template>

<script>
import NavMenu from 'components/common/navMenu'
import SideMenu from 'components/common/sideMenu'
import FootMenu from 'components/common/footMenu'
export default {
  name: 'app',
  components: {
    NavMenu,SideMenu,FootMenu
  },
  data(){
    return {

    }
  }
}
</script>

<style>
  @import "styles/app.less";
  .view-wrap{
    margin-left: 120px;
    padding-top: 60px;
    background-color: #ededed;
  }
</style>
