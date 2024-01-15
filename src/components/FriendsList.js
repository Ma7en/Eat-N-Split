/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Friend from "./Friend";

const FriendsList = ({ friends, onSelection, selectedFriend }) => {
    return (
        <>
            <ul>
                {friends.map((friend) => (
                    <Friend
                        friend={friend}
                        selectedFriend={selectedFriend}
                        onSelection={onSelection}
                        key={friend.id}
                    />
                ))}
            </ul>
        </>
    );
};

export default FriendsList;
