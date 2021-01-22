export const addPizzasBuy= (payload) => ({
    type: 'ADD_PIZZAS_BUY', payload
})
export const setTotalPrice = price => ({
    type: 'SET_TOTAL_PRICE', payload: price
})
export const setTotalCount = count => ({
    type: 'SET_TOTAL_PIZZAS', payload: count
})
export const deleteCartPizzas = () => ({
    type: 'DELETE_CART_PIZZAS'
})
export const deletePizzaFromCart = obj => ({
    type: "DELETE_PIZZA_FROM_CART", payload: obj
})
