<template>
    <div class="common-layout">
    <el-container>
        <!-- 团队概述 -->
      <el-header>
        <el-row>
            <el-col :span="12">
            <h1 id="top-zero" style="margin-left:1.275rem;font-size: .5rem;">Maker-IoT</h1>
            <div id="top-one">
                &nbsp;&nbsp;&nbsp;&nbsp;团队的成员来自商学院、教育学院、信息学院等多个学院，涵盖软件工程，电子信息工程，人力资源管理，测控技术与仪器等多种专业；团队的成员成绩优异，具备对应的专业知识与职业素养。每个成员都有着各自擅长的领域、知识结构合理，具有较强的互补性；并且富有团队责任感和集体荣誉感。团队成员互帮互助，向着同一个目标奋斗。
            </div>
            <div id="top-one">
                &nbsp;&nbsp;&nbsp;&nbsp;我们是一个能力多元化，技术专业化，年轻的，凝聚力强的创新创业团队。
            </div>
            </el-col>
            <el-col :span="12" >
                <div id="top-right">
                    <img src="../../assets/加入我们/hezhao.jpg" alt=""/>
                </div>
            </el-col>
        </el-row>
      </el-header>
      <!-- 图标 -->
   <ul>
    <li><img id="maker-left" src="../../assets/加入我们/maker.jpg" alt=""></li>
    <li><img id="maker-right" src="../../assets/加入我们/maker-iot.png" alt=""></li>
   </ul>
        <!-- 岗位介绍 -->
    <el-main>
        <!-- 标题 -->
        <el-row :gutter="24" id="introduce-title">
            <el-col :span="11">
                <img src="../../assets/加入我们/left.jpg" alt="">
           </el-col>
            <el-col :span="2">
                <h1>岗位介绍</h1>
            </el-col>
            <el-col :span="11">
                <img src="../../assets/加入我们/right.jpg" alt=""/>
            </el-col>
        </el-row>

        <!-- 内容 -->
        <el-row id="intriduce-text">
            <el-col :span="8" >
                <h4 id="head">前端开发</h4>
                <div id="bot">
                    负责项目的前端界面开发<br/>
                    <span></span>
                    了解HTML5、css3、JavaScrip<br/>
                    <span></span>
                    充满好奇心，有责任心，学习能力强
                   <router-link :to="{path:'/JoinSpecific',query:{name:'前端'}}"> <el-button type="primary" round id="shenqing">申请岗位</el-button></router-link>
                  
                </div>
            </el-col>
            <el-col :span="8" >
                <h4 id="head">后端开发</h4>
                <div id="bot">
                    负责项目的后端开发<br/>
                    <span></span>
                    熟练使用springboot和mybatis－plus,MYSQL数据库<br/>
                    <span></span>
                    有责任心，上进心，认真工作
                    <router-link :to="{path:'/JoinSpecific',query:{name:'后端'}}"> <el-button type="primary" round id="shenqing">申请岗位</el-button></router-link>
                </div>
            </el-col>
            <el-col :span="8" >
                <h4 id="head">原型设计</h4>
                <div id="bot">
                    负责3D建模和前端界面设计<br/>
                    <span></span>
                    学习掌握Axure，solidworks，3dmax等软件
                    <span></span>
                    积极学习，实践能力强
                    <router-link :to="{path:'/JoinSpecific',query:{name:'原型设计'}}"> <el-button type="primary" round id="shenqing">申请岗位</el-button></router-link>
                </div>
            </el-col>
        </el-row>

        <el-row id="intriduce-text">
            <el-col :span="8">
                <h4 id="head">硬件开发</h4>
                <div id="bot" style="height:3.65rem">
                    负责项目的硬件实现<br/>
                    <span></span>
                    熟悉常用的51、15、32、zigbee等一系列单片机和蓝牙、wifi等模块的开发<br/>
                    <span></span>
                    主动学习、举一反三、动手能力强
                    <!-- <router-link to="/JoinSpecific"> <el-button type="primary" round id="shenqing" @click="sendPost(硬件)">申请岗位</el-button></router-link> -->
                    <!-- 携带name传参过去 -->
                    <router-link :to="{path:'/JoinSpecific',query:{name:'硬件'}}"> <el-button type="primary" round id="shenqing">申请岗位</el-button></router-link>
                </div>
            </el-col>
            <el-col :span="8">
                <h4 id="head">人工智能</h4>
                <div id="bot"  style="height:3.65rem">
                    负责项目人工智能方向<br/>
                    <span></span>
                    <span></span>
                    能熟练掌握机器学习、深度学习等技术<br/>
                    <span></span>
                    <span></span>
                    认真踏实，勇于钻研。
                    <span></span>
                    <!-- <span></span> -->
                    <router-link :to="{path:'/JoinSpecific',query:{name:'人工智能'}}"> <el-button type="primary" round id="shenqing">申请岗位</el-button></router-link>
                </div>
            </el-col>
            <el-col :span="8">
                <h4 id="head">策划运营</h4>
                <div id="bot"  style="height:3.65rem">
                    负责团队活动策划及项目商业部分撰写<br/>
                    <span></span>
                    掌握office基本功能 理解商业策划书结构框架<br/>
                    <span></span>
                    学习能力强，有创新意识
                    <router-link :to="{path:'/JoinSpecific',query:{name:'策划运营'}}"> <el-button type="primary" round id="shenqing">申请岗位</el-button></router-link>
                </div>
            </el-col>
        </el-row>
    </el-main>

    <!-- 个人信息填写 -->
      <el-footer>
    </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
    name: 'Join',
    setup() {
        // function sendPost(str) {
        //     this.$router.push({
        //         path:`/d/${str}`
        //     })
        // }
        // return {
        //     sendPost
        // }
    }
}
</script>

