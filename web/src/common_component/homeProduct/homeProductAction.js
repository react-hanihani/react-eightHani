export function getHome(_id){
	console.log(_id)
	return {
		type:'home',
		params:_id
	}
}
