import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
//首页
import HomeView from '@/views/HomeView.vue'
//引入二级路由
import Home from '@/views/Home/Home.vue'

//成员
import Member from '@/views/Member.vue'
//引入二级路由
import MemberCopy from '@/views/Member/MemberCopy.vue'
//引入三级路由
import BackEnd from '@/views/Member/BackEnd.vue'
import Intelligence from '@/views/Member/Intelligence.vue'
import ProtoTyping from '@/views/Member/ProtoTyping.vue'
import Front from '@/views/Member/Front.vue'
import OperaTional from '@/views/Member/OperaTional.vue'
import HardWare from '@/views/Member/HardWare.vue'

//成果
import Achievement from '@/views/Achievement'
//引入二级路由
import AchievementCopy from '@/views/Achievement/AchievementCopy.vue'

//加入我们
import JoinUs from '@/views/JoinUs.vue'
//引入二级路由
import Join from '@/views/Join/Join.vue'
//申请岗位
import JoinSpecific from '@/views/Join/JoinSpecific'
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  },
  {
    path: '/Member',
    component: Member,
    children: [
      {
        path: '/Member',
        component: MemberCopy,
        children: [
          {
            path: '/Member',
            component: BackEnd
          },
          {
            path: '/Intelligence',
            component: Intelligence
          },
          {
            path: '/ProtoTyping',
            component: ProtoTyping
          },
          {
            path: '/Front',
            component: Front
          },
          {
            path: '/OperaTional',
            component: OperaTional
          },
          {
            path: '/HardWare',
            component: HardWare
          }
        ]
      }
    ]
  },
  {
    path: '/Achievement',
    component: Achievement,
    children: [
      {
        path: '/Achievement',
        component: AchievementCopy
      }
    ]
  },
  {
    path: '/jairu',
    component: JoinUs,
    children: [
      {
        path: '/jairu',
        component: Join,
      },
    ]
  },
  //申请岗位
  {
    path: '/JoinSpecific',
    name: 'JoinSpecific',
    component: JoinSpecific
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
