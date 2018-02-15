import Vue from "vue";
import Router from "vue-router";
import Hello from "../components/Hello";
import PanelLeftPage from "../components/panel-left";
import PanelRightPage from "../components/panel-right";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello
    },
    { path: "/panel-left/", component: PanelLeftPage },
    { path: "/panel-right/", component: PanelRightPage }
  ]
});
