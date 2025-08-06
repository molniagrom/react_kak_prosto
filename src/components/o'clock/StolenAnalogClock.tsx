import type {IClock} from "./clock.interface.ts";

export const StolenAnalogClock = ({date}: IClock) => {
    return (
        <div>
            <p>{date.getHours()}</p>
        </div>
    );
};

