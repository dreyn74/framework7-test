// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Framework7 from "framework7/dist/framework7.esm.bundle.js";
// Import F7 Vue Plugin
import Framework7Vue from "framework7-vue/dist/framework7-vue.esm.bundle.js";
//import framework7Icons from "framework7-icons";

// Import F7 Styles
import App from "./App";
import router from "./router";

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7);
Vue.config.productionTip = false;

// Init App
/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<app/>",
  router,
  // Init Framework7 by passing parameters here
  framework7: {
    id: "io.framework7.testapp", // App bundle ID
    name: "Framework7", // App name
    theme: "auto", // Automatic theme detection
    // App routes
    routes: router,
    panel: {
      swipe: "both",
      leftBreakpoint: 768,
      rightBreakpoint: 1440
    }
  },
  // Register App Component
  components: {
    app: App
  }
});
