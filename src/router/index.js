import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/home'
import Taking from '@/components/taking'
import Tosubmit from '@/components/tosubmit'
import Index from '@/components/index'
import Facesreport from '@/components/facesreport'
import Recruitchannel from '@/components/recruitchannel'
import Proxyinfoentry from '@/components/proxyinfoentry'
import Proxyauthentication from '@/components/proxyauthentication'
import Masterlook from '@/components/masterlook'
import Palmistry from '@/components/palmistry'
import Ranking from '@/components/ranking'
import Setting from '@/components/setting'
import Mastersettled from '@/components/mastersettled'
import Enterinfo from '@/components/enterinfo'
import Product from '@/components/product'
import Myposts from '@/components/myposts'
import Faqs from '@/components/faqs'
import Faqsyao from '@/components/faqsyao'
import Lianxis from '@/components/lianxi'
import Buyreport from '@/components/buyreport'
import Invitecode from '@/components/invitecode'
import Myreport from '@/components/myreport'
import Jiesuo from '@/components/jiesuo'
import Wodebao from '@/components/wodebao'
import Payment from '@/components/payment'
import Paybao from '@/components/paybao'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/index',
      name: '测试过的首页',
      component: Index
    },
    {
      path: '/taking',
      name: '拍照上传',
      component: Taking
    },
    {
      path: '/tosubmit',
      name: '确认提交',
      component: Tosubmit
    },
    {
      path: '/facesreport',
      name: '面相报告',
      component: Facesreport
    },
    {
      path: '/recruitchannel',
      name: '推广渠道的',
      component: Recruitchannel
    },
    {
      path: '/proxyinfoentry',
      name: '申请资格',
      component: Proxyinfoentry
    },
    {
      path: '/proxyauthentication',
      name: '申请资格的下一页',
      component: Proxyauthentication
    },
    {
      path: '/masterlook',
      name: '大师看相',
      component: Masterlook
    },
    {
      path: '/palmistry',
      name: '申请内测资格',
      component: Palmistry
    },
    {
      path: '/ranking',
      name: '面相排行',
      component: Ranking
    },
    {
      path: '/setting',
      name: '联系我们',
      component: Setting
    },
    {
      path: '/mastersettled',
      name: '大师入驻',
      component: Mastersettled
    },
    {
      path: '/enterinfo',
      name: '填写入驻资料',
      component: Enterinfo
    },
    {
      path: '/product',
      name: '问题反馈',
      component: Product
    },
    {
      path: '/myposts',
      name: '提问的界面',
      component: Myposts
    },
    {
      path: '/faqs',
      name: '有依据吗',
      component: Faqs
    },
    {
      path: '/faqsyao',
      name: '邀请好友',
      component: Faqsyao
    },
    {
      path: '/lianxi',
      name: '联系我s们',
      component: Lianxis
    },
    {
      path: '/buyreport',
      name: '购买报告',
      component: Buyreport
    },
    {
      path: '/invitecode',
      name: '首页云层报告',
      component: Invitecode
    },
    {
      path: '/myreport',
      name: '流年运势',
      component: Myreport
    },
    {
      path: '/jiesuo',
      name: '2元解锁的',
      component: Jiesuo
    },
    {
      path: '/wodebao',
      name: '我的报告',
      component: Wodebao
    },
    {
      path: '/pay',
      name: '微信支付页面',
      component: Payment
    }                                                                              
  ]
})
