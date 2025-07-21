import type { Meta, StoryObj } from '@storybook/react-vite';
import {LikeWatchExample, SetTimeoutExample, SimpleExample} from '../components/UseEffect';

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

export const LikeWatch: Story = {
    render: () => <LikeWatchExample />,
};
