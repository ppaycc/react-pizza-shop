export const fetchPizzas = (type, sort) => {
    return dispatch => {
        dispatch(setLoaded(false));
        const str = type === -1 ? `` : `&category=${type}`;
        let str2 = `?_sort=${sort}&_order=desc`;
        fetch('http://localhost:3001/pizzas' + str2 + str).then(res=>res.json()).then(data=>{
            dispatch(setPizzas(data));
            dispatch(setLoaded(true));
        })
    }
}
const setLoaded = flag => ({
    type: "SET_LOADED", payload: flag
})
export const setPizzas = (items) => ({
    type: "SET_PIZZAS",
    payload: items
});