<template>
  <div id="menu-top">
    <div class="over" v-show="over" @click="drawer = !drawer; over = !over;"></div>
    <v-navigation-drawer
      class="pb-0"
      persistent
      absolute
      height="100vh"
      clipped
      enable-resize-watcher
      v-model="drawer"
      fullscreen
    >
      <v-list dense>
        <v-list-tile class="mt-3" v-for="item in start" :key="item.text" :href='item.link'>
          <v-list-tile-action>
            <v-icon class="grey--text text--darken-1">
              {{ item.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">
            {{ item.text }}
          </v-list-tile-title>
        </v-list-tile>

        <v-subheader class="mt-3 grey--text text--darken-1">Projetos</v-subheader>

        <v-list-tile v-for="item in items" :key="item.text" :href='item.link'>
          <v-list-tile-action>
            <v-icon class="grey--text text--darken-1">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="grey--text text--darken-1">
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar>
      <v-toolbar-title class="flexbox">
        <v-toolbar-side-icon @click.stop="drawer = !drawer; over = !over"></v-toolbar-side-icon>
        <v-flex flexbox flexcenter>
          <v-icon>book</v-icon>
          <p>ToDo List</p>
        </v-flex>
      </v-toolbar-title>
    </v-toolbar>

  </div>
</template>
<script>
  export default {
    data: () => ({
      over: false,
      drawer: false,
      start: [
        {
          icon: 'home',
          text: 'Home',
          link: '/'
        }
      ],
      items: [
        {
          icon: 'book',
          text: 'ToDo List',
          link: '/todo'
         },
        {
          icon: 'cached',
          text: 'Pig Game',
          link: '/pig'
        },
      ]
    })
  }
</script>
<style lang="scss" scoped src="../style/scss/menu-top.scss"></style>