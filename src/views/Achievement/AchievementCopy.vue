<template>
    <div class="block text-center" m="t-4">
      <el-carousel trigger="click" height="573.104px" :autoplay="false" arrow="never">

        <el-carousel-item v-for="item in achivements" :key="item" class="small justify-center" style="" text="2xl">
          <el-row :gutter="20" class="small justify-center" text="2xl">
              <el-col  :span="12" >
                <div id="left">
                  <img id="left-top"  src="../../assets/成就/circle.jpg" alt=""/>
                  <img  id="left-bottom" src="../../assets/成就/circle.svg" alt=""/>
                  <h1>{{item.name}}</h1>
                  <h3>{{item.system}}</h3>
                  <h4>简介</h4>
                  <p>
                    {{ item.brief }}
                  </p>
                  <h4>项目成就</h4>
                  <p>
                    {{ item.achive.one }}<br/>
                    {{ item.achive.two }}<br/>
                    {{ item.achive.three }}
                  </p>
                  <h4>项目成员</h4>
                  <h5>
                    {{ item.member }}
                  </h5>
                </div>
              </el-col>
              <el-col id="right" :span="12">
                <img id="right-top" src="../../assets/成就/circle.svg" alt=""/>
                <img  id="right-bottom" src="../../assets/成就/circle.svg" alt=""/>
               <div class="block text-center" m="t-4">
                <el-carousel trigger="click" height="374px" arrow="never"> 
                  <el-carousel-item v-for="i in item.picture" :key="i">
                    <img :src="i.view" alt="">
                  </el-carousel-item>
                </el-carousel>
                </div>
              </el-col>        
          </el-row>
          
        </el-carousel-item>

      </el-carousel>
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup(){
    let achivements = reactive({
      first: {
            name: "慧眼识航",
            system: "疲劳驾驶检测系统",
            brief: "“慧眼护航”——疲劳驾驶监控系统是一种基于5G网络、图像识别分析、深度学习的疲劳驾驶监控系统模型。应用人脸识别原理，能够通过图像采集与分析计算判断面部的状态或动作，判断是否处于疲劳状态或者是否做出违规行为，从而对这些行为做出相应语音播报来警告提醒驾驶员。",
            achive: {
                one: "1.2022年全国大学生物联网设计竞赛（华为杯)华中及西南赛二等奖",
              two: "2.2022年湖南省大学生计算机作品赛二等奖",
                three:"3.已有专利一项,正在申请软件著作权一项"
            },
            member: "王维杰、张雨甜、黄冠联、周超",
        picture: [
          { id: 0, view: require("@/assets/成就/pilao1.jpg") },
           {id:1,view: require("@/assets/成就/pilao2.jpg")  } ]
      },second: {
        name: "简食",
        system: "物联网体系化一站式烹饪系统",
        brief: "将传统的菜谱APP、智能厨具以及电商社区相结合,为用户打造一站式便携化的智慧厨房。可提供菜谱推荐服务；平台整合线上线下资源，开设了电商服务社区；平台自主研发了智能化厨具——智能调料盒与智能美食勺。",
        achive: {
          one: "1.第十二届全国大学生电子商务“创新、创意及创业”挑战赛湖南赛区省级选拔赛最佳创意奖",
          two: "2.2022年第十六届iCAN大学生创新创业大赛湖南赛区选拔赛三等奖",
          three:"3.已有专利一项,正在申请专利一项,取得一项软件著作权"
        },
        member: "苏伦俊、邱勇华、牛志欣、谢鹏",
        picture: [
          { id: 0, view: require("@/assets/成就/JS1.png") },
           {id: 1,view: require("@/assets/成就/JS2.png")  } ]
      },
    });
    return {
      achivements,
      // winHeight
    }
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0rem;
  margin: 0px;
  font-size: 24px;
}
img {
  border-radius: 50%;
  z-index: -99;
}
.el-carousel {
  height: 100%;
.el-carousel__item  {
    height: 100%;
    padding-top: 40.8px;
    // opacity: 0.75;
    margin: 0;
  .el-row  {
    height: 100%;
    #left {
      position: relative;
      left: 27.2px;
      #left-top {
        position: absolute;
        height:100%;
        width: 85%;
        margin: 0 auto;
        width: 34px;
        height: 34px;
        top: -13.6px;
        left:-34px;
      }
      #left-bottom{
        position: absolute;
        bottom: -306px;
        left: -181.56px;
        width: 380.8px;
        height:  380.8px;
        z-index: -99;
        overflow: hidden;
      }
      h1 {
        font-size: 28px;
      }
      // background-color:gray;
      h3 {
        margin: 13.6px 0 27.2px 0;
        font-size: 24px;
      }
      h4 {
        font-size: 20px;
      }
      p {
        margin: 10.2px 0 34px 0;
      }
      h5 {
        margin-top: 10.2px;
        
      }
    }
    #right {
      width: 100%;
      height: 90%;
      margin-top: 2%;
      position: relative;
      #right-top {
        position: absolute;
        width: 81.6px;
        height: 81.6px;
        top: 2.04px;
        right: 42.16px;
      }
      #right-bottom{
        position: absolute;
        bottom: 23.8px;
        right: 85px;
        width: 68px;
        height: 68px;
        overflow: hidden;
      }
      // background-color: pink;
      .el-carousel  {
      // background-color: pink;
        /deep/ ul {
       position: relative;
       top: -13.6px;
      //  left: 400px;
          width: 44.88px;
           li {
             button {
               width: 12.24px;
               height: 12.24px;
               background: none;
               background-color: #bd99ff!important;
               box-shadow: 0 0 0rem #bd99ff;
               border-radius: 50%;
             }
             &::before {
               width:0rem ;
               height: 0rem;
             } 
           }
          }
        }
      img {
        width: 65%;
        height: 300px;
        margin-left: 16%;
        border-radius: 30.6px;
      }
    }
  }
}
// 用 /deep/ 穿透,修改element样式
/deep/ ul {
  overflow-y: auto;
  overflow-x: auto;
  width: 3.2rem;
  display: flex;
  justify-content: space-between;
  // background-color: blue;
  li {
      // width: 1.0588rem;
      // height: 1.0588rem;
    button {
      width: 1rem;
      height: 1rem;
      box-shadow: 0 0 8.16px gray;
      border-radius: 50%;
      background-repeat: no-repeat;
    }
    // &::before {
    //   content: '';
    //   position: absolute;
    //   top: 48%;
    //   width:44.88px ;
    //   height: 4.76px;
    //   background-color:#e8eaf2;
    // } 
    &:nth-child(1){
      button {
        background: url(../../assets/成就/pilao.jpg);
        background-size: 1rem  1rem;
      }
      &::before {
        left: 20%;
      }
    }
    &:nth-child(2){
      button {
        background: url(../../assets/成就/Jian.jpg);
        background-size:  1rem  1rem;
      }
      &::before {
      left: 34%;
      }
    }
    &:nth-child(3){
      button {
        background: url(../../assets/成就/three.jpg);
        background-size:  48.96px  48.96px;
      }
      &::before {
      left: 34%;
      }
    }
    &:nth-child(4){
      button {
        background: url(../../assets/成就/four.jpg);
        background-size:  48.96px  48.96px;
      }
      &::before {
     right: 34%;
      }
    }
    &:nth-child(5){
      button {
        background: url(../../assets/成就/five.jpg);
        background-size:  48.96px  48.96px;
      }
      &::before {
      right:12%;
      }
    }
  }
}
}
</style>