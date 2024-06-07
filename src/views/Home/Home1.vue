<template>
    <!-- 主体部分 -->
     <div id="base">
  
  <!-- 圆形左上角 -->
  <div id="u2">
    <img id="u2_img"  src="../../assets/首页（登录前）/u2.svg">
  </div>
  <!-- 圆形左下角-->
  <div id="u4">
    <img id="u4_img" src="../../assets/首页（登录前）/u4.png">
  </div>
  <!-- 方块左下角 -->
  <!-- <div id="u6" >
    <img id="u6_img"  src="../../assets/首页（登录前）/u6.svg">
  </div> -->
  <!--圆形右下角 -->
  <div id="u7">
    <img id="u7_img" src="../../assets/首页（登录前）/u7.svg">
  </div>
   <!-- 方块右下角-->
  <div id="u5" >
    <img id="u5_img" src="../../assets/首页（登录前）/u5.svg">
  </div>
  
  <!-- Maker-IoT简介 -->
  <el-row  id="brief">
    <!-- 左边 -->
    <el-col :span="12">
          <!-- Maker-IoT图片 -->
  <img id="brief_picture" class="img " src="../../assets/首页（登录前）/u53.png">
  </el-col>
  <!-- 右边 -->
    <el-col :span="12">
          <!-- Maker-IoT图标 -->
        <div id="brief_icon" >
      Maker-IoT
  </div>
  <!-- Maker-IoT简介内容 -->
  <div id="brief_text" >
      <div>
        <p><span style="font-size:.3166rem">&nbsp;&nbsp;&nbsp; {{Maker_IoT.text1}}</span></p><p><span><br></span></p><p><span style="font-size:.3166rem">&nbsp;&nbsp;&nbsp;{{Maker_IoT.text2}}</span></p>
      </div>
    </div>
  </el-col>
  </el-row>
  
  <!-- Maker-IoT团队宗旨 -->
  <div id="tenet">
        <!-- 头部 -->
    <el-header>
      <div id="tenet_title">团队宗旨</div>
    </el-header>
    <!-- 文字 -->
      <el-row id="tenet_text">
         <el-col :span="12" id="tenet_left">
             <!-- 团队宗旨—— 左侧图片 -->
             <img id="tenet_left_picture" src="../../assets/首页（登录前）/u19.png">
            <!-- 左侧标题 -->  
          <div id="tenet_left_title" >
               {{Team_purpose.title1}}
            </div>
            <br/> 
            <!-- 左侧内容 -->
            <div id="tenet_left_text">
             &nbsp;&nbsp;{{Team_purpose.text1}}
            </div>
         
    </el-col>
    <el-col :span="12" id="tenet_right">
       <!-- 团队宗旨—— 右侧图片 -->
       <img id="tenet_right_picture" class="img " src="../../assets/首页（登录前）/u19.png">
     <!-- 右侧标题 -->
     <div id="tenet_right_title">
               {{Team_purpose.title2}}
            </div>
            <br/>
            <!-- 右侧内容-->
            <div id="tenet_right_text">     
               &nbsp;&nbsp;{{Team_purpose.text2}}
            </div>
         
    </el-col>
    </el-row>
      <!--  团队宗旨——文字背景 -->
      <div id="tenet_back">
           Maker-IoT
      </div>
    </div>
  
   <!-- Maker-IoT研究方向 -->
  <div id="research">
    <!-- <div id="left-top" class="linear"></div> -->
    <div id="left-middle" class="linear"></div>
    <div id="right-middle" class="linear"></div>
    <el-row>
      <!-- 左边 -->
      <el-col :span="8">
        <div class="grid-content ep-bg-purple">
          <ul>
            <li>
              <div class="top">
                <h4 id="top-text">前端</h4>
                <li id="top-photo">
                  <img src="../../assets/首页（登录前）/qianduan.jpg" alt="">
                </li>
              </div>
              <div class="bottom">{{ Research_directions.text1 }}</div>
            </li>
            <li>
              <div class="top">
                <h4 id="top-text">后端</h4>
                <li id="top-photo">
                  <img src="../../assets/首页（登录前）/houduan.jpg" alt="">
                </li>
              </div>
              <div class="bottom">{{ Research_directions.text2 }}</div>
            </li>
            <li>
              <div class="top">
                <h4 id="top-text">人工智能</h4>
                <li id="top-photo">
                  <img src="../../assets/首页（登录前）/zhineng.jpg" alt="">
                </li>
              </div>
              <div class="bottom">{{ Research_directions.text3 }}</div>
            </li>
          </ul>
        </div>
      </el-col>
      <!-- 中间 -->
      <el-col :span="8">
        <div  class="grid-content ep-bg-purple-light">
          <div id="picture"/>
         <div id="serach-center">
          <!-- <div id="inner-round"></div> -->
          <h2 class="center-top">研究方向</h2>
          <div class="center-bottom">{{Research_directions.text}}</div>
         </div>
        </div>
      </el-col>
      <!-- 右边 -->
      <el-col :span="8">
        <div class="grid-content ep-bg-purple">
          <ul>
            <li>
              <div class="top">    
            <div class="right-right">
                  <li id="top-photo">
                  <img src="../../assets/首页（登录前）/yingjian.jpg" alt="">
                </li>
                <h4 id="top-text">硬件</h4>
              </div>
  </div>
  
              <div class="bottom" style="text-align: left;">{{ Research_directions.text4 }}</div>
            </li>
            <li>
              <div class="top">
               <div class="right-right">
                <li id="top-photo">
                  <img src="../../assets/首页（登录前）/yunying.jpg" alt="">
                </li>
                <h4 id="top-text">运营策划</h4>
              </div>
            </div>
              <div class="bottom" style="text-align: left;">{{ Research_directions.text5 }}</div>
            </li>
            <li>
              <div class="top">
                <div class="right-right">
                <li id="top-photo">
                  <img src="../../assets/首页（登录前）/yuanxing.jpg" alt="">
                </li>
                <h4 id="top-text">原型设计</h4>
              </div>
              </div>
              <div class="bottom" style="text-align: left;">{{ Research_directions.text6 }}</div>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
  
  <!-- Maker-IoT工作环境 -->
  <div id="work_environment" >
    <!-- 文字 -->
  <div id="work_environment_text" >
     <span>{{Working_environment.title}}</span>
     <ul id="diamonds">
      <li></li>
      <li></li>
      <li></li>
     </ul>
  </div>
  <div id="work_environment_paragraph" >
    <span>{{Working_environment.text}}</span>
  </div>
  
  <!-- _图片_ -->
  <ul id="work_environment_picture">
    <li  id="en_4" class="environment">
      <img id="en_img" src="../../assets/首页（登录前）/u35.svg">
    </li>
    <li id="en_2" class="environment">
     <div  id="en_img">
      <img src="../../assets/首页（登录前）/en-2.jpg" style="width:3.834rem;height:5.1334rem">
     </div>
    </li>
    <li id="en_1" class="environment">
    <img id="en_img" src="../../assets/首页（登录前）/u32.svg">
    </li>
    <li  id="en_3" class="environment">
     <div id="en_img">
      <img  src="../../assets/首页（登录前）/en-3.jpg" style="width:3.5rem;height:3.5rem">
     </div>
    </li>
  </ul>
  
  </div>
  
  </div>
  </template>
  
  <script>
  import { reactive } from "vue";
  
  export default {
    name: "HomeMain",
    setup() {
          //Maker-IoT
          let Maker_IoT = reactive({
              name: "Maker-IoT",
              text1: "成立于 2016 年 4 月，隶属于计算机科学与工程学院微科创新创业基地，团队以物联网应用开发为主，参加各类学科竞赛为辅，积极学习各专业相关知识并加以运用。",
              text2: " Maker-IoT是湖南科技大学“十佳创新团队”，主要面向智能家居、智能硬件控制、机器学习，Web/App开发等领域，分为客户端、服务器、嵌入式和运营四个小组，既独立开发又紧密配合，打造极致物联网体验！"
          });
  
          //团队宗旨
          let Team_purpose = reactive({
              title1: "学以致用 创新创意",
              text1: "Maker-Iot 团队秉持创新创意的理念，不断学习进步，努力发展，积极参加各类创新创意竞赛，培养前瞻的创新意识。",
              title2: "以老带新 技术攻关",
              text2: "实验室以充分利用物联网技术将身边的所有东西智能化为目标，以物联网研发、运维及推广为抓手，以团队建设为组带，坚持以老带新、技术攻关的工作方式，努力建设一支技术能力过硬、创新思维活跃的学生创新创业团队。"
          });
          //研究方向
          let Research_directions = reactive({
              name: "研究方向",
              text: "Maker-IoT是湖南科技大学“十佳创新团队”，主要面向Web/App开发、智能硬件控制、人工智能、商业策划等领域，分为多个开发小组，既独立开发又紧密配合，打造极致物联网体验！",
              name1: "前端",
              text1: "负责网站，小程序，app等前台开发，应用HTML，CSS，JavaScript，Vue等。",
              name2: "后端",
              text2: "后端负责服务器运行维护，接口编写，应用JAVA，Go等。",
              name3: "人工智能",
              text3: "负责工作室项目之中人工智能、机器学习等方面的应用与研究",
              name4: "硬件",
              text4: "负责工作室智能家居的维护，研究嵌入式开发等，应用51单片机，树莓派,stm32等",
              name5: "运营策划",
              text5: "负责与技术组配合进行项目的商业转化，挖掘出技术项目潜在的商业价值。",
              name6: "原型设计",
              text6: "负责3D建模或页面(网站，小程序，app)的原型设计。"
          });
          
          //工作环境
          let Working_environment = reactive({
              title: "工作环境",
              text: "我们有宽敞工位、丰富图书资料、硬件资源、空调、3D打印机、会议室。提供干净整洁、创新发展、独立学习的工作氛围。"
          });
      return {
              Maker_IoT,
              Team_purpose,
              Research_directions,
              Working_environment,
          };
      }
  }
  </script>
  
  <style scoped lang="less">
  /* 主体 */
  #base {
    border-width: 0rem;
    position: relative;
    top: 0rem;
    left: 0rem;
    width: 100%;
    height: 41.6666rem;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 0rem;
    box-shadow: none;
    display: flex;
    align-items: center;
    flex-direction: column;
  
    /* 圆形左上角 */
  #u2 {
    position: absolute;
    // z-index: -99;
    left:-1.4rem;
    top: -0.0584rem;
    width: 4.6666rem;
    height: 4.6666rem;
    transform: rotate(180deg);
    overflow: hidden;
    img {
      width: 5.25rem;
    height: 5.25rem;
    }
  }
  /* 圆形左下角- */
  #u4 {
    position: absolute;
    left: 0rem;
    bottom: -1.4166rem;
    width: 4.2116rem;
    height: 5.25rem;
    overflow: hidden;
    // transform: rotate(180deg);
    /* background: pink; */
    img {
      width: 4.2116rem;
      height: 5.1334rem;
    }
  }
  /* 方块左下角 */
  #u6 {
    position: absolute;
    left: -2.0534rem;
    top: 15.925rem;
    width: 5.7516rem;
    height: 6.965rem;
    display: flex;
    -webkit-transform: rotate(332deg);
    -moz-transform: rotate(332deg);
    -ms-transform: rotate(332deg);
    transform: rotate(332deg);
  }
  /* 圆形右下角 */
  #u7 {
    position: absolute;
   right:0rem;
    top: 2.0184rem;
    width: 4.6666rem;
    height: 5.32rem;
    overflow: hidden;
    /* transform: rotate(30deg); */
    img {
      width: 5.32rem;
    height:5.32rem;
    }
  }
  /* 方块右下角 */
  #u5 {
    position: absolute;
    right: 1.1666rem;
    bottom: 8.3334rem;
    width: 5.25rem;
    height: 6.3334rem;
    -webkit-transform: rotate(15deg);
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    transform: rotate(15deg);
    overflow: hidden;
  }
  #u5_img {
    width: 5.25rem;
    height: 6.3334rem;
  }
  
  
  /* Maker-IoT简介 */
   #brief {
    margin-top: 1.75rem;
    display: flex;
    align-items: center;
    flex-direction:row;
    z-index: 999;
    /* Maker-IoT图片 */
   #brief_picture {
    border-width: 0rem;
    margin-top: .45rem;
    width: 4.6666rem;
    height: 3.6984rem;
  }
  
  /* Maker-IoT图标 */
  #brief_icon {
    // position: absolute;
    // left: 13.79rem;
    // top: .35rem;
    width: 2.3334rem;
    height: .63rem;
    // font-family: '华康手札体W5P Bold', '华康手札体W5P Regular', '华康手札体W5P', sans-serif;
    font-weight: 700;
    margin: auto;
    font-style: normal;
    font-size: .4084rem;
    color: #02A7F0;
  }
  
  /* Maker-IoT简介内容 */
  #brief_text {
    // position: absolute;
    // left: 11.41rem;
    // top: 1.05rem;
    width: 6.2416rem;
    height: 3.5rem;
    display: flex;
    // font-family: '华康手札体W5P', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: .4666rem;
    color: #000000;
  }
   }
  
  // 团队宗旨
   #tenet {
    // position: relative;
    // top:3.4416rem;
    width: 100%;
    height:5.8334rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background: inherit;
    background-color: rgba(236, 247, 255, 0.498039215686275);
  
     // 团队宗旨——标题
     #tenet_title {
        // position: absolute;
        // left: 10.0566rem;
        // top: .7116rem;
        margin: auto;
        margin-top: .4784rem;
        width: 2.2866rem;
        height: .945rem;
        font-size: .56rem;
        // font-family: '华康手札体W5P Bold', '华康手札体W5P Regular', '华康手札体W5P', sans-serif;
        color: #000000;
      }
    // 团队宗旨——文字描述
    #tenet_text {
      // background: blue;
        // position: relative;
        width: 100%;
        // height: 100%;
        font-weight: 700;
        font-style: normal;
        text-align: center;
        display: flex;
        justify-items: center;
      // 团队宗旨—— 左侧
      #tenet_left {
        // display: block;
        // position: relative;
        // left: 0rem;
        // top: 0rem;
        // width: 100%;
        // height: 100%;
        // background: pink;
        // font-family: '仿宋','华康手札体W5P Bold', '华康手札体W5P Regular', '华康手札体W5P', sans-serif;
        // font-weight: 700;
        // font-style: normal;
        // text-align: center;
        // margin:auto;
      // 团队宗旨—— 左侧图片
      #tenet_left_picture {
        // position: absolute;
        // left: 5.4134rem;
        // top: 2.4266rem;
        display: inline-block;
        width: .4666rem;
        height: .4666rem;
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
      }
  
        // 左侧标题
        #tenet_left_title {
        // position: absolute;
        // left: 5.9034rem;
        // top: 2.4266rem;
        display: inline-block;
        width: 3.745rem;
        height: .49rem;
        margin:auto;
        font-size: .4316rem;
        color: #02A7F0;
        // background: inherit;
        // background-color: rgba(255, 255, 255, 0);
      }
      // 左侧内容
      #tenet_left_text {
        // position: absolute;
        // left: 4.6666rem;
        // top: .3734rem;
        width: 6.4166rem;
        height: 2.3334rem;
        margin-top: .35rem;
  
        display: inline-block;
        text-align: left;
        word-break: break-all;
  
        // background: inherit;
        // background-color: rgba(255, 255, 255, 0);
        // font-family: '华康手札体W5P', sans-serif;
        font-weight: 400;
        // font-style: normal;
        font-size: .35rem;
        color: #000000;
      }
      }
  
      // 团队宗旨——右侧
      #tenet_right {
        // background: pink;
        // display: inline-block;
        // position: absolute;
        // right: 0rem;
        // top: 0rem;
        width: 100%;
        height: 100%;
        // font-family: '宋体';
        // background: inherit;
        // background-color: rgba(255, 255, 255, 0);
  
        // font-style: normal;
        // text-align: center;
        // 右侧标题
        #tenet_right_title {
        // position: absolute;
        // right: 5.4134rem;
        // top: 2.4266rem;
        width: 3.745rem;
        height: .49rem;
        font-size: .4316rem;
        margin: auto;
        display: inline-block;
        //font-family: '华康手札体W5P Bold', '华康手札体W5P Regular', '华康手札体W5P', sans-serif;
        font-weight: 700;
        color: #02A7F0;
      }
      // 右侧内容
      #tenet_right_text {
        // position: absolute;
        // right: 4.6666rem;
        // top: .3734rem;
        width: 6.4166rem;
        height: 3.5rem;
        margin-top: .2916rem;
  
        display: inline-block;
        text-align: left;
        word-break: break-all;
  
        font-weight: 400;
        font-size: .35rem;
        color: #000000;
      }
      // 团队宗旨——右侧图片
      #tenet_right_picture {
        // position: absolute;
        // right:9.1466rem;
        // top: 2.4266rem;
        width: .4666rem;
        height: .4666rem;
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
      }
      }
    }
      // 团队宗旨——文字背景
      #tenet_back {
    position: absolute;
    text-align: center;
    // bottom: 0;
    top: 7.5834rem;
    // z-index: 99;
    // align-self: center;
    // box-sizing: border-box;
    width:100%;
    // height: 3.2666rem;
    // margin: auto;
    // margin-top: .9916rem;
    // background: inherit;
    // background-color: rgba(255, 255, 255, 0);
    opacity: 0.05;
    font-family: 'Segoe Script Negreta', 'Segoe Script Normal', 'Segoe Script', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 3.5rem;
    letter-spacing: .2334rem;
    color: #02A7F0;
    // text-align: center;
    // word-wrap: break-word;
    // text-transform: none;
    }
  }
  
  
  // 研究方向 
   #research {
    //  background: pink; 
    // position: relative;
    // left: 0rem; 
    // top:5.0866rem;
    width: 23.1rem;
    height: 11.1416rem;
    font-weight: 400;
    font-style: normal;
    color: rgba(0, 0, 0, 0.996078431372549);
    .linear {
    position: relative;
    width: 1.96rem;
    height: .035rem;
    background-color: #f2f2f2;
    }
    // #left-top {
    //   width: 350rem;
    //   height: 350rem;
    //   left: 669.6666rem;
    //   top: 99.1666rem;
    //   background: radial-gradient(circle at 0 233.3334rem, transparent 175rem, #f2f2f2 176.1666rem, transparent 177.3334rem );
    //   // background-color: #f2f2f2;
    // }
  #left-middle {
    top: 5.2734rem;
    left: 6.6666rem;
  }
  #right-middle {
    top: 5.2734rem;
    left: 14.4rem;
  }
    .grid-content {
      height: 10.36rem;
      width: 5.775rem;
      margin-left:.9334rem;
      text-align: center;
      position: relative;
      #picture {
        height: 2.9284rem;
        width: 2.9284rem;
        border-radius: 50%;
        position: absolute;
        left: 2.5084rem;
        top: 1.05rem;
        // background:#e5e6fe;
        box-shadow:0 0 1rem .2rem #f2f1fe;
        background: linear-gradient(to bottom, #e5e6fe, #f2f1fe); 
        // filter : brightness(0.6) saturate(1)
        //          contrast(1.2) blur(.1166rem);
      }
      // 中间部分
      #serach-center {
        width: 5.775rem;
        height: 5.775rem;
        border-radius: 50%;
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        text-align: center;
        box-shadow: 0 .0116rem .35rem 0 rgba(0, 0, 0, 0.07);
        // border: 1.1666rem solid gray;
        position: relative;
        // background-color: green;
        #inner-round {
          position: absolute;
          left: 1.9484rem;
          top:.1516rem;
          width: 3.08rem;
          height:2.3216rem;
          border-radius: 50%;
          background: linear-gradient(to bottom, #e4e7fe, #f6f3ff);          
        }
        .center-top {
          width: 100%;
          position: absolute;
          top: 25%;
          font-size: .4084rem;
        }
        .center-bottom {
          width: 80%;
          position: absolute;
          top: 40%;
          left: 10%;
          font-size: .3166rem;
          // background-color: red;
        }
      }
      // 两边部分
      ul {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        li {
          height: 2.9166rem;
          width: 100%;
          position: relative;
          .top{
            height: 30%;
            width: 90%;
            line-height:300%;//设置小盒子文字居中
            border-radius: .1166rem;
            //定位水平居中
            // position: absolute;
            left: 50%;
            margin-left: -40%;//宽度的一半
            margin: auto;
  
            display: flex;
            justify-content: flex-end;
            background: linear-gradient(to right, #f0e6fe, #e7edfe);          
            // border: 1.1666rem solid gray;
            
            #top-text {
              width: 27%;
              height: 100%; 
              text-align: end;
              // background-color: red;
            }
            .right-right {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: flex-start;
              #top-text  {
                text-align: start;
              }
            }
            #top-photo {
              width: 20%;
              height: 100%;
              img {
                margin-top: .21rem;
                width: 50%;
                height: 50%;
              }
              // background-color: pink;
            }
          }
          .bottom {
            height:44%;
            width: 100%;
            // position: absolute;
            // top: 31%;
            font-size: .3166rem;
            // padding-left: 58.3334rem;
            // padding-top: 40.8334rem;
            // padding-right: 35rem;
            padding: .1666rem .6066rem 0 .5834rem;
            // background-color: pink;
            background:linear-gradient(to bottom, #eff1ff,#fdfdff);
            box-shadow: 0 .0116rem .1166rem 0 rgba(0, 0, 0, 0.2);
            text-align: right;
          }
        }
      }
    }
   }
  
  // 工作环境
   #work_environment {
    position: relative;
    // left: 0rem;
    // top: 7.2334rem;
    width: 100%;
    height: 509.598px;
    top: 1.3334rem;
  
   // 文字标题
    #work_environment_text {
    position: absolute;
    left:4.5rem;
    top: 9.9166rem;
    width: 3.5rem;
    height: .7934rem;
    line-height: .7934rem;
    display: flex;
    // font-family: '华康手札体W5P Bold', '华康手札体W5P Regular', '华康手札体W5P', sans-serif;
    font-weight: 700;
    // font-style: normal;
    font-size: .4084rem;
    color: #000000;
    // 图标
  #diamonds {
    width: 1.3416rem;
    height: .7934rem;
    display: flex;
    margin-left: .35rem;
    margin-top: .28rem;
    justify-content: space-between;
    li {
    width: .2334rem;
    height: .2334rem;
    background: inherit;
    border: none;
    border-radius: .0234rem;
   }
  }
  #diamonds li:first-child {
    background-color: rgba(126, 114, 255, 0.996078431372549);
  }
  #diamonds li:nth-child(2) {
    background-color: rgba(2, 167, 240, 1);
  }
  #diamonds li:last-child{
    background-color: rgba(227, 114, 255, 0.996078431372549);
  }
  }
  // 段落
  #work_environment_paragraph {
    position: absolute;
    left: 4.5rem;
    top: 10.7334rem;
    width: 6.825rem;
    height: 1.2834rem;
    // font-family:  '仿宋',sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: .3266rem;
    color: #000000;
    line-height: .3734rem;
  }
  // 图片
  #work_environment_picture{
    position: relative;
    width: 100%;
    height: 10.6166rem;
    .environment {
      position: absolute;
      background: inherit;
    background-color: rgba(49, 49, 49, 1);
    border: none;
    border-radius: .2334rem;
    -moz-box-shadow: .0584rem .0584rem .1166rem rgba(0, 0, 0, 0.349019607843137);
    -webkit-box-shadow: .0584rem .0584rem .1166rem rgba(0, 0, 0, 0.349019607843137);
    box-shadow: .0584rem .0584rem .1166rem rgba(0, 0, 0, 0.349019607843137);
    overflow: hidden;
  }
  #en_1{
    left: 13.25rem;
    top: 5.6rem;
    width: 5.8334rem;
    height: 3.9666rem;
  }
  #en_2{
    left:13.25rem;
    top: 0rem;
    width: 3.7334rem;
    height: 5.1334rem;
  }
  #en_3 {
  left: 17.4166rem;
    top: 1.6216rem;
    width: 3.5rem;
    height: 3.5rem;
  }
  #en_4 {
    left: 4.2834rem;
    top: 0rem;
    width: 8.4rem;
    height:9.3334rem;
    
  }
  #en_img {
    transition: 0.8s;
  }
  #en_img:hover {
    transform: scale(1.1);
  }
  }
  
   }
  }
  
  </style>