export default function LightReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "beforeRequest":
            newState.status = '0'
            break;
        case 'query':
            newState.status = '1';
            newState.response = action.response;
            break;
        case 'param':
            newState.id = action.params
            newState.shows = action.shows
            break;

    }

    return newState;
}