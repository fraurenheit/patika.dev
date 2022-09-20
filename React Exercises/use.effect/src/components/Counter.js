import { useState, useEffect } from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Irem");

    //we must use dependences array ([])
    useEffect(() => {
        console.log("components mounted.");

        setInterval(() => {
            setNumber((n) => n+1);
        },1000);

        return () => console.log("Components has been unmaunted.");
    }, []);

    useEffect(() => {
    console.log("number state has been updated.");
}, [number]);

    return (
        <div className="App">
    <h1>{number}</h1>
    <button onClick={() => setNumber(number + 1)}>Click</button>
        </div>
    );
}

export default Counter;