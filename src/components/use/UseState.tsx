import {useState} from "react";

function generateData() {
    console.log("generateData");
    return 1
}

export const UseState = () => {

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData);
    console.log("UseState")

    return (
        <>
            <button onClick={() => setCounter((state) => state + 1)}>+</button>
            {counter}
        </>
    );
};

