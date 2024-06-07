<template>
  <div class="common-layout">
    <el-container>
      <!--底部： 背景图片 -->
      <img id="left-bgc" src="../../assets/成员/left-bottom.png" alt="" />
      <img id="right-bgc" src="../../assets/成员/right-bottom.png" alt="" />
     
      <!-- 1、组长信息 -->
      <el-header>
        <!-- 便签 -->
        <ul>
          <li></li>
          <li></li>
        </ul>
        <el-row>
          <el-col :span="6"><img src="../../assets/成员/captain.jpg" alt=""></el-col>
          <el-col :span="18">
            <h1>张圣</h1>
            <h2 style="display:inline-block">Maker-IoT团队负责人</h2><br />
              <span>&nbsp;&nbsp;&nbsp;&nbsp;计算机科学与技术学院</span>
              <span>21级软件工程专业</span>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学习成绩优异，专业基础扎实，学分绩点专业前三。获校一等奖学金，万兴杯二等奖等奖项，有校级三好学生，科技创新先进个人，优秀学生干部等荣誉称号。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;掌握C++、JAVA等编程语言。了解Spring、Springboot等框架，具有一定的后端开发经验和算法知识。敢于并乐于不断进步、不断攀登。</p>
          </el-col>
        </el-row>
      </el-header>

      <!-- 2、成员信息 -->
      <el-main>
        <!-- (1)" ...成员..."样式-->
        <div id="member-title">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h3>成员</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <!-- (2)现任成员——主体部分 -->
        <div id="member-content">
          <!--(2.1)左侧成员分类 -->
          <div id="member-left">
            <router-link to="/Member">
              <div class="group">
                后端组
              </div>
            </router-link>
            <router-link to="/Front">
              <div class="group">
                前端组
              </div>
            </router-link>
            <router-link to="/HardWare">
              <div class="group">
                硬件组
              </div>
            </router-link>
            <!-- 左侧图片 -->
            <div id="left-top">
              <img src="../../assets/首页（登录前）/u5.svg" alt="">
            </div>
          </div>
          <!--(2.2)中间大圆路由 -->
          <router-view />
          <!--(2.3)右侧成员分类 -->
          <div id="member-right">
            <router-link to="/OperaTional">
              <div class="group">
                运营策划组
              </div>
            </router-link>
            <router-link to="" style="box-shadow:none;">
              <div class="group">
                <!-- 人工智能端组 -->
              </div>
            </router-link>
            <router-link to="ProtoTyping">
              <div class="group">
                原型设计组
              </div>
            </router-link>
            <!-- 右侧图片 -->
            <img src="../../assets/成员/right-top.jpg" alt="">
          </div>
        </div>
      </el-main>
      
      <!-- 3、往届成员信息 -->
      <el-footer>
        <!-- <1>"...往届成员..." 样式 -->
        <div id="past-title">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h3>往届优秀成员</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        
        <div id="past-text">
          <el-row>
            <el-col :span="6"><div class="grid-content bg-purple">
              <img src="../../assets/qq头像/19王江建.jpg" alt="" class="zheng" @click="showone(1)"
              :class="hide===1? 'active':''">
            </div><h3>{{pasttext.first.name}}</h3>
          </el-col>
          <el-col :span="6"><div class="grid-content bg-purple" @click="showone(2)"
              :class="hide===2? 'active':''">
              <img src="../../assets/qq头像/19梁润勇.jpg" alt="" class="zheng">
            </div><h3>{{pasttext.second.name}}</h3>
          </el-col><el-col :span="6"><div class="grid-content bg-purple" @click="showone(3)"
              :class="hide===3? 'active':''">
              <img src="../../assets/qq头像/19黄伟程.jpg" alt="" class="zheng">
            </div><h3>{{pasttext.third.name}}</h3>
          </el-col><el-col :span="6"><div class="grid-content bg-purple" @click="showone(4)"
              :class="hide===4? 'active':''">
              <img src="../../assets/qq头像/19文叶衡.jpg" alt="" class="zheng">
            </div><h3>{{pasttext.forth.name}}</h3>
          </el-col>
          </el-row>

          <div id="past-text-introduce"
          v-show="hide==1">
          &nbsp;&nbsp;&nbsp;&nbsp;{{pasttext.first.achivement}}
          </div>
          <div id="past-text-introduce"
          v-show="hide==2">
          &nbsp;&nbsp;&nbsp;&nbsp;{{pasttext.second.achivement}}
          </div>
          <div id="past-text-introduce"
          v-show="hide==3">
          &nbsp;&nbsp;&nbsp;&nbsp;{{pasttext.third.achivement}}
          </div>
          <div id="past-text-introduce"
          v-show="hide==4">
          &nbsp;&nbsp;&nbsp;&nbsp;{{pasttext.forth.achivement}}
          </div>
          <div id="past-text-introduce" style="width:9.8rem;padding:0 .1rem;"
          v-show="hide==5">
          &nbsp;&nbsp;&nbsp;&nbsp;{{pasttext.fifth.achivement}}
          </div>
          <div id="past-text-introduce"
          v-show="hide==6">
          &nbsp;&nbsp;&nbsp;&nbsp;{{pasttext.sixth.achivement}}
          </div>
          <div id="past-text-introduce"
          v-show="hide==7">
          &nbsp;&nbsp;&nbsp;&nbsp;{{pasttext.seventh.achivement}}
          </div>
          <div id="past-text-introduce"
          v-show="hide==8">
          &nbsp;&nbsp;&nbsp;&nbsp;{{pasttext.eighth.achivement}}
          </div>


          <div style="width:100%;height:.001rem;border:1px solid #bee7e9;z-index:999"></div>
          
          <el-row id="past-text-bottom">
            <el-col :span="6"><div class="grid-content bg-purple" @click="showone(5)"
              :class="hide===5? 'active':''">
              <img src="../../assets/qq头像/18游磊.jpg" alt="" class="zheng">
              
            </div><h3>&nbsp;{{pasttext.fifth.name}}</h3>
          </el-col>
          <el-col :span="6"><div class="grid-content bg-purple" @click="showone(6)"
              :class="hide===6? 'active':''">
              <img src="../../assets/qq头像/18李明康.jpg" alt="" class="zheng">
            
            </div><h3>{{pasttext.sixth.name}}</h3>
          </el-col><el-col :span="6"><div class="grid-content bg-purple" @click="showone(7)"
              :class="hide===7? 'active':''">
              <img src="../../assets/qq头像/18张慧.jpg" alt="" class="zheng">
            
            </div><h3>&nbsp;{{pasttext.seventh.name}}</h3>
          </el-col><el-col :span="6"><div class="grid-content bg-purple" @click="showone(8)"
              :class="hide===8? 'active':''">
              <img src="../../assets/qq头像/18郑筛凤.jpg" alt="" class="zheng">
             
            </div><h3>{{pasttext.eighth.name}}</h3>
          </el-col>
          </el-row>
        </div>

      </el-footer>

    </el-container>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  data() {
    return {
      // 控制切换按钮后按钮改变样式
      // index: 1,
      // 控制点击按钮后子组件显示，再次点击隐藏
      // isShow: true,
      // 设置禁用
      // isDisabled: false,
      hide: 1,
      // 控制点击按钮后子组件显示，再次点击隐藏
      show: true,
    }
  },
    methods: {
    showone(value) {
      this.hide === value ? this.show = !this.show : this.show = true
      this.hide = value
    },
  },
  
  setup() {
    let pasttext = reactive({
      first: {
        name: '王江建',
        occupation: '19级前端组成员',
        achivement: '王江建,19级前端组成员,在校期间曾在小红书和字节跳动公司实习，现已转正到字节跳动'
      },
      second: {
        name: '梁润勇',
        occupation: '19级后端组成员',
        achivement: '梁润勇,19级后端组成员,在校期间曾获多项国家级、省级奖项、软著、专利等，现已保研到深圳大学'
      },
      third: {
        name: '黄伟程',
        occupation: '19级硬件组成员',
        achivement: '黄伟程,19级后端组成员，在校期间曾获多项国家级、省级奖项、软著、专利等，现已在腾讯工作'
      },
      forth: {
        name: '文叶衡',
        occupation: '19级硬件组成员',
        achivement: '文叶衡,19级硬件组成员,在校期间曾获多项国家级、省级奖项、软著、专利等，现已在汇川技术工作'
      },
      fifth: {
        name: '游  磊',
        occupation: '18级后端组成员',
        achivement: '游磊,18级后端组成员,在校期间曾获多项国家级、省级奖项、软著、专利等，曾在字节跳动实习，现已转正字节跳动'
      },
      sixth: {
        name: '李明康',
        occupation: '18级后端组成员',
        achivement: '李明康,18级后端组成员,在校期间曾获多项国家级、省级奖项、软著、专利等，现已在阿里巴巴工作'
      },
      seventh: {
        name: '张  慧',
        occupation: '18级硬件组成员',
        achivement: '张慧,18级硬件组成员,在校期间曾获多项国家级、省级奖项、软著、专利等，曾在联发科实习，现已转正联发科'
      },
      eighth: {
        name: '郑筛凤',
        occupation: '18级前端组成员',
        achivement: '郑筛凤,18级前端组成员,在校期间曾获多项国家级、省级奖项、软著、专利等，现已保研到深圳大学'
      },
    });

    return {
      pasttext
    }
  }
}
</script>

