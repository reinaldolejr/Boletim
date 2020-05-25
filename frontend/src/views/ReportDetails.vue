<template>
  <div>
    <v-container>
      <v-card>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <p class="title mb-0 font-weight-bold black--text">MATÉRIA</p>
              <p class="subtitle-1 mb-0 black--text">{{report.matter}}</p>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <p class="title mb-0 font-weight-bold black--text">NOME DA TURMA</p>
              <p class="subtitle-1 mb-0 black--text">{{report.className}}</p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <div class="d-flex mt-3 align-center">
        <div class="display-1 font-weight-black">ALUNOS</div>
      </div>
      <div v-for="(item, key) in report.students" :key="key" class="mb-3">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="8" md="8">
                <p class="title mb-0 font-weight-bold black--text">NOME</p>
                <p class="subtitle-1 mb-0 black--text">{{item.name}}</p>
              </v-col>
              <v-col cols="12" sm="3" md="3">
                <p class="title mb-0 font-weight-bold black--text">NOTA</p>
                <p class="subtitle-1 mb-0 black--text">{{item.grade}}</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Details",
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      getReport: "reportCard/getByCode"
    }),
  },
  computed: {
    ...mapGetters({
      report: "reportCard/report"
    })
  },
  mounted (){
    this.getReport(this.$route.params.code)
  }
};
</script>
