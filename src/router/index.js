/**
 * Created by Moment on 2016/10/30.
 */

import Vue from 'vue'
import Resource from 'vue-resource'
import NProgress from 'nprogress'
import Router from 'vue-router'
Vue.use(Router)
Vue.use(Resource)

Vue.http.interceptors.push((request, next) => {
  NProgress.inc(0.2)

  next((response) => {
    NProgress.done()
    return response
  })
})


const router =  new Router({
  mode: 'hash',
  routes: [
    {
      path: '',
      redirect: '/company',
      title: '公司简介',
      component(resolve){
        require(['../components/introduction/index.vue'], resolve);
      },
    },
    {
      path: '/introduction',
      redirect: '/company',
      title:'公司简介',
      component(resolve){
        require (['../components/introduction/index.vue'], resolve);
      },
      children: [
        {
          path: '/company',
          title:'公司简介',
          component(resolve){
            require (['../components/introduction/company.vue'], resolve);}
        },
        {
          path: '/history',
          title:'发展历程',
          component(resolve){
            require (['../components/introduction/history.vue'], resolve);}
          },
        {
          path: '/culture',
          title:'企业文化',
          component(resolve){
            require (['../components/introduction/culture.vue'], resolve);}
          },
        {
          path: '/vision',
          title:'公司愿景',
          component(resolve){
            require (['../components/introduction/vision.vue'], resolve);}
        }
      ]
    },
    {
      path: '/business',
      redirect: '/operation',
      title:'业务领域',
      component(resolve){
        require (['../components/business/index.vue'], resolve);
      },
      children: [
        {
          path: '/operation',
          title:'业务领域',
          component(resolve){
            require (['../components/business/operation.vue'], resolve);}
        },
        {
          path: '/equity',
          title:'股权投资',
          component(resolve){
            require (['../components/business/equity.vue'], resolve);}
        },
        {
          path: '/venture',
          title:'创业投资',
          component(resolve){
            require (['../components/business/venture.vue'], resolve);}
        },
        {
          path: '/finance',
          title:'融资租赁',
          component(resolve){
            require (['../components/business/finance.vue'], resolve);}
        },
        {
          path: '/special',
          title:'特色业务',
          component(resolve){
            require (['../components/business/special.vue'], resolve);}
        }
      ]
    },
    {
      path: '/cooperation',
      redirect: '/partners',
      title:'合作机构',
      name: 'host',
      component(resolve){
        require (['../components/cooperation/index.vue'], resolve);
      },
      children: [
        {
          path: '/partners',
          title:'合作机构',
          component(resolve){
            require (['../components/cooperation/partners.vue'], resolve);}
        },
        {
          path: '/partners1',
          title:'合作机构1',
          component(resolve){
            require (['../components/cooperation/partners1.vue'], resolve);}
        }
      ]
    },
    {
      path: '/connection',
      redirect: '/relation',
      title:'联系我们',
      name: 'host',
      component(resolve){
        require (['../components/connection/index.vue'], resolve);
      },
      children: [
        {
          path: '/relation',
          title:'联系我们',
          component(resolve){
            require (['../components/connection/relation.vue'], resolve);}
        },
        {
          path: '/branch-jin',
          title:'金茂大厦总部',
          component(resolve){
            require (['../components/connection/branch-jin.vue'], resolve);}
        },
        {
          path: '/branch-pu',
          title:'浦东分公司',
          component(resolve){
            require (['../components/connection/branch-pu.vue'], resolve);}
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((transition) => {
  NProgress.done()
})

export default router