<style lang="less" scoped>
* {
  font-size: 21px;
    margin: 0rem;
   padding: 0rem;
}
  .el-container {
    // 1、组长信息
    .el-header {
      width: 100%;
      height: 5.50rem;
      margin-bottom: 20px;
      // 两边竖杠
      ul {
        width: 80%;
        height: 1.60rem;
        display: flex;
        margin: 0 auto;
        position: relative;
        li {
          width: 0.35rem;
          height: 1.30rem;
          border-radius: 0.20rem;
          background-color: #ede9fe;
          position: absolute;
          top: 0.75rem;
          &:first-child {
            left: 0.76rem;
          }
          &:last-child {
            right: 0.76rem;
          }
        }
      }
      .el-row {
        width: 80%;
        height: 3.75rem;
        margin: 0 auto;
        box-shadow: 0 0 .07rem rgba(0, 0, 0, 0.349019607843137);
        border-radius: .3rem;
        position: relative;
        .el-col {
          // 左侧头像
          img {
          position: absolute;
          left: 1.25rem;
          top: .72rem;
          width: 1.90rem;
          height: 1.90rem;
          border-radius: 50%;
        }
          // 右侧内容
          h1 ,h2{
            display: inline-block;
            margin: .37rem .35rem .20rem 0;
            font-size: 24px;
          }
          span,p {
            display: inline-block;
            margin: 0 .35rem .23rem 0;
          }
          span {
            font-size: 21px;
          }
          p {
            width: 90%;
            font-size: 19px
          }
        }
      }
    }

    // 2、成员信息
    .el-main {
      width: 100%;
      margin: 0 auto;
      margin-top: .8rem;
      // (1)、" ...成员..."样式
      #member-title {
        width: 100%;
        height: .60rem;
        line-height: .60rem;
        text-align: center;
        display: flex;
        justify-content: center;
        margin-bottom: 1.5rem;
        h3 {
          margin: 0 .10rem 0 .10rem;
        }
        ul {
          width: .50rem;
          display: flex;
          list-style: circle;
          justify-content: space-between;
          li {
            width: .08rem;
            height: .08rem;
            margin-top: .26rem;
            border-radius: 50%;
            background-color: #d0dbff;
          }
        }
      }

      // (2)、现任成员——主体部分
      #member-content {
        margin: 0 auto;
        width: 80%;
        height: 9.00rem;
        display: flex;
        justify-content: space-between;
        margin-top: 1.00rem;
        position: relative;
        // router-link链接
        a {
          width: 20%;
          height: .5rem;
          text-align: center;
          line-height: .5rem;
          box-shadow: 0 0 .1rem rgba(0, 0, 0, 0.349019607843137);
          border-radius: .10rem;
        }
        // (2.1)左侧成员分类
        #member-left {
          // 左侧图片
          #left-top {
            width: 5.65rem;
            height: 3.75rem;
            position: absolute;
            top: 3.10rem;
            left: -3.26rem;
            transform: rotate(-50deg);
            z-index: -99;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          // router-link链接:设置位置
          a {
            position: absolute;
            .group {
              font-size: .35rem;
              font-weight: 500;
            }
            &:nth-of-type(1) {
              left: .12rem;
              top: .89rem;
            }
            &:nth-of-type(2) {
              left: -0.92rem;
              top: 3.26rem;
            }
            &:nth-of-type(3) {
              left: .12rem;
              top: 5.73rem;
            }
          }
        }
        // (2.3)右侧成员分类
        #member-right {
          background-color: pink;
          a {
            .group {
              font-size: .35rem;
              font-weight: 500;
            }
            position: absolute;
            &:nth-of-type(1) {
              right: .12rem;
              top: .89rem;
            }
            &:nth-of-type(2) {
              right: -0.92rem;
              top: 3.26rem;
            }
            &:nth-of-type(3) {
              right: .12rem;
              top: 5.73rem;
            }
          }
          // 右侧图片
          img {
            position: absolute;
            width: 1.7rem;
            height: 2.3rem;
            bottom: 1.20rem;
            right: -0.40rem;
            z-index: -99;
          }
        }
      }
    }

    // 3、往届成员信息
    .el-footer {
      width: 100%;
      height: 9.00rem;
      margin: 0 auto;
      margin-bottom: 1.5rem;
      // <1>"...往届成员..." 样式
      #past-title {
        width: 100%;
        height: .60rem;
        line-height: .60rem;
        margin-bottom: 1.2rem;
        text-align: center;
        display: flex;
        justify-content: center;
        h3 {
          margin: 0 .10rem 0 .10rem;
        }
        ul {
          width: .50rem;
          display: flex;
          list-style: circle;
          justify-content: space-between;
          li {
            width: .08rem;
            height: .08rem;
            margin-top: .26rem;
            border-radius: 50%;
            background-color: #d0dbff;
          }
        }
      }

    }

    #past-text
    ,#past-text-bottom {
      width: 100%;
      height: 9rem;
      // background-color: pink;
      .el-row {
        width: 90%;
        height: 3.5rem;
        // text-align: center;
        .el-col {
          // perspective: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .grid-content {
          width: 1.5rem;
          height: 1.5rem;
          margin: 0 auto;
          .zheng,
          .fan {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
            .zheng{
              box-shadow: 0 0 .08rem rgba(0, 0, 0, 0.349019607843137);
              z-index: 1;
            }
        }
        h3 {
          width: 1.2rem;
          height: .51rem;
          // background-color: pink;
          height:.51rem;
          margin-top: .21rem;
        }
        }
      
      }
      #past-text-introduce {
        position: relative;
        top: -.5rem;
        width: 9.6rem;
        height: 1.2rem;
        border-radius: .2rem;
        line-height: .6rem;
        // text-align: center;
        padding:0 .2rem;
        font-family: '仿宋';
        // background-color: pink;
        margin: 0 auto;
        box-shadow: 0 0 .08rem #A0EEE1;
      }
      #past-text-bottom {
        position: relative;
        left: 2rem;
        top: .8rem;
        // background-color: pink;
      }
    }
    // 底部：背景图片
   #left-bgc {
      width: 2.2rem;
      height: 2.2rem;
      position: absolute;
      bottom:-12rem;
      left: -.3rem;
    }
    #right-bgc {
      width: 5.5rem;
      height: 5.5rem;
      position: absolute;
      bottom:-17rem;
      right: -0rem;
      border-radius: 1rem;
      z-index: -1;
    }
}
</style>
