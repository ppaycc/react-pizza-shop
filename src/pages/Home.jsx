import {Categories, SortPopup, Pizza, PizzaLoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";

import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import {useEffect} from "react";
import {addPizzasBuy} from "../redux/actions/cart";
const arrCategory = ['Мясные', 'Вегитарианские', 'Гриль', 'Острые', 'Закрытые']
const arrSort = [{name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'name'}]


const Home = () => {
    const dispatch = useDispatch();
    const category = useSelector(state=>state.filters.category);
    const sortBy = useSelector(state=>state.filters.sortBy);
    const isLoaded = useSelector(state=>state.pizzas.isLoaded);
    const cartPizzas = useSelector(state=>state.cart.pizzas);
    const pizzas = useSelector(state=>state.pizzas.items);

    const onSetActiveCategory = index => {
        dispatch(setCategory(index));
    }
    const onSetSortType = type => {
        dispatch(setSortBy(type))
    }
    const addPizza = pizza => {
        dispatch(addPizzasBuy(pizza));
    }
    useEffect(()=>{
        dispatch(fetchPizzas(category, sortBy));
    },[dispatch, category, sortBy])

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={arrCategory} onSetActiveCategory={onSetActiveCategory} category={category}/>
                <SortPopup items={arrSort} onSetSortType={onSetSortType} sortBy={sortBy}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? pizzas.map(item => (
                    <Pizza key={`${item.id}_pizza`} {...item} addPizza={addPizza}
                    addedCount={cartPizzas[item.id] && cartPizzas[item.id].length}/>
                )) : Array(12).fill(<PizzaLoadingBlock/>)}
            </div>
        </div>
    )
}

export default Home;