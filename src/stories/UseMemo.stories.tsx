import type {Meta, StoryObj} from "@storybook/react-vite";
import {Example1, Example2, Example3} from "../components/use/UseMemo.tsx";

const meta: Meta<typeof Example1> = {
    title: 'Examples/UseMemoExample',
    component: Example1,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Example1>;

export const DifficultCountingExample: Story = {
    render: () => <Example1 />,
};

export const HelpsForReactMemo: Story = {
    render: () => <Example2 />,
};

export const LearnUseCallback: Story = {
    render: () => <Example3 />,
};
