
type CounterPropsType = {
    counter: number
    onClickCounter: () => void
}

export const Counter = ({onClickCounter, counter}: CounterPropsType) => {

    console.log("Counter")

    return (
        <button onClick={onClickCounter}>
            {counter}
        </button>
    );
};

