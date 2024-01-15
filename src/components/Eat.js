import React from "react";
import { useState } from "react";

import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

const Eat = () => {
    const initialFriends = [
        {
            id: 118836,
            name: "Clark",
            // image: "https://i.pravatar.cc/48?u=118836",
            image: "./images/friends/1.png",
            balance: -7,
        },
        {
            id: 933372,
            name: "Sarah",
            // image: "https://i.pravatar.cc/48?u=933372",
            image: "./images/friends/2.png",
            balance: 20,
        },
        {
            id: 499476,
            name: "Anthony",
            // image: "https://i.pravatar.cc/48?u=499476",
            image: "./images/friends/3.png",
            balance: 0,
        },
        {
            id: 499477,
            name: "mazen",
            // image: "./images/friends/1.png",
            image: "./images/friends/1.png",
            balance: 0,
        },
    ];

    const [showAddFriend, setShowAddFriend] = useState(false);
    const [friends, setFriends] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleShowAddFriend() {
        setShowAddFriend((show) => !show);
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
        setShowAddFriend(false);
    }

    function handleSelection(friend) {
        // setSelectedFriend(friend);
        setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
        setShowAddFriend(false);
    }

    function handleSplitBill(value) {
        // console.log(``, value);
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );

        setSelectedFriend(null);
    }

    return (
        <>
            <div className="eat">
                <div className="container">
                    <div className="sidebar">
                        <FriendsList
                            friends={friends}
                            selectedFriend={selectedFriend}
                            onSelection={handleSelection}
                        />

                        {showAddFriend && (
                            <FormAddFriend onAddFriends={handleAddFriend} />
                        )}

                        <Button onClick={handleShowAddFriend}>
                            {showAddFriend ? `Close` : `Add Friend`}
                        </Button>
                    </div>

                    {selectedFriend && (
                        <FormSplitBill
                            selectedFriend={selectedFriend}
                            onSplitBill={handleSplitBill}
                            key={selectedFriend.id}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default Eat;
