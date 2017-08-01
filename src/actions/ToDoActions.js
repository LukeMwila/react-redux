export function addItem(item){
    let url = "http://localhost/dummyAPI/index.php?item=" + item;
    return dispatch => {
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(parsedData) {
                dispatch({
                    type: "ADD_ITEM",
                    payload: item
                });
            })
    }
}

export function itemsHasErrored(bool){
    return{
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool){
    return{
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

