import {useEffect, useState} from "react";

const get2digitsString = (number: number) => number < 10 ? `0${number}` : number;

export const DymichClock = () => {
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
            <br/>
                <>
                    <span>{get2digitsString(date.getHours())}</span>
                    :
                    <span>{get2digitsString(date.getMinutes())}</span>
                    :
                    <span>{get2digitsString(date.getSeconds())}</span>
                </>
        </div>
    );
};

