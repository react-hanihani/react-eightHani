



export function msg1(msg){
	console.log('11111111111111111',msg);
	return{
		type:'Requested',
		url: 'carlist.php',
		params:msg,
		method:'get'
	}
}



export function writePhp(msg){
	return{
		types:'prs',
		url: 'address.php',
		params:msg
	}
}






export const car_gblock=(car_state)=>{
	return{
		type:'carRouter',
		carUrl:car_state,
	}
}




export const dataCb=(datacb)=>{
	return{
		type:'count_data',
		count_data:datacb,
	}
}




export const TPrice=(tprice,number)=>{
	return{
		type:'tprice',
		countPrice:tprice,
		goodNumber:number
	}
}




export const goods_arr=(arr)=>{
	return{
		type:'good_arr',
		arr:arr,
		
	}
}


export function place(msg){
	return{
		types:['beforeRequest', 'Requested', 'requestError'],
		url: 'carlist.php?'+msg
	}
}




