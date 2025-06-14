import React, {useReducer} from 'react';

const initialState = { count : 0};

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            return state;
    }
}
function UseRed(){
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            count : {state.count}
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>decremant</button>
        </div>
    )
}
export default UseRed;