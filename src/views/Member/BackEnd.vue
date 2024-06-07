
<template>
  <!-- 1、左上角标题 -->
  <div id="member-group" >
    后端组——现任成员
   </div>

   <!-- 2、中间部分 -->
<div id="member-middle">
    <!-- (1)成员介绍 -->
  <div id="circle-text"
    v-show="yin==1">
    <!-- （1.1）左侧图片+文字 -->
    <div id="circle-tu-wen">
      <img src="../../assets/成员/captain.jpg" alt="">
      <h3>{{pasttext.first.name}}</h3>
    </div>
    <!-- (1.2)右侧介绍 -->
    <div id="member-text-middle">
      <h4> 职位：</h4>
        {{pasttext.first.occupation}}<br/>
      <div style="margin-bottom:10px;"></div>
      <h4>个性签名：</h4>
        {{pasttext.first.signature}}
    </div>
  </div>
    <!-- (2)成员介绍 -->
  <div id="circle-text"
    v-show="yin==2">
    <!-- （2.1）左侧图片+文字 -->
    <div id="circle-tu-wen">
      <img src="../../assets/qq头像/陈顺宏.jpg" alt="">
      <h3>{{pasttext.second.name}}</h3>
    </div>
    <!-- (2.2)右侧介绍 -->
    <div id="member-text-middle">
      <h4> 职位：</h4>
        {{pasttext.second.occupation}}<br/>
      <div style="margin-bottom:10px;"></div>
      <h4>个性签名：</h4>
        {{pasttext.second.signature}}
    </div>
  </div>
      <!-- (3)成员介绍 -->
      <div id="circle-text"
    v-show="yin==3" style=" top: 2rem;">
    <!-- （3.1）左侧图片+文字 -->
    <div id="circle-tu-wen">
      <img src="../../assets/qq头像/李东帆.jpg" alt="">
      <h3>{{pasttext.third.name}}</h3>
    </div>
    <!-- (3.2)右侧介绍 -->
    <div id="member-text-middle">
      <h4> 职位：</h4>
        {{pasttext.third.occupation}}<br/>
      <div style="margin-bottom:10px;"></div>
      <h4>个性签名：</h4>
      <div style="font-size:18px;">&nbsp;&nbsp;{{pasttext.third.signature}}</div>
    </div>
  </div>
  <!-- (4)成员介绍 -->
  <div id="circle-text"
    v-show="yin==4">
    <!-- （4.1）左侧图片+文字 -->
    <div id="circle-tu-wen">
      <img src="../../assets/qq头像/宁佳.jpg" alt="">
      <h3>{{pasttext.forth.name}}</h3>
    </div>
    <!-- (4.2)右侧介绍 -->
    <div id="member-text-middle">
      <h4> 职位：</h4>
        {{pasttext.forth.occupation}}<br/>
      <div style="margin-bottom:10px;"></div>
      <h4>个性签名：</h4>
     {{pasttext.forth.signature}}
    </div>
  </div>

  <!-- (5)按钮模块 -->
<ul class="circle">
  <li>
    <button @click="showone(1)"
    :class="yin===1? 'active':''" >
      <img src="../../assets/成员/captain.jpg" alt="">
    </button>
  </li>
  <li>
    <button @click="showone(2)"
    :class="yin===2? 'active':''" >
      <img src="../../assets/qq头像/陈顺宏.jpg" alt="">
    </button>
  </li>
  <li>
    <button @click="showone(3)"
    :class="yin===3? 'active':''" >
      <img src="../../assets/qq头像/李东帆.jpg" alt="">
    </button>
  </li>
  <li>
    <button @click="showone(4)"
    :class="yin===4? 'active':''" >
      <img src="../../assets/qq头像/宁佳.jpg" alt="">
    </button>
  </li>
</ul>

</div>

</template>

