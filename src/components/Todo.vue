<template>
  <div id="todo">
    <menu-top></menu-top>
    <header-site
      title="Lista de Tarefas do Victor"
      :valueTask="totalTasks"
      :valueCompleted="tasksDone">
    </header-site>

    <list-todo v-on:tasksChanged="tasksListener"></list-todo>

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
  data() {
    return {
      tasksDone: 0,
      totalTasks: 0
    }
  },
  methods: {
    tasksListener(e) {
      this.tasksDone = e.tasksDone;
      this.totalTasks = e.totalTasks;
    }
  }
}
</script>

