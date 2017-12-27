export function getDateset(_url,_id){
    return {
        type:'detail',
        params:_id,
        url:_url
    }
}

export function getBuyCar(_url,_product){
    return {
        type:'buyCar',
        url:_url,
        params:_product
    }
}