<script>
import { reactive, } from 'vue'
export default {
    data () {
    return {
      // 控制切换按钮后按钮改变样式
      yin: 1,
      // 控制点击按钮后子组件显示，再次点击隐藏
      shi: true,
      // 设置禁用
      // isDisabled1: false,
    }
  },
  methods: {
    showone (value) {
      this.yin === value ? this.shi = !this.shi : this.shi = true
      this.yin = value
    },
  },
  setup() {

    let pasttext = reactive({

first: {
  name: '张圣',
  occupation: '实验室负责人，后端开发',
  signature:'凡是过往，皆为序章'
},
second: {
  name: '陈顺宏',
  occupation: '后端组长,后端开发',
  signature:'务实做事，勇于挑战'
},
third: {
  name: '李东帆',
  occupation: '后端开发',
  signature:'任何事都没有轻松的捷径可走，付出时间和努力才能成就自己，所以千万不要相信旁人的花言巧语，更不能欺骗自己'
},
forth: {
  name: '宁佳',
  occupation: '后端开发',
  signature:'不要只低头拉车，我们也要抬头看路'
},
});

    return {
        pasttext
      }
  }
}
</script>

<style lang="less" scoped>
  ul,li {
    margin: 0;
    padding: 0;
  }
    // 1、左上角标题
#member-group {
  position: absolute;
  left: -2.8rem;
  top: -1.1rem;
  width: 4.65rem;
  height: .55rem;
  line-height: .55rem;
  text-align: center;
  box-shadow: 0 0 .08rem rgba(0, 0, 0, 0.349019607843137);
  border-radius: .10rem;
  font-size:20px
}
    // 2、中间部分
#member-middle {
  width: 6.00rem;
  height:6.00rem;
  padding:.10rem;
  box-sizing: border-box;
  border-radius: 50%;
  position: relative;
  // (1-4)成员介绍 
  #circle-text {
      width: 4.5rem;
      height: 3.00rem;
      position: absolute;
      left:1rem;
      top: 2.4rem;
      z-index: 999;
      display: flex;
      justify-content: space-between;
      // （1.1）左侧图片+文字
      #circle-tu-wen {
        margin-top: -3px;
        display: flex;
        align-items: center;
        flex-direction: column;
        img {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        padding-top: -3px;
        margin: 0px 0 15px 0;
        box-shadow: 0 0 .08rem #f0effc;
        margin-bottom: 20px;
        }
        h3 {
          width:70px;
          height:28px;
          line-height: 28px;
          text-align: center;
          box-shadow: 0 0 .01rem rgba(0, 0, 0, 0.349019607843137);
        }
      }
      // (1.2)右侧介绍
      #member-text-middle {
        width: 3.0rem;
        height: 2.60rem;
        font-size: 20px;
        h4 {
          margin-bottom: 4px;
          font-size: 18px;
        }
      }
  }
  // (5)按钮模块 
  ul {
  width: 6.3rem;
  height: 6.3rem;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  //旋转点自身高度的一半，父亲宽度的一半+自身宽度的一半
  transform-origin: 3.15rem 3.15rem;
  box-shadow: 0 0 .28rem #f0effcfe;
  animation: tf 34s linear infinite;
  li {
    width: 1.2rem;
    height: 1.2rem;
    line-height: 1.00rem;
    text-align: center;
    z-index: 999;
    border-radius: 50%;
    box-shadow: 0 0 .08rem rgba(0, 0, 0, 0.349019607843137);
    position: absolute;
    left: 50%;
    margin-left: -0.50rem;
    margin-top:-0.50rem;
    //旋转点自身高度的一半，父亲宽度的一半+自身宽度的一半
    transform-origin: .6rem 3.75rem;
      button {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        border: 0px;
        //反向旋转
        animation: tf reverse 34s linear infinite;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      // 对图片初始位置设置
      &:nth-of-type(1) {
        transform: rotate(45deg);
        img {
          transform: rotate(-45deg);
        }
      }
      &:nth-of-type(2) {
        transform: rotate(135deg);
        img {
          transform: rotate(-135deg);
        }
      }
      &:nth-of-type(3){
        transform: rotate(225deg);
        img {
          transform: rotate(-225deg);
        }
      }
      &:nth-of-type(4){
        transform: rotate(315deg);
        img {
          transform: rotate(-315deg);
        }
      }   
    }
  @keyframes tf {
    0%{
      transform:rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  }
}
</style>