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

    return (
        <div>
            <section>
                {items.map((item) =>
                    <StoreItem
                        id={item.title}
                        name={item.name}
                        price={item.price}
                        inventory={item.inventory}
                    />
                )}
            </section>
        </div>
    )
}

export default Store

