
"use strict"

import axios from 'axios';

import qs from 'qs'
// import router from '../router/index'
// import $ from 'jquery'

const url = 'http://10.3.135.36/';


const ispatch = function getPach(path){
	if(path.startsWith('http')){
		return path;
	}
	return `${url}${path}`;
}


export default{
	get:(path, query) => new Promise((resolve, reject) => {
		
		// if(!window.localStorage.getItem('access_token')){
		// 	return false;
		// }
		var _url = ispatch(path);
		axios({
			url:_url,
			method:'get',
			dataType: 'JSON',
			data:qs.stringify(query),
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded'
			}

		}).then((res)=>{
			if (res) {
				resolve(res);
            } else {
                reject(err);
			}
		})
	}),



	post: (path, query) => new Promise((resolve, reject) => {
		// if(!window.localStorage.getItem('access_token')){
		// 	return false;
		// }
		var _url = ispatch(path);
		axios({
			url:_url,
			method:'post',
			dataType: 'JSON',
			data:qs.stringify(query),
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded'
			}

		}).then((res)=>{
			if (res) {
				resolve(res);
            } else {
                reject(err);
			}
		})
	})
}