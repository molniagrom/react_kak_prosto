import {DymichClock} from "./DymichClock.tsx";
import {MyAnalogClock} from "./MyAnalogClock.tsx";
import {useEffect, useState} from "react";
import {StolenAnalogClock} from "./StolenAnalogClock.tsx";

type ClockElements = {
    mode: "analog" | "digital" | "stolen"
};

export const Clock = ({mode}: ClockElements) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const int = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(int)
        }
    }, [])

    let view;
    switch (mode) {
        case 'analog':
            view = <MyAnalogClock date={date}/>
            break;
        case 'digital':
            view = (
                <DymichClock date={date}/>
            );
            break;
        case "stolen":
            view = (
                <StolenAnalogClock date={date}/>
            );

    }

    return (
        <div>
            {view}
        </div>

    );
};

