import s from "../styles/Select.module.css";
import type {OptionsPropsType} from "../types/types.ts";


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

