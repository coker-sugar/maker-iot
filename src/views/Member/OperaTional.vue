<template>
  <div id="member-group" >
    策划运营组——现任成员
   </div>
   <div id="member-middle">

<div id="circle-text"
v-show="yin==1">
<div id="circle-tu-wen">
<img src="../../assets/qq头像/闫梦瑶.jpg" alt="">
<h3>{{pasttext.first.name}}</h3>
</div>
<div id="member-introduce">
<div id="member-text-middle">
<h4> 职位：</h4>
{{pasttext.first.occupation}}<br/>
<div style="margin-bottom:10px;"></div>
<h4>个性签名：</h4>
{{pasttext.first.signature}}
</div>
</div>
</div>

<div id="circle-text"
v-show="yin==2">
<div id="circle-tu-wen">
<img src="../../assets/qq头像/吴彤.jpg" alt="">
<h3>{{pasttext.second.name}}</h3>
</div>
<div id="member-introduce">
<div id="member-text-middle">
<h4> 职位：</h4>
{{pasttext.second.occupation}}<br/>
<div style="margin-bottom:10px;"></div>
<h4>个性签名：</h4>
{{pasttext.second.signature}}
</div>
</div>
</div>

<div id="circle-text"
v-show="yin==3">
<div id="circle-tu-wen">
<img src="../../assets/qq头像/张悦.jpg" alt="">
<h3>{{pasttext.third.name}}</h3>
</div>
<div id="member-introduce">
<div id="member-text-middle">
<h4> 职位：</h4>
{{pasttext.third.occupation}}<br/>
<div style="margin-bottom:10px;"></div>
<h4>个性签名：</h4>
{{pasttext.third.signature}}
</div>
</div>
</div>

<div id="circle-text"
v-show="yin==4">
<div id="circle-tu-wen">
<img src="../../assets/qq头像/宁芯.jpg" alt="">
<h3>{{pasttext.forth.name}}</h3>
</div>
<div id="member-introduce">
<div id="member-text-middle">
<h4> 职位：</h4>
{{pasttext.forth.occupation}}<br/>
<div style="margin-bottom:10px;"></div>
<h4>个性签名：</h4>
{{pasttext.forth.signature}}
</div>
</div>
</div>


<div id="circle-text"
v-show="yin==5">
<div id="circle-tu-wen">
<img src="../../assets/qq头像/袁莹.jpg" alt="">
<h3>{{pasttext.fifth.name}}</h3>
</div>
<div id="member-introduce">
<div id="member-text-middle">
<h4> 职位：</h4>
{{pasttext.fifth.occupation}}<br/>
<div style="margin-bottom:10px;"></div>
<h4>个性签名：</h4>
{{pasttext.fifth.signature}}
</div>
</div>
</div>


<ul class="circle">
<li>
<button @click="showone(1)"
:class="yin===1? 'active':''" >
<img src="../../assets/qq头像/闫梦瑶.jpg" alt="">
</button>
</li>
<li>
<button @click="showone(2)"
:class="yin===2? 'active':''" >
<img src="../../assets/qq头像/吴彤.jpg" alt="">
</button>
</li>
<li>
<button @click="showone(3)"
:class="yin===3? 'active':''" >
<img src="../../assets/qq头像/张悦.jpg" alt="">
</button>
</li>
<li>
<button @click="showone(4)"
:class="yin===4? 'active':''" >
<img src="../../assets/qq头像/宁芯.jpg" alt="">
</button>
</li>
<li>
<button @click="showone(5)"
:class="yin===5? 'active':''" >
<img src="../../assets/qq头像/袁莹.jpg" alt="">
</button>
</li>
</ul>

</div>

</template>

