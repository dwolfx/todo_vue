<template>
  <div id="header">
    <v-layout row wrap>
      <v-flex header md8 offset-md2>
        <h2>{{title}}</h2>
        <p>Tarefas: {{valueTask}}</p>
        <p>Concluido: {{valueCompleted}}%</p>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
  export default({
    props: {
      title: {
        type: String,
        required: false,
        default: 'Victor'
      },
      valueTask: {
        type: String,
        required: false,
        default: 0
      },
      valueCompleted: {
        type: String,
        required: false,
        default: 0
      }
    }
  })
</script>

<style lang="scss" scoped src="../style/scss/header.scss"></style>
