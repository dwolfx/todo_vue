<template>
  <v-layout row wrap todo>
    <v-flex md8 offset-md2>
      <v-layout row input-data>
        <form
          id="form_todo"
          @submit.prevent="create">
          <input id="task">
          <button
            type="submit"
            id="add">
            <i class="material-icons">add_circle</i>
          </button>
        </form>
      </v-layout>
      <v-layout row content itemTodo>
        <div id="todos">
          <ul>
            <li v-for="(task, index) in tasks"
              class="item"
              :key="index">
              <div
                class="content-item"
                :class="{ checked: task.status }"
                @click="status(index)" >
                <i v-if="task.status" class='material-icons'>check_box</i>
                <i v-else class='material-icons'>check_box_outline_blank</i>
                <p :class="{ checked: task.status }"  class="cont-task">{{task.item}}</p>
              </div>
              <form class="update" @submit.prevent="update(index, $event)" :ref="`item_edit_${index}`">
                <input
                  class="update"
                  :value="task.item"/>
                <button
                  type="submit"
                  class="confirm">
                  <i class="material-icons">save</i>
                </button>
              </form>
              <button
                class="update"
                @click="edit(index)">
                <i class="material-icons">edit</i>
              </button>
              <button
                class="delete"
                @click="remove(index)">
                <i class="material-icons">delete</i>
              </button>
            </li>
          </ul>
        </div>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
  export default{
    data() {
      return {
        tasks: []
      };
    },
    methods: {
      edit(index) {
        this.$refs[`item_edit_${index}`][0].style.display = 'flex';
      },
      update(index, event) {
        this.tasks[index].item = event.target.elements[0].value;
        this.$refs[`item_edit_${index}`][0].style.display = 'none';
        this.updateStorage();
      },
      remove(index) {
        this.tasks.splice(index, 1);
        this.updateStorage();
      },
      status(index){
        this.tasks[index].status = !this.tasks[index].status;
        this.updateStorage();
      },
      create(event) {
        const task = {
          item: event.target.elements[0].value,
          status: false
        };
        this.tasks.push(task);
        this.updateStorage();
        event.target.elements[0].value = "";
      },
      updateStorage() {
        const x = {
          items: this.tasks
        };
        const json = JSON.stringify(x);
        localStorage.setItem('todo', json);
        console.log(this.tasksDone);
      },
    },
    computed: {
      tasksDone() {
        return this.tasks.filter((elem) => {
          return elem.status;
        }).length;
      }
    },
    watch: {
      tasksDone() {
        this.$emit('tasksChanged', { tasksDone: this.tasksDone, totalTasks: this.tasks.length });
      }
    },
    mounted() {
      const todo = localStorage.getItem('todo');
      const parsedObj = JSON.parse(todo);
      this.tasks = parsedObj.items;
    }
  }
</script>
<style scoped lang="scss" src="./../../style/scss/itemTodo.scss"></style>











