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


