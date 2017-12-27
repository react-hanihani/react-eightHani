export default function DataGridReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'index':
            newState.status = 1;
            newState.response = action.response;
            
            break;
        case 'requestError':
            newState.status = -1;
            newState.error = action.error
            break;
           
        case 'home':
        	newState.id = action.params
        	break;
    }

    return newState;
}