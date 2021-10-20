import React from 'react'
function StoreItem({name, price, inventory, addToCart, id}) {
    return (
        <div>
            <h1>{name}</h1>
            <span>${price.toFixed(2)}</span>
            <div></div>
            <button onClick={()=>{addToCart(id)
            }}>
                Buy Me!
                </button>
            <div></div>
            <span> ({inventory} available)</span>
        </div>
    )
}

export default StoreItem
