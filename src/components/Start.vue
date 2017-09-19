<template>
  <div id="start">
    <v-layout row wrap>
      <v-flex md4 sm6 offset-md4 offset-sm3 start>
        <v-layout row md12 title>
          <h1>dWolf</h1>
          <p>Vue Examples</p>
        </v-layout>
        <v-layout row md12 menu>
          <a :href="item.link" v-for="item in buttons" :key='item.text'>
            <v-btn :class='item.btn'>
              <v-icon>
                {{ item.icon }}
              </v-icon>
              {{ item.text }}
            </v-btn>
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
  export default {
    data: () => ({
      buttons: [
        {
          icon: 'book',
          text: 'ToDo List',
          link: '/todo',
          btn: 'btn-todo'
        },
        {
          icon: 'cached',
          text: 'Pig Game',
          link: '/pig',
          btn: 'btn-pig'
        }
      ]
    })
  }
</script>
<style lang="scss" scoped src="../style/scss/start.scss">

</style>