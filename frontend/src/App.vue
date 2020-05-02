<template>
  <v-app>
    <Header :title="title" />
    <div style="height: 100%;">
      <router-view></router-view>
    </div>
    <v-card>
      <v-footer padless>
        <v-card flat tile width="100%" class="black text-center">
          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} —
            <strong>reinaldolejr</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header
  },
  data: () => ({
    title: "Boletim"
  })
};
</script>
