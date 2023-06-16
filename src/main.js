import Vue from 'vue'
import './plugins/axios'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);

// const service = axios.create({
// 	// baseURL: 'http://chenyp.top:8008', // url = base url + request url
// 	baseURL: 'http:/192.168.43.128/api/user/login:8082', // url = base url + request url
// 	// withCredentials: true, // send cookies when cross-domain requests
// 	timeout: 5000 // request timeout
//   })

// axios.defaults.baseURL = "http:/192.168.43.128:8082"
// axios.defaults.withCredentials = false// Cookie跨域


new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})