import type {SelectPropsType} from "../types/types.ts"; // Импортируем тип для пропсов компонента Select
import {useEffect, useState} from "react"; // Импортируем хуки React: useState для управления состоянием и useEffect для побочных эффектов
import s from "../styles/Select.module.css"; // Импортируем CSS-модуль для стилизации компонента Select
import {Options} from "./Options.tsx"; // Импортируем дочерний компонент Options, который отображает список элементов

export const Select = (props: SelectPropsType) => { // Объявляем функциональный компонент Select, который принимает пропсы типа SelectPropsType
    const [isOpen, setIsOpen] = useState(false); // Состояние isOpen: булево значение, true если список открыт, false если закрыт. Изначально false (закрыт).
    const [selectValue, setSelectValue] = useState(!props.defaultValue ? "Select" : props.defaultValue); // Состояние selectValue: строка, которая отображается как текущее выбранное значение. Если defaultValue не передан, то "Select", иначе defaultValue.
    const [highlightedIndex, setHighlightedIndex] = useState(-1); // Состояние highlightedIndex: число, индекс элемента в списке Options, который сейчас "подсвечен" (выделен для выбора стрелками). -1 означает, что ни один элемент не подсвечен.

    // Хук useEffect срабатывает при изменении isOpen
    useEffect(() => {
        if (!isOpen) { // Если список закрывается (isOpen становится false)
            setHighlightedIndex(-1); // Сбрасываем highlightedIndex в -1, чтобы при следующем открытии не было заранее подсвеченных элементов
        }
    }, [isOpen]); // Зависимость: эффект сработает только когда изменится значение isOpen

    const onClickHandler = () => { // Функция-обработчик клика по заголовку Select
        setIsOpen(!isOpen); // Переключает состояние isOpen на противоположное (открывает/закрывает список)
    };

    const onBlurHandler = () => { // Функция-обработчик потери фокуса заголовком Select
        // Устанавливаем небольшую задержку, чтобы успеть обработать onMouseDown на опциях.
        // Иначе onBlur сработает раньше, чем onClickOption, и список закроется, не дав выбрать элемент мышью.
        setTimeout(() => {
            setIsOpen(false); // Закрывает список после небольшой задержки
        }, 100);
    };

    const selectNewElement = (title: string) => { // Функция, которая вызывается компонентом Options при выборе нового элемента
        setSelectValue(title); // Устанавливает переданный title как новое выбранное значение
        setIsOpen(false); // Закрывает список после выбора элемента
    };

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLHeadingElement>) => { // Функция-обработчик нажатий клавиш, когда заголовок Select в фокусе
        if (e.key === "ArrowDown") { // Если нажата клавиша "стрелка вниз"
            e.preventDefault(); // Предотвращает стандартное поведение браузера (например, прокрутку страницы)
            if (!isOpen) { // Если список закрыт
                setIsOpen(true); // Открываем список
            }
            setHighlightedIndex(prevIndex => { // Обновляем highlightedIndex
                const nextIndex = prevIndex + 1; // Увеличиваем индекс на 1
                return nextIndex >= props.users.length ? 0 : nextIndex; // Если достигли конца списка, переходим к первому элементу, иначе к следующему
            });
        } else if (e.key === "ArrowUp") { // Если нажата клавиша "стрелка вверх"
            e.preventDefault(); // Предотвращает стандартное поведение браузера
            if (!isOpen) { // Если список закрыт
                setIsOpen(true); // Открываем список
            }
            setHighlightedIndex(prevIndex => { // Обновляем highlightedIndex
                const nextIndex = prevIndex - 1; // Уменьшаем индекс на 1
                return nextIndex < 0 ? props.users.length - 1 : nextIndex; // Если достигли начала списка, переходим к последнему элементу, иначе к предыдущему
            });
        } else if (e.key === "Enter") { // Если нажата клавиша "Enter"
            if (isOpen && highlightedIndex !== -1) { // Если список открыт и есть подсвеченный элемент
                selectNewElement(props.users[highlightedIndex].title); // Выбираем подсвеченный элемент
            } else { // Если список закрыт или нет подсвеченного элемента
                setIsOpen(!isOpen); // Открываем/закрываем список
            }
        } else if (e.key === "Escape") { // Если нажата клавиша "Escape"
            setIsOpen(false); // Закрываем список
        }
    };

    return ( // JSX разметка компонента Select
        <div className={s.selectContainer}> {/* Контейнер для всего компонента Select */}
            <h3
                tabIndex={0} // Делает заголовок фокусируемым с клавиатуры (например, по Tab)
                onBlur={onBlurHandler} // Обработчик потери фокуса
                className={s.selectHeader} // Применяет стили из CSS-модуля
                onClick={onClickHandler} // Обработчик клика
                onKeyDown={onKeyDownHandler} // Обработчик нажатия клавиш
            >
                {selectValue} {/* Отображает текущее выбранное значение */}
            </h3>
            {isOpen && ( // Условный рендеринг: компонент Options отображается только если isOpen равно true
                <Options
                    selectNewElement={selectNewElement} // Передаем функцию для выбора нового элемента
                    users={props.users} // Передаем массив пользователей (опций)
                    highlightedIndex={highlightedIndex} // Передаем индекс подсвеченного элемента
                />
            )}
        </div>
    );
};