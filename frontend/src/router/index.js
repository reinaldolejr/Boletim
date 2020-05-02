import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/report",
    name: "ReportCard",
    component: () =>
      import( "../views/Report.vue")
  },
  {
    path: "/report/:code",
    name: "ReportCardDetails",
    component: () =>
      import( "../views/ReportDetails.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
