const toDoReducer = (state = { list: [] }, action) => {
    switch(action.type){
        case "ADD_ITEM":
            state = {
                ...state,
                list: [...state.list, action.payload]
            }
            break;
        case "REMOVE_ITEM":
            state = {
                ...state,
                list: [...state.list, action.payload]
            }
            break;
    }
    return state;
};

export default toDoReducer;