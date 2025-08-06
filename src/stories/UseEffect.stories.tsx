import type { Meta, StoryObj } from '@storybook/react-vite';
import {
    KeyTracker,
    ResetEffect, SetTimeoutExample,
    SimpleExample, SetTimeout
} from '../components/use/UseEffect.tsx';

const meta: Meta<typeof SimpleExample> = {
    title: 'Examples/useEffectExample',
    component: SimpleExample,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SimpleExample>;

export const JustUseEffect: Story = {
    render: () => <SimpleExample />,
};

export const JustSetTimeout: Story = {
    render: () => <SetTimeoutExample />,
};

export const ResetEffectExample: Story = {
    render: () => <ResetEffect />,
};

export const KeyTrackerExample: Story = {
    render: () => <KeyTracker />,
};

export const SetTimeoutExample2: Story = {
    render: () => <SetTimeout />,
};

