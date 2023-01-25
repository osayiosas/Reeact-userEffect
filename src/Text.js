import React from "react";
import { useState, useEffect } from "react"

export const Text = () =>
{
    const [text, setText] = useState("");

    useEffect(() =>
    {
        console.log("componentMouthed");

        return () =>
        {
            console.log("Component unmouthed")
        }
    },[text]);

    return (
        <div>
            <input
                onChange={(e) =>
                {
                    setText(e.target.value)
                }} />;
          
            <h1>{text}</h1>;
        </div>
    );
};

export default Text
