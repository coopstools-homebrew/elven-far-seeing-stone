import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import Router from 'vue-router'
import Meta from 'vue-meta'
import VueGoogleCharts from 'vue-google-charts'

import HelloWorld from "./components/HelloWorld";
import Users from "./components/Users";
import Namespaces from "./components/Namespaces";
import Federation from "./components/Federation";

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Router)
Vue.use(Meta)
Vue.use(VueGoogleCharts)

const url_prefix = "/quizzle_parse";

const router = new Router({
    routes: [
        {
            path: url_prefix + "/",
            component: HelloWorld,
            props: {
                msg: "friend"
            }
        }, {
            path: url_prefix + "/h/:msg",
            component: HelloWorld,
            props: true
        }, {
            path: url_prefix + "/users",
            component: Users,
        }, {
            path: url_prefix + "/ns",
            component: Namespaces
        }, {
            path: url_prefix + "/the-fed",
            component: Federation
        }
    ],
    mode: "history"
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
