import s from "../../styles/Select.module.css"; // Импортируем CSS-модуль для стилизации компонента Options
import type {OptionsPropsType} from "../../types/types.ts"; // Импортируем тип для пропсов компонента Options

export const Options = ({users, selectNewElement, highlightedIndex}: OptionsPropsType) => { // Объявляем функциональный компонент Options, который принимает пропсы типа OptionsPropsType (деструктурируем их сразу)

    const onClickOption = (title: string) => { // Функция-обработчик клика по отдельной опции
        selectNewElement(title); // Вызывает функцию selectNewElement, переданную из родительского компонента Select, чтобы обновить выбранное значение
    };

    return ( // JSX разметка компонента Options
        <div className={s.optionsList}> {/* Контейнер для списка опций */}
            {users.map((u, index) => ( // Перебираем массив users и для каждого пользователя создаем div
                <div
                    key={u.id} // Уникальный ключ для React, обязателен при рендеринге списков
                    className={`${s.optionItem} ${index === highlightedIndex ? s.highlighted : ""}`} // Применяем стили optionItem. Если текущий индекс совпадает с highlightedIndex, добавляем класс highlighted для подсветки.
                    onMouseDown={() => onClickOption(u.title)} // Обработчик нажатия кнопки мыши на опции (используем onMouseDown вместо onClick, чтобы он сработал до onBlur на заголовке Select)
                >
                    {u.title} {/* Отображает название опции */}
                </div>
            ))}
        </div>
    );
};