import React from 'react'
function StoreItem({id, name, price, inventory}) {
    return (
        <li>
            {name}   {price} ({inventory} remaining)
        </li>
    )
}

export default StoreItem
