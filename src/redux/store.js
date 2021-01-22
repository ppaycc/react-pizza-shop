import {combineReducers, createStore, applyMiddleware } from "redux";
import pizzasReducer from "./reducers/pizzas";
import filtersReducer from "./reducers/filters";
import thunk from 'redux-thunk';
import cart from "./reducers/cart";

const rootReduced = combineReducers({
    pizzas: pizzasReducer,
    filters: filtersReducer,
    cart
})

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReduced,  applyMiddleware(thunk));

export default store;