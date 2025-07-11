// UseState.stories.tsx


import type {Meta, StoryObj} from "@storybook/react-vite";
import {UseState} from "../components/UseState.tsx";

const meta: Meta<typeof UseState> = {
    title: 'Example/UseState',
    component: UseState,
};

export default meta;

// 🧩 Описание конкретной истории
export const Default: StoryObj<typeof UseState> = {};
