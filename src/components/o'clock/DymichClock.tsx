import type {IClock} from "./clock.interface.ts";

const get2digitsString = (number: number) => number < 10 ? `0${number}` : number;

export const DymichClock = ({date}: IClock) => {

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

