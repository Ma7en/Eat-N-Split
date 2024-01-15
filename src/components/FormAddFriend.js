/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onAddFriends }) => {
    const [name, setName] = useState("");
    // image: "https://i.pravatar.cc/48?u=118836",
    // image: "./images/friends/2.png",
    // const [image, setImage] = useState("https://i.pravatar.cc/48");
    const [image, setImage] = useState("./images/friends/");

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !image) return;

        const id = crypto.randomUUID();
        const nu = Math.floor(Math.random() * 3 + 1);
        const newFriend = {
            id,
            name,
            // image: `${image}?=${id}`,
            image: `${image}${nu}.png`,
            balance: 0,
        };
        // console.log(``, newFriend);
        onAddFriends(newFriend);

        setName("");
        setImage("./images/friends/");
        // setImage("https://i.pravatar.cc/48");
    }

    return (
        <>
            <form className="form-add-friend" onSubmit={handleSubmit}>
                <label>🧑‍🤝‍🧑 Friend Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>🏞️ Image URL</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    disabled
                />

                <Button>Add</Button>
            </form>
        </>
    );
};

export default FormAddFriend;
