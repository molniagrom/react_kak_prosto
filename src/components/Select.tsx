import { useState } from "react";
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

    const onClickHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={s.selectContainer}>
            <h3 className={s.selectHeader} onClick={onClickHandler}>
                Selected
            </h3>
            {isOpen && <Options users={props.users} />}
        </div>
    );
};

type OptionsPropsType = {
    users: UserType[]
}

export const Options = ({users}: OptionsPropsType) => {
    return (
        <div className={s.optionsList}>
            {users.map((u: UserType) =>
                <p key={u.id} className={s.optionItem}>{u.title}</p>)}
        </div>
    );
};
