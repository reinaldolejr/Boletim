<template>
  <div>
    <v-app-bar color="black" dark>
      <router-link to="/">
        <v-img
          :src="require('../assets/logo.svg')"
          contain
          :aspect-ratio="1"
          width="36"
          class="mr-3"
        ></v-img>
      </router-link>
      <v-toolbar-title data-name="title" class="text-uppercase">{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-for="(item, key) in menu" :key="key" data-name="menu">
        <v-btn :to="item.link">{{ item.name }}</v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "App"
    },
    menu: {
      type: Array,
      default: () => {
        return;
      }
    }
  }
};
</script>
