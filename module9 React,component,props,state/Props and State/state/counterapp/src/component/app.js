import React from "react";
import { useState } from "react";



const App = () => {
    
    const [counter, setCounter] = useState(0);

    const handleClick1 = () => {
        setCounter(counter + 1);
    };

    const crementedhandleClick2 = () => {
        setCounter(counter - 1);
    };

}

export default app