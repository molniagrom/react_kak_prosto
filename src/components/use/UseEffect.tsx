import {useState, useEffect} from 'react';

export default {
    title: 'useEffect demo',
};

export const SimpleExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log('SimpleExample');

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
        // Здесь можно разместить побочные эффекты, например:
        // api.getUsers().then(...)
        // setInterval(...)
        // indexedDB
        // document.getElementById(...)
        // document.title = 'User';
    });

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = counter.toString();
    }, []);

    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString();
    }, [counter]);

    return (
        <>
            <div>Hello, {counter} {fake}</div>
            <button onClick={() => setFake(fake + 1)}> fake +</button>
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
        </>
    );
};

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log('SimpleExample');

    // useEffect(() => {
    //     console.log('useEffect');

    // setInterval(() => {
    //     console.log("setInterval")
    //     setCounter(state => state + 1);
    // }, 1000)
    // }, []);

    return (
        <>
            <div>Hello, counter: {counter} - fake: {fake}</div>
            <button onClick={() => setFake(fake + 1)}> fake +</button>
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
        </>
    );
};

export const ResetEffect = () => {
    const [counter, setCounter] = useState(1);

    console.log("ResetEffect")

    useEffect(() => {
        console.log('Effect occurred ' + counter);

        return () => {
            console.log('reset effect ' + counter);
        }
    }, [counter])

    const inCrease = () => {
        setCounter(counter + 1)
    }

    return <>
        Hello counter: {counter}
        <button onClick={inCrease}>+</button>
    </>
}

export const KeyTracker = () => {
    const [text, setText] = useState("");

    console.log("Component rendered with " + text);

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText((state) => state + e.key);
        }

        window.document.addEventListener("keypress", handler)

        return () => {
            window.document.removeEventListener("keypress", handler)
        }

    }, [text])

    return <>
        Typed Text: {text}
    </>
}
export const SetTimeout = () => {
    const [text, setText] = useState("");

    console.log("Component rendered with " + text);

    useEffect(() => {
       const toi =  setTimeout(() => {
            console.log("TIMEOUT EXPIRED")
            setText("3 seconds");
        }, 3000)
        return () => {
            clearTimeout(toi)
        }

    }, [text])

    return <>
        Typed Text: {text}
    </>
}
