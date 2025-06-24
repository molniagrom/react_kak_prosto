import {useState} from "react";
import s from "../styles/Select.module.css";

type UserType = {
    id: string;
    title: string;
}

type SelectPropsType = {
    users: UserType[]
}

export const Select = (props: SelectPropsType) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectValue, setSelectValue] = useState("Select");

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
            <input value={selectValue} autoFocus onBlur={onBlurHandler} className={s.selectHeader}
                   onClick={onClickHandler}/>
            {isOpen && <Options selectNewElement={selectNewElement} users={props.users}/>}
        </div>
    );
};

type OptionsPropsType = {
    users: UserType[]
    selectNewElement: (title: string) => void
}

export const Options = ({users, selectNewElement}: OptionsPropsType) => {

    const onClickOption = (title: string) => {
        selectNewElement(title);
    };

    return (
        <div className={s.optionsList}>
            {users.map((u) => (
                <div
                    key={u.id}
                    className={s.optionItem}
                    onMouseDown={() => onClickOption(u.title)}
                    style={{ padding: "10px", border: "1px solid black", margin: "4px", cursor: "pointer" }}
                >
                    {u.title}
                </div>
            ))}
        </div>
    );
};
