import {Select} from "../components/Select.tsx";
import type {Meta, StoryObj} from "@storybook/react-vite";

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    args: {
        users: [
            {id: '1', title: 'Ivan'},
            {id: '2', title: 'Nasty'},
            {id: '3', title: 'Valy'},
            {id: '4', title: 'Igor'},
            {id: '5', title: 'Alex'},
        ],
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {};
