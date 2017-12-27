export default function getParams(state={},action){
    var newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'detail':
            newState.response = action.response;
            break;

        case 'buyCar':
            newState.carStatus = action.response;
            break;
    }
    return newState
}