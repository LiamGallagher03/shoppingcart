import React, { useState } from 'react'
import StoreItem from './StoreItem'

const Store = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Iron Plate",
            price: 1.50,
            inventory: 228
        },
        {
            id: 2,
            name: "Iron Ingot",
            price: 1.00,
            inventory: 789
        },
        {
            id: 3,
            name: "Iron Rod",
            price: 1.50,
            inventory: 422
        },
        {
            id: 4,
            name: "Pack of 100 Screws",
            price: 3.75,
            inventory: 98
        },
        {
            id: 5,
            name: "Reinforced Iron Plate",
            price: 6.48,
            inventory: 39
        }
    ])

        const addToCart = (id) => {
            const item = items.find(item => item.id == id)
            alert(item.name)
        }

    return (
        <div>
            <section>
                {items.map((item) =>
                    <StoreItem
                        name={item.name}
                        id={item.id}
                        price={item.price}
                        inventory={item.inventory}
                        key = {item.id}
                        addToCart = {addToCart}
                    />
                )}
            </section>
        </div>
    )
}

export default Store

