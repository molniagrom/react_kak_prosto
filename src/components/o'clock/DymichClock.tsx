import {useEffect, useState} from "react";
import {ArrowClock} from "./ArrowClock.tsx";

const get2digitsString = (number: number) => number < 10 ? `0${number}` : number;

export const DymichClock = () => {
    const [circle, setCircle] = useState<boolean>(false);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const int = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(int)
        }
    }, [])

    return (
        <div>
            <button onClick={() => setCircle(!circle)}>switch</button>
            <br/>
            {circle
                ?
                <>
                    <span>{get2digitsString(date.getHours())}</span>
                    :
                    <span>{get2digitsString(date.getMinutes())}</span>
                    :
                    <span>{get2digitsString(date.getSeconds())}</span>
                </>
                : <ArrowClock
                    hours={date.getHours()}
                    minutes={date.getMinutes()}
                    seconds={date.getSeconds()} />
            }
        </div>
    );
};

