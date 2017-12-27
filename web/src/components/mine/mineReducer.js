export default function reducer(state={},action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){

        case 'all':
            newState.response = action.response;
            break;
    }
    return newState;
}