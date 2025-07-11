import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "../components/Select";

// ✅ Общие «сырые» данные пользователей
const rawUsers = [
    { id: '1', title: 'Ivan' },
    { id: '2', title: 'Nasty' },
    { id: '3', title: 'Valy' },
    { id: '4', title: 'Igor' },
    { id: '5', title: 'Alex' },
];

// ✅ Общие «сырые» данные городов
const rawCities = [
    { id: '1', title: 'Moscow', residents: "13 000 000" },
    { id: '2', title: 'Kiev', residents: "3 600 000" },
    { id: '3', title: 'New-York', residents: "8 258 000" },
    { id: '4', title: 'Washington, D.C.', residents: "678 972" },
    { id: '5', title: 'Jasper', residents: "9 144" },
];

// ✅ Функция для парсинга числа жителей
const parseResidents = (residents: string) => {
    return parseInt(residents.replace(/\s/g, ''), 10);
};

// ✅ Фильтруем города с населением больше 5 000 000
const bigCities = rawCities.filter(
    city => parseResidents(city.residents) > 5_000_000
);

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    args: {
        users: rawUsers,
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

// === Истории ===

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
        defaultValue: "Pick a number",
    },
};

export const OnlyCityPeopleBigger5000000: Story = {
    args: {
        users: bigCities.map(city => ({
            id: city.id,
            title: `${city.title} (${city.residents})`,
        })),
        defaultValue: "Pick a city",
    },
};
