import React, {useState} from 'react'
import FriendList from './FriendList'

const Friend = ({name}) => {

    const [isLiked, setLiked] = useState(true)
    return (
        <div>
            {name}
        </div>
    )
}

export default Friend