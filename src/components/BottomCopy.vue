<template>
    <!-- 底边栏 -->
    <div id="bottom">
  
      <el-row>
    <el-col :span="7">
  <!-- 图片A -->
  <img id="A_img" src="../assets/首页（登录前）/u86.png">
  <!-- Maker-IoT图片 -->
    <img id="Maker_img" src="../assets/首页（登录前）/u87.png">
    </el-col>
  <!-- 右部图片 -->
  <img id="u90_img" class="img " src="../assets/首页（登录前）/u90.svg">
  
    <el-col :span="17">
      <ul id="bottom_text">
    <li>联系电话：{{Bottom_sidebar.tel}}</li>
    <li>联系邮箱：{{Bottom_sidebar.mailbox}}</li>
    <li>联系QQ：{{Bottom_sidebar.qq}}</li>
    <li>团队地址：{{Bottom_sidebar.address}}</li>
  </ul>
    </el-col>
  </el-row>
  
  
   </div>
   <a style="width:90px" href="https://beian.miit.gov.cn/" target="_blank">您的备案号</a><br/>
  <a href="https://beian.miit.gov.cn/" target="_blank">粤B2-20****59-1</a>
  </template>
  
  <script>
  import { reactive } from "vue";
  export default {
      name: 'AppBottom',
      setup() {
              //底部
      let Bottom_sidebar = reactive({
        tel: '15898583320',
        mailbox: '2184517223@qq.com',
        qq: '2184517223',
        address:'逸夫楼114'
      })
          return {
              Bottom_sidebar
      }
      }
  }
  </script>
  
  <style scoped lang="less">
  div {
      border-width: 0rem;
  }
  li {
    list-style: none;
  }
  #bottom {
    background: @xtxColor;
    width: 100%;
    height: 1.5167rem;
    position: relative;
    left: 0rem;
    top: 0rem;
    margin-bottom: 30px;
  
    background: inherit;
    background-color: rgba(46, 51, 92, 1);
    border: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #02A7F0;
  
  
  
  #A_img {
    position: absolute;
    left: 1.435rem;
    top: .3267rem;
    width: .9333rem;
    height: .8283rem;
  }
  
  
  #Maker_img {
    position: absolute;
    left: 2.6833rem;
    top: .665rem;
    width: 2.3333rem;
    height: .5133rem;
  }
  
  #bottom_text{
    // background-color: red;
    position: absolute;
    right:.1667rem;
    // margin-left: .3333rem;
    width:76%;  
    // height: 100%;
    display: flex;
    justify-content: space-between;
    li {
    margin-top: .7233rem;
    width: 4.1667rem;
    height: .2683rem;
    // font-family: 'WenRouDongRiNaiLaoTi-2';
    font-weight: 400;
    font-style: normal;
    font-size: .3033rem;
    color: #FFFFFF;
    }
  }
  #u90_img {
    position: absolute;
    // z-index: -999;
    right: 0rem;
    top: 0rem;
    width: 8.47rem;
    height: 1.5167rem;
  }
  
  }
  a {
    width: 2.5rem;
    height: .4rem;
    // background-color: pink;
    display: block;
    font-size: 18px;
    margin: auto;
    line-height: .4rem;
  }
  </style>