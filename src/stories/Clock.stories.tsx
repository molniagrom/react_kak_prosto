import type {Meta, StoryObj} from '@storybook/react-vite';
import {MyClock} from "../components/o'clock/MyClock.tsx";
import {Clock} from "../components/o'clock/Clock.tsx";

const meta: Meta<typeof MyClock> = {
    title: 'Examples/MyClockExample',
    component: MyClock,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MyClock>;

export const DigitalClockExample: Story = {
    render: () => <Clock mode={"digital"} />,
};

export const AnalogClockExample: Story = {
    render: () => <Clock mode={"analog"} />,
};

export const StolenAnalogClockExample: Story = {
    render: () => <Clock mode={"stolen"} />,
};

// export const AnalogExample: Story = {
//     render: () => <MyAnalogClock date={new Date()} />,
// };

export const MyClockExample: Story = {
    render: () => <MyClock />,
};

// export const DymichClockExample: Story = {
//     render: () => <DymichClock date={new Date()} />,
// };
