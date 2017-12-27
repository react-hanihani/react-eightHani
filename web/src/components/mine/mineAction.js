export function mineAll(_url,_status){
    return {
        type:'all',
        url:_url,
        method:'post', 
        params:{status:_status || ''}
    }
}