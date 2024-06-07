<template>
  <!-- <2>往届成员 -->
    <div id="member-middle">
          <!-- (1)成员介绍 -->
          <div id="circle-text"
            v-show="yin==1">
          <!-- （1.1）左侧图片+文字 -->
            <div id="circle-tu-wen">
              <img src="../../assets/qq头像/苏伦俊.jpg" alt="">
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
              <img src="../../assets/qq头像/牛志欣.jpg" alt="">
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
            v-show="yin==3">
            <!-- （3.1）左侧图片+文字 -->
            <div id="circle-tu-wen">
              <img src="../../assets/qq头像/李旭楠.jpg" alt="">
              <h3>{{pasttext.third.name}}</h3>
            </div>
            <!-- (3.2)右侧介绍 -->
            <div id="member-text-middle">
              <h4> 职位：</h4>
                {{pasttext.third.occupation}}<br/>
              <div style="margin-bottom:10px;"></div>
              <h4>个性签名：</h4>
              <div>{{pasttext.third.signature}}</div>
            </div>
          </div>
          <!-- (4)成员介绍 -->
          <div id="circle-text"
            v-show="yin==4">
            <!-- （4.1）左侧图片+文字 -->
            <div id="circle-tu-wen">
              <img src="../../assets/qq头像/王维杰.jpg" alt="">
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

          <!-- (5)成员介绍 -->
          <div id="circle-text"
            v-show="yin==5">
            <!-- （5.1）左侧图片+文字 -->
            <div id="circle-tu-wen">
              <img src="../../assets/qq头像/黄冠联.jpg" alt="">
              <h3>{{pasttext.fifth.name}}</h3>
            </div>
            <!-- (5.2)右侧介绍 -->
            <div id="member-text-middle">
              <h4> 职位：</h4>
                {{pasttext.fifth.occupation}}<br/>
              <div style="margin-bottom:10px;"></div>
              <h4>个性签名：</h4>
             {{pasttext.fifth.signature}}
            </div>
          </div>

          <!-- (6)成员介绍 -->
          <div id="circle-text"
            v-show="yin==6">
            <!-- (6.1）左侧图片+文字 -->
            <div id="circle-tu-wen">
              <img src="../../assets/qq头像/刘泽康.jpg" alt="">
              <h3>{{pasttext.sixth.name}}</h3>
            </div>
            <!-- (6.2)右侧介绍 -->
            <div id="member-text-middle">
              <h4> 职位：</h4>
                {{pasttext.sixth.occupation}}<br/>
              <div style="margin-bottom:10px;"></div>
              <h4>个性签名：</h4>
             {{pasttext.sixth.signature}}
            </div>
          </div>

          <!-- (7)成员介绍 -->
          <div id="circle-text"
            v-show="yin==7">
            <!-- （7.1）左侧图片+文字 -->
            <div id="circle-tu-wen">
              <img src="../../assets/qq头像/张雨甜.jpg" alt="">
              <h3>{{pasttext.seventh.name}}</h3>
            </div>
            <!-- (7.2)右侧介绍 -->
            <div id="member-text-middle">
              <h4> 职位：</h4>
                {{pasttext.seventh.occupation}}<br/>
              <div style="margin-bottom:10px;"></div>
              <h4>个性签名：</h4>
             {{pasttext.seventh.signature}}
            </div>
          </div>

          <!-- (8)成员介绍 -->
          <div id="circle-text"
            v-show="yin==8">
            <!-- （8.1）左侧图片+文字 -->
            <div id="circle-tu-wen">
              <img src="../../assets/qq头像/谢鹏.jpg" alt="">
              <h3>{{pasttext.eighth.name}}</h3>
            </div>
            <!-- (8.2)右侧介绍 -->
            <div id="member-text-middle">
              <h4> 职位：</h4>
                {{pasttext.eighth.occupation}}<br/>
              <div style="margin-bottom:10px;"></div>
              <h4>个性签名：</h4>
             {{pasttext.eighth.signature}}
            </div>
          </div>
      
        <!-- (9)按钮模块 -->
        <ul class="circle">
          <li>
            <button @click="showone(1)"
            :class="yin===1? 'active':''" >
              <img src="../../assets/qq头像/苏伦俊.jpg" alt="">
            </button>
          </li>
          <li>
            <button @click="showone(2)"
            :class="yin===2? 'active':''" >
              <img src="../../assets/qq头像/牛志欣.jpg" alt="">
            </button>
          </li>
          <li>
            <button @click="showone(3)"
            :class="yin===3? 'active':''" >
              <img src="../../assets/qq头像/李旭楠.jpg" alt="">
            </button>
          </li>
          <li>
            <button @click="showone(4)"
            :class="yin===4? 'active':''" >
              <img src="../../assets/qq头像/王维杰.jpg" alt="">
            </button>
          </li>
          <li>
            <button @click="showone(5)"
            :class="yin===5? 'active':''" >
              <img src="../../assets/qq头像/黄冠联.jpg" alt="">
            </button>
          </li>
          <li>
            <button @click="showone(6)"
            :class="yin===6? 'active':''" >
              <img src="../../assets/qq头像/刘泽康.jpg" alt="">
            </button>
          </li>
          <li>
            <button @click="showone(7)"
            :class="yin===7? 'active':''" >
              <img src="../../assets/qq头像/张雨甜.jpg" alt="">
            </button>
          </li>
          <li>
            <button @click="showone(8)"
            :class="yin===8? 'active':''" >
              <img src="../../assets/qq头像/谢鹏.jpg" alt="">
            </button>
          </li>
      </ul>

        </div>
</template>

<script>
export default {
    setup() {
    let pasttext = reactive({
      first: {
        name: '苏伦俊',
        occupation: '实验室负责人,后端开发',
        signature: '既然选择远方，当不负青春，砥砺前行'
      },
      second: {
        name: '牛志欣',
        occupation: '后端组长,后端开发',
        signature: '成功的秘诀就是每天都比别人多努力一点'
      },
      third: {
        name: '李旭楠',
        occupation: '后端开发',
        signature: '专注你的梦想，做自己的英雄'
      },
      forth: {
        name: '王维杰',
        occupation: '硬件组长，硬件开发',
        signature: '人生就是这样，要耐的住寂寞，才守得住繁华'
      },
      fifth: {
        name: '黄冠联',
        occupation: '硬件组长，硬件开发',
        signature: '彗星般的人生可以短暂，但绝不黯淡或沉沦'
      },
      sixth: {
        name: '刘泽康',
        occupation: '硬件开发',
        signature: '空虚无聊的时候就读书，但一定得有自己的生活目标和计划'
      },
      seventh: {
        name: '张雨甜',
        occupation: '前端开发',
        signature: '梦想只要能能持久，就能成为现实'
      },
      eighth: {
        name: '谢鹏',
        occupation: '前端开发',
        signature: '真正重要的不是生命里的岁月，而是岁月中的生活'
      },
    });
    return {
      pasttext
    }
  }
}
</script>

<style lang="less" scoped>
      // <2>往届成员——主体部分
      #member-middle {
        width: 7.2rem;
        height:7.2rem;
        padding:.10rem;
        margin: auto;
        box-sizing: border-box;
        border-radius: 50%;
        position: relative;
        // (1-4)成员介绍 
        #circle-text {
          // background-color: pink;
        width: 4.8rem;
        height: 3.30rem;
        position: absolute;
        left:1.3rem;
        top: 2.55rem;
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
        // (9)按钮模块 
        ul {
        width:7.2rem;
        height:7.2rem;
        background-color: #fff;
        border-radius: 50%;
        position: relative;
        //旋转点自身高度的一半，父亲宽度的一半+自身宽度的一半
        transform-origin: 3.6rem 3.6rem;
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
          transform-origin: .6rem 4.2rem;
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
            &:nth-of-type(2) {
              transform: rotate(45deg);
              img {
                transform: rotate(-45deg);
              }
            }
            &:nth-of-type(3){
              transform: rotate(90deg);
              img {
                transform: rotate(-90deg);
              }
            }
            &:nth-of-type(4){
              transform: rotate(135deg);
              img {
                transform: rotate(-135deg);
              }
            }
            &:nth-of-type(5){
              transform: rotate(180deg);
              img {
                transform: rotate(-180deg);
              }
            }  
            &:nth-of-type(6){
              transform: rotate(225deg);
              img {
                transform: rotate(-225deg);
              }
            }  
            &:nth-of-type(7){
              transform: rotate(270deg);
              img {
                transform: rotate(-270deg);
              }
            }  
            &:nth-of-type(8){
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