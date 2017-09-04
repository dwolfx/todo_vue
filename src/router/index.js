import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import Start from '@/components/Start'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start,
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '*',
      redirect: {
        name: 'Start'
      }
    }

  ]
})
