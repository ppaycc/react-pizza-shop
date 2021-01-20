const initialState ={
    pizzas: [],
    totalPrice: 0
}

const cart = (state = initialState, action) => {
    switch (action.type){
        case "SET_SORT_BY" :{
            return {...state, sortBy: action.payload}
        }
        case "SET_CATEGORY" :{
            return {...state, category: action.payload}
        }
        default :{
            return state;
        }
    }
}

export default cart;