<style scoped lang="less">
* {
    font-size: .4rem;
}
.common-layout {
    .el-container {
        // background-color: pink;
        .el-header {
            // background-color: pink;
            margin-top: 1.25rem;
            height: 5.3126rem;
            .el-col {
                text-align: left;
                #top-one {
                    width: 9.4376rem;
                    margin-left: 1.25rem;
                    margin-top:.3rem;
                }
                #top-right {
                width: 10.625rem;
                height: 5.4375rem;
                border-radius: .2501rem;
                box-shadow: .0625rem .0625rem .125rem rgba(0, 0, 0, 0.349019607843137);
                overflow: hidden;
                img {
                    width: 10.625rem;
                    height: 5.4375rem;
                    // margin-left: 18.75rem;
                    border-radius: .2501rem;
                    transition: 0.8s;
                    &:hover {
                        transform: scale(1.1);
                    }
                  }
                }
            }
        }
       ul {
        // background-color: red;
        width: 50%;
        margin: auto;
        margin-top: .5rem;
        display: flex;
        justify-content: space-around;
         // 中间图标
         #maker-left {
            // position: relative;
            // left: 3.3334rem;
            width: 3.25rem;
            height: 2.625rem;
        }
        #maker-right {
            // position: relative;
        //    right: 1.9999rem;
        //     top: 1rem;
        // background-color: pink;
        margin-top: 8%;
            width: 9.8rem;
            height: 1.851rem;
        }
       }
        .el-main {
            // margin: auto;
            // background-color: pink;
            #introduce-title {
                .el-col {
                height: .6249rem;
                display: flex;
                justify-content: center;
                img {
                    width: 1.25rem;
                    height: .6249rem;
                }
                h1 {
                    line-height: .6249rem;
                    font-size:.3667rem;
                }
                &:first-child {
                    display: flex;
                    img {
                        margin-left: auto;
                    }
                }
                &:last-child {
                    display: flex;
                    img {
                        margin-right: auto;
                    }
                }
               }
            }

            #intriduce-text {
                margin-top:1.25rem;
                height: 4.8rem;
                // background-color: pink;
                .el-col {
                    #head {
                    background:linear-gradient(to right,#efe6fe,#e8edfe);
                    width: 2.4999rem;
                    height: .6666rem;
                    line-height: .6249rem;
                    padding-left: .2501rem;
                    border-radius:.2501rem .4375rem .05rem .1166rem ;
                    margin-left:13%;
                    font-size: .3667rem;
                    // margin-bottom: 2.4999rem;
                }
                #bot {
                    background-color: #ffffff;
                    width: 5.7501rem;
                    height: 3.2rem;
                    // border: 1.25rem solid var(--el-border-color);
                    // margin-top: 17.5rem;
                    box-shadow: 0 .0249rem .1rem 0 rgba(0, 0, 0, 0.2), 0 .0749rem .2501rem 0 rgba(0, 0, 0, 0.19);
                    border-radius: .125rem;
                    margin: 0 auto;
                    padding: .275rem;
                    font-size: .3334rem;
                    span {
                        display: block;
                        width: 100%;
                        height: .125rem;
                    }
                    #shenqing {
                        width: 1.75rem;
                        height: .6249rem;
                        position: relative;
                        top: .2rem;
                        background-color:#7c34ff;
                        color:#ffffff;
                        display:block;
                        margin: auto;
                        // font-size: .0625rem;
                    }
                    }
            
                }
            }
        }
        .el-footer {
            height: 1rem;
        }
    }
}
</style>
