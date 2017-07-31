//let nextTodoId = 0;
export function addItem(item){
    return{
        type: "ADD_ITEM",
        payload: item
    }
}

/*      
export function addItem(item){
    return{
        type: "ADD_ITEM",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(item);
            }, 1000);
        })
    }; 
}
*/
