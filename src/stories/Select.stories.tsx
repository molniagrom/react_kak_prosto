import type {Meta, StoryObj} from "@storybook/react-vite";
import {Select} from "../components/Select";

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

export const Number: Story = {
    args: {
        users: [
            { id: '1', title: '1' },
            { id: '2', title: '2' },
            { id: '3', title: '3' },
            { id: '4', title: '4' },
            { id: '5', title: '5' },
        ],
        defaultValue: "Pick a number"
    }
};
