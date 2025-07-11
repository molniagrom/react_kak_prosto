import type {SelectPropsType} from "../types/types.ts";
import {useEffect, useState} from "react";
import s from "../styles/Select.module.css";
import {Counter} from "./Counter.tsx";
import {SelectIn} from "./SelectIn.tsx";
import * as React from "react";

export const Select = (props: SelectPropsType) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectValue, setSelectValue] = useState(
        !props.defaultValue ? "Select" : props.defaultValue
    );
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    useEffect(() => {
        if (!isOpen) {
            setHighlightedIndex(-1);
        }
    }, [isOpen]);

    const onClickHandler = () => {
        setIsOpen(!isOpen);
    };

    const onBlurHandler = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 100);
    };

    const selectNewElement = (title: string) => {
        setSelectValue(title);
        setIsOpen(false);
    };

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLHeadingElement>) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (!isOpen) {
                setIsOpen(true);
            }
            setHighlightedIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                return nextIndex >= props.users.length ? 0 : nextIndex;
            });
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (!isOpen) {
                setIsOpen(true);
            }
            setHighlightedIndex((prevIndex) => {
                const nextIndex = prevIndex - 1;
                return nextIndex < 0 ? props.users.length - 1 : nextIndex;
            });
        } else if (e.key === "Enter") {
            if (isOpen && highlightedIndex !== -1) {
                selectNewElement(props.users[highlightedIndex].title);
            } else {
                setIsOpen(!isOpen);
            }
        } else if (e.key === "Escape") {
            setIsOpen(false);
        }
    };


    const [counter, setCounter] = useState(0);

    const onClickCounter = () => {
        setCounter(counter + 1)
    }

   const RealSelect = React.memo(SelectIn)

    return (
        <div className={s.selectContainer}>

            <Counter counter={counter} onClickCounter={onClickCounter}/>

            <RealSelect
                isOpen={isOpen}
                onBlurHandler={onBlurHandler}
                onClickHandler={onClickHandler}
                onKeyDownHandler={onKeyDownHandler}
                children={selectValue}
                selectNewElement={selectNewElement}
                users={props.users}
                highlightedIndex={highlightedIndex}
                className={s.selectHeader}
            />

        </div>
    );
};
