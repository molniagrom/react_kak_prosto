import { useState } from 'react';
import * as React from 'react';

interface HeavyCalculationProps {
    number: number;
}

interface SimpleChildProps {
    onClick: () => void;
}

const HeavyCalculation: React.FC<HeavyCalculationProps> = React.memo(({ number }) => {
    console.log('🚀 Тяжёлый расчёт...');
    let result = 0;
    for (let i = 0; i < 1e8; i++) {
        result += i % 10;
    }
    const computedValue = result + number;

    console.log('🔁 Рендер HeavyCalculation');

    return <div>Результат тяжёлого расчёта: {computedValue}</div>;
});

const SimpleChild: React.FC<SimpleChildProps> = React.memo(({ onClick }) => {
    console.log('🔁 Рендер SimpleChild');
    return <button onClick={onClick}>Кликни меня</button>;
});

export default function ReactWithMemo() {
    const [number, setNumber] = useState<number>(1);
    const [count, setCount] = useState(0);

    const incrementNumber = () => setNumber((prev) => prev + 1);
    const incrementCount = () => setCount((prev) => prev + 1);

    return (
        <div>
            <h1>Демонстрация только React.memo</h1>
            <HeavyCalculation number={number} />
            <SimpleChild onClick={incrementCount} />
            <div>Число: {number}</div>
            <div>Счётчик: {count}</div>
            <button onClick={incrementNumber}>Увеличить число (Heavy)</button>
        </div>
    );
}
