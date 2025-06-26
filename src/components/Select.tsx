
import type {SelectPropsType} from "../types/types.ts";
import {useState} from "react";
import s from "../styles/Select.module.css";
import {Options} from "./Options.tsx";

export const Select = (props: SelectPropsType) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectValue, setSelectValue] = useState(!props.defaultValue ? "Select" : props.defaultValue);
    console.log(isOpen);

    const onClickHandler = () => {
        setIsOpen(!isOpen);
    };

    const onBlurHandler = () => {
        setIsOpen(false);
    }

    const selectNewElement = (title: string) => {
        setSelectValue(title)
    }

    return (
        <div className={s.selectContainer}>
            <h3 tabIndex={1} onBlur={onBlurHandler} className={s.selectHeader}
                onClick={onClickHandler}>{selectValue}</h3>
            {isOpen && <Options selectNewElement={selectNewElement} users={props.users}/>}
        </div>
    );
};
