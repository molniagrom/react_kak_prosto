import type { Meta, StoryObj } from '@storybook/react-vite';
import {DymichClock} from "../components/o'clock/DymichClock.tsx";
import {MyClock} from "../components/o'clock/MyClock.tsx";
import {Clock} from "../components/o'clock/Clock.tsx";

const meta: Meta<typeof MyClock> = {
    title: 'Examples/MyClockExample',
    component: MyClock,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MyClock>;

export const DigitalExample: Story = {
    render: () => <Clock mode={"digital"} />,
};

export const AnalogExample: Story = {
    render: () => <Clock mode={"analog"} />,
};

export const MyClockExample: Story = {
    render: () => <MyClock />,
};

export const DymichClockExample: Story = {
    render: () => <DymichClock />,
};
