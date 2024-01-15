/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ children, onClick }) => {
    return (
        <>
            <button className="button" onClick={onClick}>
                {children}
            </button>
        </>
    );
};

export default Button;
