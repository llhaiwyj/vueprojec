// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
//import globalFrom from './Public/public'
import storage from './assets/js/todo_list.js'
import md5Util from './assets/js/MD5Util.js'

import './assets/icon/iconfont.css'
import ss from './assets/js/verification.js'
import "./assets/css/shopcategory.css"
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


Vue.use(ElementUI)
Vue.prototype.changeMenuBtn = function (menuId){
  let listBtn=this.$storage.fetch("menuBtn");
        console.log(menuId)
        let list=[];
        listBtn.forEach(function(item){
		//console.log(index);
		 if(item.menuId == menuId){
		 //	console.log(item.btnSort)
		    list.push("")
		 	if(item.btnSort == 1){
		 		
		 		list[0]=item.btnName
		 		
		 		
		 	}else if(item.btnSort == 2){
		 		list[1]=item.btnName
		 	}else if(item.btnSort == 3){
		 		list[2]=item.btnName
		 	}else if(item.btnSort == 4){
		 		list[3]=item.btnName
		 	}else if(item.btnSort == 5){
		 		list[4]=item.btnName
		 	}else if(item.btnSort == 6){ 
		 	    list[5]=item.btnName
		 	}
		 	
		 	//list.push(item.btnName);
		 	
		 }
		});
		//console.log(list[3])
		return list
}
//Vue.prototype.$validator=Validator;

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
axios.defaults.withCredentials=true;
Vue.prototype.$url='http://172.19.66.255:8081/new-xyykt-manager';
Vue.prototype.$imgurl='http://ykttest.oss-cn-beijing.aliyuncs.com/';
Vue.prototype.$delurl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAABQCAYAAADLPJ1qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCODg1QzVGNDQ0QTExRTg4OEMwRUE0NTNCRTM5QUY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCODg1QzYwNDQ0QTExRTg4OEMwRUE0NTNCRTM5QUY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0I4ODVDNUQ0NDRBMTFFODg4QzBFQTQ1M0JFMzlBRjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0I4ODVDNUU0NDRBMTFFODg4QzBFQTQ1M0JFMzlBRjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5blmR4AAACBklEQVR42uzcT0vcQBgH4En1Yv0DObRFxO//qfYkXvQQ2FbbixsnEDSbza5vWgrj5nkgMBJ2A/HnvJM3idVqtWpTSlV616Zt1ehn+5e7vz1Nu6p0mP0L3v8lwQwCw+zAVE4DQZUZBiUJgaGgwLROA0GtGQYlCYGhoMDowxClD4OShMBQUmD0YYjSh0FJQmAoKTD6METpw6AkITCUonvNpF3yOqZpmp06nbfLfvwzfdCnqut6Sadr8r2kpTvL210/vs7bs1OyPcOwW6avlGxrmPC0u2dM0odhHn0YlCQEhpICY2FH+ILADIOShMBQUGD0YYjSh5nwtGdMOvJ7SU3TfO1n0U3wIy/p/T5S51ve1nk7OXCM8Yy9qev6WWA+X1i6X/x93i7+4Wse/uIzv/Kxb3Jo1se6htGHIeqon4fpHn76MfOPoitJl4OZ5Xv/PSfRRWFf/n4rSZ9MLgldSD5cS0w8cfdnMH4MHGdxl9VsO98zJunDMI8+DEoSAkNJgdGHIcrzMChJCAwlBUYfhih9mKmTsmdM8m71lO7m4XowRmAO6u403w7GjAKz6P8PM3G3uR3MMIzOjTUMLqsRGAoKjEtHovRhUJIQGEoKjOdhiNKHQUlCYCgpMPowROnDoCQhMJQUGH0YovRhUJIQGEoKjD4MUfowKEn8R6cTl9XjEmW//W9eBRgAu3dvMZLBYtwAAAAASUVORK5CYII=';
//将常用工具方法扩展成Vue实例
Vue.prototype.$storage=storage;
Vue.prototype.$storage1=ss;
Vue.prototype.$utilMd5s= md5Util;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://172.19.66.255:8080';
axios.interceptors.request.use((config) => {
if(config.method  === 'post'){
    config.data = qs.stringify(config.data);
}
return config;
},(error) =>{
return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
　　// 对响应数据做点什么
   
　　return response
}, function (error) {
　　// 对响应错误做点什么
console.log(error)
//error.response== undefined ||
　if(error.response.status == 4044){
	　// 对响应错误做点什么
	    storage.save("menuList","");
		storage.save("menuBtn","");
		storage.save("isAdmin","");
		storage.save("buss","");
		storage.save("bussiness","");
		storage.save("bussinessstore","");
    storage.save("examshuju", "");
    storage.save("bianhao","");
    router.push({name:'login'})
　　return Promise.reject(error.response.data.message)
}
　return Promise.reject(error)
});
/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
