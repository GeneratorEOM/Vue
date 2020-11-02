import Vue from "vue";
import VueRouter from "vue-router";
import Create from "@/components/Create"
import Board from "@/components/Board"
import ContentDetail from "@/components/ContentDetail"

Vue.use(VueRouter);

const routes = [
  
  {
    path: "/board/free",
    name: "Board",
    component: Board
  },
    {
    path: "/board/free/detail/:contentId",
    name: "ContentDetail",
    component: ContentDetail
  },
  {
    path: "/board/free/create/:contentId?",
    name: "Create",
    component: Create
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
