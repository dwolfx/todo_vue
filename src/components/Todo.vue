<template>
  <div id="todo">
    <menu-top></menu-top>
    <header-site
      title="Lista de Tarefas do Victor"
      valueTask='0'
      valueCompleted='0'>
    </header-site>

    <list-todo></list-todo>

  </div>

</template>

<script>

import MenuTop from './MenuTop.vue'
import HeaderSite from './Header.vue'
import ListTodo from './todoItems/listTodo.vue'


export default {
  components: {
    MenuTop,
    HeaderSite,
    ListTodo
  },
  methods: {

  }
}
</script>

