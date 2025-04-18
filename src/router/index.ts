import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Stats from "../pages/Stats.vue";
import Edit from "../components/notes/form/Edit.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/edit/:id",
    name: "edit-note",
    component: Edit,
  },
  {
    path: "/stats",
    name: "Stats",
    component: Stats,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
