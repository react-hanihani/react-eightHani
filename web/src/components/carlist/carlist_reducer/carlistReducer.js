

export function carlistGoods(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'beforeRequest':
            newState.status = 0;
            break;
        case 'Requested':
            newState.status = 1;
            newState.response = action.response.data1;
            break;
        case 'requestError':
            newState.status = -1;
            newState.error = action.error
            break;
    }
    return newState;
}



export function writePHP(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'beforeRequest':
            newState.status = 0;
            break;
        case 'Requested':
            newState.status = 1;
            newState.response = action.response;
            break;
        case 'requestError':
            newState.status = -1;
            newState.error = action.error
            break;
    }
    return newState;
}




export function carlistUrl(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'carRouter':
            newState.status = action.carUrl;
            break;

    }
    return newState;
}




export function dataChange(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'count_data':
            newState.status = action.count_data;
            break;

    }
    return newState;
}




export function Price(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'tprice':
            newState.status = action.countPrice;
            newState.number = action.goodNumber;
            break;
            default:
            newState.status = 0;
            newState.number = 0;

    }
    return newState;
}




export function good_arrs(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'good_arr':
            newState.status = action.arr;
            break;

    }
    return newState;
}



