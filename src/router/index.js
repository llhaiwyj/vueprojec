import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import homes from '@/components/homes'
import echart from '@/components/echart'
import login from '@/components/login'
import rolesettings from '@/components/rolesetting/rolesettings'
import bussiness from '@/components/Bussiness/bussiness'
import stores from '@/components/bussinessStore/stores'
//import examine from '@/components/examine'
import usermanage from '@/components/usermanage/usermanage'
import backs from '@/components/back'
import member from '@/components/Member/member'
import storeEmployee  from '@/components/storeEmp/storeEmployee'
import shopcategory from '@/components/shopcategory/shopcategory'
import attribute from '@/components/attribute/attribute'
import serviceXyyktManager from '@/components/service/serviceXyyktManager'
import commoditygrouping from '@/components/commoditygrouping/commoditygrouping'
import servicemanagement from '@/components/storemanagement/servicemanagement'
import Shangping from '@/components/Codecommodity/Shangping'
import merchantExamine from '@/components/merchant/merchantExamine'
import Storecommoditysetting from '@/components/Storecommoditysetting/Storecommoditysetting'
import activityticket from '@/components/activityticket/ActivityTicket'
import meal from '@/components/meal/meal'
//import backMeal from '@/components/backMeal/backMeal'
import billing from '@/components/Billing/billing'
import oderlist from '@/components/oderlist/oderlist'
//import storecombo from '@/components/storecombo/storecombo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
    	path: '/home',
      name: 'home',
      component: home,
      children: [
      {
      path: '/homes',
      name: 'homes',
      component: homes
      },
      {
      path: '/echart',
      name: 'echart',
      component: echart
      },
      {
      path: '/rolesettings',
      name: 'SC0901',
      component: rolesettings
      },
      {
      path: '/bussiness',
      name: 'SC0701',
      component: bussiness
      },
      {
      path: '/usermanage',
      name: 'SC0902',
      component: usermanage
      },
      {
      path: '/stores',
      name: 'SC0702',
      component: stores
      },
      {
      path: '/shopcategory',
      name: 'SC0408',
      component: shopcategory
      },
//     {
//    path: '/storecombo',
//    name: 'SC0404',
//    component: storecombo
//    },
      {
      path: '/attribute',
      name: 'SC0409',
      component: attribute
      },
      {
      path: '/commoditygrouping',
      name: 'SC0411',
      component: commoditygrouping
      },
      {
      path: '/Shangping',
      name: 'SC0402',
      component: Shangping
      },
      {
      path: '/activityticket',
      name: 'SC0501',
      component: activityticket
      },
      {
      path: '/backs',
      name: 'backs',
      component: backs
      } ,
      {
      path: '/member',
      name: 'SC0203',
      component: member
      },
      {
      path: '/storeEmployee',
      name: 'SC0703',
      component: storeEmployee
      },
      {
      path: '/serviceXyyktManager',
      name: 'SC0401',
      component: serviceXyyktManager
      },
      {
      path: '/servicemanagement',
      name: 'SC0403',
      component: servicemanagement
      },
       {
      path: '/Storecommoditysetting',
      name: 'SC0404',
      component: Storecommoditysetting
      },
      {
      path: '/meal',
      name: 'SC0301',
      component: meal
      },
//     {
//    path: '/backMeal',
//    name: 'SC0303',
//    component: backMeal
//    },
       {
      path: '/billing',
      name: 'SC0101',
      component: billing,
      },
      {
      path: '/oderlist',
      name: 'SC0104',
      component: oderlist,
      },
      {
      path: '/merchantExamine',
      name: 'merchantExamine',
      component: merchantExamine,
      }
    ]
    }
  ]
})
