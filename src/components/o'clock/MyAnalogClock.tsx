import {useRef} from "react";
import s from "./ArrowClock.module.css";
import type {IClock} from "./clock.interface.ts";


export const MyAnalogClock = ({
    date
                              }: IClock) => {
    const hoursRef = useRef<HTMLSpanElement>(null);
    const minutesRef = useRef<HTMLSpanElement>(null);
    const secondsRef = useRef<HTMLSpanElement>(null);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const angles = {
        hours: (hours % 12) * 30 + minutes / 2,
        seconds: seconds * 6,
        minutes: minutes * 6 + seconds / 10,
    };

    if (hoursRef.current) hoursRef.current.style.transform = `rotate(${angles.hours}deg)`;
    if (minutesRef.current) minutesRef.current.style.transform = `rotate(${angles.minutes}deg)`;
    if (secondsRef.current) secondsRef.current.style.transform = `rotate(${angles.seconds}deg)`;

    return (
        <div className={s.circle}>
            <span ref={minutesRef} className={`${s.arrow} ${s.minutes}`}></span>
            <span ref={secondsRef} className={`${s.arrow} ${s.second}`}></span>
            <span ref={hoursRef} className={`${s.arrow} ${s.hours}`}></span>

            <span className={`${s.hour} ${s.top}`}></span>
            <span className={`${s.hour} ${s.bottom}`}></span>
            <span className={`${s.hour} ${s.right}`}></span>
            <span className={`${s.hour} ${s.left}`}></span>
        </div>
    );
};