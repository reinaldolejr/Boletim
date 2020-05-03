<template>
  <div>
    <v-container>
      <v-form ref="form">
        <div class="d-flex align-center mb-2">
          <div class="headline font-weight-black">Novo Boletim</div>
          <v-spacer></v-spacer>
          <v-btn color="primary" large class @click="save" id="btn-save">salvar</v-btn>
        </div>
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  :rules="rules.className"
                  v-model="form.className"
                  label="Nome da turma"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field :rules="rules.matter" v-model="form.matter" label="Matéria"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <div class="d-flex mt-3 align-center">
          <div class="title">ALUNOS</div>
          <v-spacer></v-spacer>
          <v-btn dark color="black" icon large class @click="newItem" id="btn-add">
            <v-icon>mdi-account-plus</v-icon>
          </v-btn>
        </div>
        <div v-for="(item, key) in form.students" :key="key" class="mb-3">
          <v-card>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="8" md="8">
                  <v-text-field :rules="rules.name" v-model="item.name" label="Nome"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field
                    :rules="rules.grade"
                    v-mask="'999'"
                    v-model="item.grade"
                    label="Nota"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="1" md="1">
                  <v-btn dark color="red" fab class @click="deleteItem">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
      </v-form>
    </v-container>
    <v-dialog v-model="dialogSuccess" persistent width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Salvo com sucesso!!!</v-card-title>
        <v-card-text>
          <p>O codigo para acessar as notas da turma é:</p>
          <p>
            <span id="code">{{this.code}}</span>
            <v-btn dark color="black" icon large @click="doCopy" ref="container" id="btn-copy">
              <v-icon>mdi-content-copy</v-icon>
            </v-btn>
          </p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text to="/">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AwesomeMask from "awesome-mask";
// import VueClipboards from "vue-clipboards";
import { mapActions, mapGetters } from "vuex";

export default {
  directives: { mask: AwesomeMask },
  name: "Report",
  components: {},
  data() {
    return {
      form: {
        matter: "",
        className: "",
        students: [
          {
            name: "",
            grade: 0
          }
        ]
      },
      student: {
        name: "",
        grade: 0
      },
      rules: {
        matter: [v => !!v || "Nome da turma é obrigatório"],
        className: [v => !!v || "Nome da matéria é obrigatório"],
        name: [v => !!v || "Nome do aluno é obrigatório"],
        grade: [v => !!(parseInt(v) >= 0) || "Nota do aluno é obrigatória"]
      },
      dialogSuccess: false
    };
  },
  methods: {
    ...mapActions({
      saveReportCard: "reportCard/save"
    }),
    deleteItem() {
      const index = this.form.students.indexOf(this.student);
      this.form.students.splice(index, 1);
    },
    newItem() {
      this.form.students.push({
        name: "",
        grade: 0
      });
    },
    async save() {
      console.log(this.$refs.form.validate());
      console.log(this.form);

      if (this.$refs.form.validate()) {
        await this.saveReportCard({
          reportCard: this.form
        });

        console.log(this.code);
        this.dialogSuccess = true;
      }
    },
    doCopy: function() {
      this.$copyText(this.code, this.$refs.container.$el).then(
        function(e) {
          console.log("Copied", e);
        },
        function(e) {
          console.log("Can not copy", e);
        }
      );
    }
  },
  computed: {
    ...mapGetters({
      code: "reportCard/code"
    })
  }
};
</script>
