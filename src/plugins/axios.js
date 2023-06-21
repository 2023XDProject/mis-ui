"use strict";

import Vue from 'vue';
import axios from "axios";
// 引入提示信息弹框服务  引入loading服务
import {Message, Loading} from 'element-ui'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
	//基础的路径
	baseURL: 'http://192.168.43.128:8082'
  //baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

//利用上面的 config配置，生成对应的变量
const _axios = axios.create(config);

//请求时需要的事情
_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
//收到相应后打算做什么
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

//人为制作同步
const sync_request = async (url, method, params) => {
	const hanConfig = {
		url: url,
		method: method,
	}
	if(method === 'get') {
		//get方式的数据是 params
		hanConfig.params = params
	} else {
		//post方式的数据是 data
		const formData = new FormData()
		for(let key in params) {
			formData.append(key, params[key])
		}
		hanConfig.data = formData
	}
	
	//request=== get或者post
	const result = await _axios.request(hanConfig)
	return result //拿到then中返回的值
}

const han_request = (url, method, params, callback) => {
	//document.write("加入loading服务")
	// 请求之前先加入loading服务
	let loadingInstance = Loading.service({
		lock: true,  //在出现加载圈时不允许干其他事
		text: 'Loading', //加载时的提示信息
		spinner: 'el-icon-loading', //加载时的图标
		background: 'rgba(0, 0, 0, 0.7)'
	});
	
	const hanConfig = {
		url: url,
		method: method,
	}
	if(method === 'get') {
		//document.write("加入loading服务---get")
		//get方式的数据是 params
		hanConfig.params = params
	} else {
		//document.write("加入loading服务----不是get")
		//post方式的数据是 data
		const formData = new FormData()
		for(let key in params) {
			if(params[key] instanceof Array) {
				//是数组
				for(let i = 0; i < params[key].length; i++) {
					formData.append(key, params[key][i])
				}
			} else {
				formData.append(key, params[key])
			}
		}
		hanConfig.data = formData
	}
	
	// //request=== get或者post
	// _axios.request(hanConfig).then(response => {
	// 	if(response.data.code === 200000) {
	// 		//callback表示：请求成功后需要运行的代码
	// 		callback(response.data)
	// 	} else {
	// 		//把报错信息做一个提示
	// 		Message.error(response.data.message)
	// 	}
	_axios.request(hanConfig).then(response => {
		if(response.data.code === '200000') {
			//callback表示：请求成功后需要运行的代码
			//document.write("登录成功")
			callback(response.data)
		} else {
			callback(response.data)
			//document.write("登录失败")
			//document.write("请求失败")
			//把报错信息做一个提示
			//Message.error(response.data.message)
		}
		
	}).catch(error => {
		//Message.error(error)
	}).finally(() => {
		//无论如何都要执行
		//此处是关闭loading服务
		loadingInstance.close()
	})
}

const han_post = (url, params, callback) => {
	han_request(url, 'post', params, (response) => {
		if(response.code === '200000') {
			//alert("登录成功"); 
			//document.write("登录成功")
			//Message.success(response.message)
			callback(response)
		}else{
			callback(response)
			//document.write("登录失败")
			//alert("登录失败"); 
		}
		//document.write("调用回到函数")
		//判断完流程后，调用回到函数
		//callback(response)
	})
}

const han_get = (url, params, callback) => {
	han_request(url, 'get', params, callback)
}
 

//自定义全局的属性或函数
Vue.prototype.sync_request = sync_request
Vue.prototype.myRequest = han_request
Vue.prototype.myPost = han_post
Vue.prototype.myGet = han_get