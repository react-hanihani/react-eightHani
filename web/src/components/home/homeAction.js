export function getHomeProduct(){
	return {
		type: 'index',
		method:'get',
		url: "products.php"
	}
}

export function getHome(_id){
	return {
		type:'home',
		params:_id
	}
}