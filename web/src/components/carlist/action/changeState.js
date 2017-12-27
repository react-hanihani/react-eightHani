"use strict"

import axios from 'axios';

import qs from 'qs'



export default function changeState(query){
		console.log('-----------',query)
	console.log(query);
		axios({
			url:'http://10.3.135.36/123/api/php/changeOrder.php',
			method:'post',
			data: qs.stringify(query),
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).then(res1=>{
			console.log(999);
		})
	
}

