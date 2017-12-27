export function getData(_url,_params={}){
    return {
        type:'query',
        url : _url,
        params:_params
    }
}

export function getParams(_params,_shows){
    return {
        type:"param",
        params:_params,
        shows:_shows
    }
}