import type { Meta, StoryObj } from '@storybook/react-vite';
import {SetTimeoutExample, SimpleExample} from '../components/use/UseEffect.tsx';

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

export const SetTimeout: Story = {
    render: () => <SetTimeoutExample />,
};

