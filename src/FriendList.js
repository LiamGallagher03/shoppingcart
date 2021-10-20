import React, {useState} from 'react'

const FriendList = () => {
    const [friends,setFriends] = useState([
        {
            id: 1,
            name: "Friend One"
        },
        {
            id: 2,
            name: "Friend Two"
        },
        {
            id: 3,
            name: "Friend Three"
        }
    ])
    return ( 
        <div>
            {friends.map((friend) => 
                <FriendList 
                    id = {friend.id}
                    key = {friend.id}
                    name = {friend.name}
                />
                )}
        </div>
    )
}

export default FriendList
