import {useEffect, useState} from "react";

export const MyClock = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            setHours(now.getHours())
            setMinutes(now.getMinutes())
            setSeconds(now.getSeconds())
        }, 1000)
    }, []);

    return (
        <>
            <div>{`${hours}:${minutes}:${seconds}`}</div>
        </>
    );
};

