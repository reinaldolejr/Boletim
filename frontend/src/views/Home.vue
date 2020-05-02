<template>
  <div class="home">
    <v-container>
      <v-card>
        <v-img src="../assets/imgMain.jpg" height="500px"></v-img>
        <v-card-text class="text--primary">
          <div class="my-2 text-center">
            <v-btn x-large dark @click="newReport" width="500">Novo Boletim</v-btn>
          </div>
          <div class="my-2 text-center">
            <v-btn x-large dark @click="dialog = true" width="500">Buscar Boletim</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-container>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Informe o código para acessar as notas do boletim.</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="code" label="Código" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Fechar</v-btn>
          <v-btn color="blue darken-1" text @click="findReport">Buscar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      code: "",
      dialog: false
    };
  },
  methods: {
    newReport() {
      this.$router.push({ name: "ReportCard" });
    },
    findReport() {
      this.$router.push({
        name: "ReportCardDetails",
        params: { code: this.code }
      });
      this.dialog = true;
    }
  }
};
</script>
