
<template>
    <!--visible控制菜单栏的显示与隐藏-->
    <!--  isCollapse 主要是 element UI 里的控制 侧边栏 缩放的
          使用动态样式 :class="adaptation.nav" 去改变布局 -->
<div>
  <AppNav/>
  <!-- 大图标 -->
  <img id="u93_img" class="img " src="../assets/首页（登录前）/u93.png">

  <main>
    <!-- 二级路由 -->
    <router-view/>
  </main>
  <AppBottom/>
</div>
</template>

<script>
import AppNav from '@/components/AppNav.vue'
import AppBottom from '@/components/AppBottom.vue'

export default {
  components: {  AppNav, AppBottom },
}
</script>

<style scoped lang="less">
#u93_img {
  border-width: 0px;
  z-index: 999;
  width: 100%;
  height: 10.3rem;
}
</style>

