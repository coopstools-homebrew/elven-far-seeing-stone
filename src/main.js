import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import Router from 'vue-router'
import Meta from 'vue-meta'

import HelloWorld from "./components/HelloWorld";
import Users from "./components/Users";
import Namespaces from "./components/Namespaces";

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Router)
Vue.use(Meta)

const router = new Router({
    routes:[
        {
            path: "/",
            name: "home",
            component: HelloWorld,
            props: {
                msg: "Welcome!!"
            }
        }, {
            path: "/users",
            name: 'users',
            component: Users,
        }, {
            path: '/ns',
            name: 'namespace',
            component: Namespaces
        }
    ],
    mode: "history"
})

new Vue({
  render: h => h(App),
  router
})
