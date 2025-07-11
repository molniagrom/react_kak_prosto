import {Options} from "./Options.tsx";

type SelectInPropsType = {
    children: React.ReactNode;
    onBlurHandler: () => void;
    onClickHandler: () => void;
    onKeyDownHandler: (e: React.KeyboardEvent<HTMLHeadingElement>) => void;
    // selectValue: string;
    selectNewElement: (title: string) => void;
    users: { id: string; title: string }[];
    highlightedIndex: number;
    className?: string;
    isOpen: boolean;
}

export const SelectIn = ({
                             onBlurHandler,
                             onClickHandler,
                             isOpen,
                             onKeyDownHandler,
                             children,
                             selectNewElement,
                             users,
                             highlightedIndex,
                             className,
                         }: SelectInPropsType) => {

    console.log("SelectIn");

    return (
        <div>
            <h3
                tabIndex={0}
                onBlur={onBlurHandler}
                className={className}
                onClick={onClickHandler}
                onKeyDown={onKeyDownHandler}
            >
                {children}
            </h3>
            {isOpen && (
                <Options
                    selectNewElement={selectNewElement}
                    users={users}
                    highlightedIndex={highlightedIndex}
                />
            )}
        </div>
    );
};

