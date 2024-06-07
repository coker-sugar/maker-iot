<template>
  <!-- <div class="box">
    我是盒子
  </div> -->
  <div id="tab">

<!-- 最顶部 -->
<div id="top" >

  <el-row>
  <el-col :span="11">
<!-- A图片 -->
<img id="A_img" class="img " src="../assets/首页（登录前）/u48.png">
<!-- Maker_IoT图片 -->
<img id="Maker_img" class="img " src="../assets/首页（登录前）/maker.png">
  </el-col>

  <el-col :span="13">
    <ul id="top_right">

<router-link to="/">
  <li  style="font-weight:bold;font-size:.315rem">
      <img src="../assets/首页（登录前）/shouye.jpg" alt="">
    首页
  </li>
</router-link>

<router-link to="/Member">
  <li>
      <img src="../assets/首页（登录前）/chengyuan.jpg" alt="">
    成员
  </li>
</router-link>

<router-link to="/Achievement">
  <li>
      <img src="../assets/首页（登录前）/chengguo.jpg" alt="">
    成果
  </li>
</router-link>
  
  <router-link to="/jairu">
  <li style="width:1.6333rem">
      <img src="../assets/首页（登录前）/jiaru.jpg" alt="">
    加入我们
  </li>
</router-link>
</ul>
  </el-col>
</el-row>

</div>

</div>
</template>

<script>
// import { reactive } from "vue";
export default {
    name: 'AppNav',
}
</script>

<style scoped lang="less">
.box {
  background-color: @helpColor;
}
#tab{
width: 100%;
height: 1.4933rem;
// background: blue; 
}

#top {
  // border-width: 0rem;
  // position: relative;
  // left: 0rem;
  // top: 0rem;
  width: 100%;
height: 1.4933rem;
  // display: flex;
  background-color: #3f436a;
  #A_img {
  position: absolute;
  left: 2.7883rem;
  top: .2683rem;
  width: 1.12rem;
  height: .875rem;
}

#Maker_img {
  position: absolute;
  left: 4.1417rem;
  top: -0.4667rem;
  width: 2.8467rem;
  height: 2.6833rem;
}
  #top_right {
  width:11.4333rem;
  height: 100%;
  display: flex;
  a {
    margin-top: .5133rem;
    width:2.6833rem;
    height: .4667rem;
    perspective: 5.6583rem;
    li {
      width: .9917rem;
      height: 100%;
      line-height: .4667rem;
      font-size: .3033rem;
      color: #FFFFFF;
      text-align: center;
      display: flex;
      img {
        width: .35rem;
        height: .35rem;
        margin-top: .0467rem;
      }
    &:hover{
    transform: translateZ(.35rem);
    transition: all .5s;
      }
    }
  }
}
}


</style>