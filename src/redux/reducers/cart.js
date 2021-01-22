const initialState ={
    pizzas: {},
    totalPrice: 0,
    totalPizzas: 0
}

const cart = (state = initialState, action) => {
    switch (action.type){
        case "ADD_PIZZAS_BUY" :{
            const newItems = {
                ...state.pizzas,
                [action.payload.id]: !state.pizzas[action.payload.id]
                    ?  [action.payload]
                    :  [...state.pizzas[action.payload.id], action.payload]
            }
            const arr = [].concat.apply([], Object.values(newItems));
            return {...state,
                pizzas: newItems,
                totalPizzas: arr.length,
                totalPrice: arr.reduce((acc, init) => init.price + acc, 0)
            }
        }
        case "SET_TOTAL_PRICE" :{
            return {...state, totalPrice: action.payload}
        }
        case "SET_TOTAL_PIZZAS" :{
            return {...state, totalPizzas: action.payload}
        }
        case "DELETE_CART_PIZZAS" :{
            return {...state, pizzas: {}, totalPrice: 0, totalPizzas: 0}
        }
        case "DELETE_PIZZA_FROM_CART" :{
            const {id, type, size} = action.payload;
            let flag = true;
            let newItem = {
                ...state.pizzas,
                [id]: state.pizzas[id].filter(obj=>{
                    if(obj.type===type && obj.size===size && flag){
                        flag = false
                        return false
                    } else{
                        return true
                    }
                })
            }
            const arr = [].concat.apply([], Object.values(newItem));
            return {
                ...state,
                pizzas: newItem,
                totalPrice: arr.reduce((sum, obj) => sum + obj.price ,0),
                totalPizzas: arr.length
            }
        }
        default :{
            return state;
        }
    }
}

export default cart;