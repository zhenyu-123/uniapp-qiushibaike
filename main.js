import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
// 注册全局组件
import divders from "@/components/common/divider.vue";
Vue.component("divders", divders)
const app = new Vue({
	...App
})
app.$mount()
