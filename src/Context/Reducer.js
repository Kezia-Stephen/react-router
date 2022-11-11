
export const initialState = {
    age: 24, 
    tasks:[],
    name: " "
}
//action => type, payload
// export const stateReducer = (state, action) => {
//     console.log("Action object", action);
//     if(action.type === 'increment_age'){
//         return {
//             ...state,
//             age: state.age+1,
            
//         };
//     }
//     else if (action.type === 'add_task'){
//         return {
//             ...state,
//             tasks: action.payload
//         };
//     }
//     else return state;
// };

//write the above if-else in switch case
export const stateReducer = (state, action) => {
    console.log("Action object", action);
    switch (action.type){
        case 'increment_age': {
            return {
                ...state,
                age: state.age+1,   
            };
        }
        case 'add_task': {
            return {
                ...state,
                tasks: action.payload
            };
        }
        case 'update_name': {
            return {
                ...state,
                name:action.payload
            }
        }
        default:
            return state;
    }
};