import React from "react";

const Categories = ({items, onSetActiveCategory, category}) => {
    return (
        <div className="categories">
            <ul>
                <li className={category === -1 ? 'active' : ''} onClick={()=>onSetActiveCategory(-1)}>Все</li>
                {items && items.map((name, i)=>{
                    return <li className={category === i && 'active'} onClick={()=>onSetActiveCategory(i)} key={name}>{name}</li>
                })}
            </ul>
        </div>
    )
}

export default Categories;