<script>
import { reactive } from 'vue'
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
        name: '闫梦瑶',
        occupation: '策划运营组长',
        signature:'车到山前必有路'
      },
      second: {
        name: '吴彤',
        occupation: '策划运营',
        signature:'行到水穷处，坐看云起时。'
      },
      third: {
        name: '张悦',
        occupation: '策划运营',
        signature:'好好学习'
      },
      forth: {
        name: '宁芯',
        occupation: '策划运营',
        signature:'似水滴石 永无止境'
    },
    fifth: {
      name: '袁莹',
      occupation: '策划运营',
      signature: '向上是唯一方向！'
    }
    });
    return {
      pasttext
    }
}
}
</script>

<style lang="less" scoped>
  // 左上角标题
    #member-group {
      position: absolute;
      left: -2.8rem;
      top: -1.1rem;
      width: 4.65rem;
      height: .55rem;
      text-align: center;
      line-height: .55rem;
      // margin: .30rem 0 0 -0.16rem;
      box-shadow: 0 0 .08rem rgba(0, 0, 0, 0.349019607843137);
      border-radius: .10rem;
      font-size:20px
    }
    #member-middle {
        width: 6.00rem;
        height:6.00rem;
        // background-color: green;
        padding:.10rem;
        box-sizing: border-box;
        border-radius: 50%;
        position: relative;
        // scroll:;
        // margin: 0 auto;
        #circle-text {
            width: 4.5rem;
            height: 3.00rem;
            
            position: absolute;
            // background-color: pink;
            left:1rem;
            top: 2.4rem;
            z-index: 999;
            display: flex;
            justify-content: space-between;
            #circle-tu-wen {
              margin-top: -3px;
              display: flex;
              align-items: center;
              flex-direction: column;
              // margin-right: 20px;
              img {
              width: 1.2rem;
              height: 1.2rem;
              border-radius: 50%;
              padding-top: -3px;
              // margin: auto;
              margin: 0px 0 15px 0;
              box-shadow: 0 0 .08rem #f0effc;
              margin-bottom: 20px;
          }
          h3 {
            width:70px;
            height:28px;
            // border-radius: 50%;
            line-height: 28px;
            text-align: center;
            box-shadow: 0 0 .01rem rgba(0, 0, 0, 0.349019607843137);
          }
            }
          h4 {
            margin-bottom: 4px;
            font-size: 18px;
          }
            #member-text-middle {
              width: 3.0rem;
              // background-color: pink;
              height: 2.60rem;
              font-size: 20px;
              // margin-top: .10rem;
            }
        }
        ul,li {
          margin: 0;
          padding: 0;
        }
        ul {
          width: 6.2rem;
          height: 6.2rem;
          background-color: #fff;
          border-radius: 50%;
          position: relative;
          transform-origin: 3.1rem 3.1rem;
          box-shadow: 0 0 .28rem #f0effcfe;
          animation: tf 34s linear infinite;
          li {
            width: 1.2rem;
            height: 1.2rem;
            z-index: 999;
            position: absolute;
            border-radius: 50%;
            box-shadow: 0 0 .08rem rgba(0, 0, 0, 0.349019607843137);
            line-height: 1.00rem;
            text-align: center;
            left: 50%;
            margin-left: -0.50rem;
            margin-top:-0.50rem;
            //旋转点自身高度的一半，父亲宽度的一半+自身宽度的一半
            transform-origin: .6rem 3.7rem;
            // animation: tf reverse 34s linear infinite;
            button {
              width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
            border: 0px;
            //反向旋转
            animation: tf reverse 34s linear infinite;
            }
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              // transform-origin: .50rem 3.90rem;
            }
            &:nth-of-type(2) {
              transform: rotate(72deg);
              img {
                transform: rotate(-72deg);
              }
            }
            &:nth-of-type(3){
              transform: rotate(144deg);
              img {
                transform: rotate(-144deg);
              }
            }
            &:nth-of-type(4){
              transform: rotate(216deg);
              img {
                transform: rotate(-216deg);
              }
            }
            &:nth-of-type(5){
              transform: rotate(288deg);
              img {
                transform: rotate(-288deg);
              }
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
</style>