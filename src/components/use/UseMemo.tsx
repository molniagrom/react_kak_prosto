import {useCallback, useMemo, useState} from "react";
import * as React from "react";

export const Example1 = () => {

    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let temp = 1;
        for (let i = 1; i <= a; i++) {
            temp = temp * i;
        }
        return temp;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log("USERS SECRET")
    return <div>
        {props.users.map((user, i) => (<div key={i}>{user}</div>))}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example2 = () => {
    console.log("Example2")

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState<string[]>(["Lila", "Valera", "Artem", "Katya", "Dimych"]);

    const addUser = () => {
        setUsers([...users, "Sveta" + new Date().getTime()]);
    }

    const newArray = useMemo(() => {
       return users.filter(u => u.toLowerCase().indexOf("a") > -1);
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add</button>
        {counter}
        <Users users={newArray} />
    </>
}


export const Example3 = () => {
    console.log("Example3")

    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState<string[]>(["React", "js", "css", "html", "ajax"]);

    const memoizedBooks = useCallback(() => {
        console.log(books);
        setBooks([...books, "angular" + new Date().getTime()]);
    }, [books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedBooks} books={books} />
    </>
}

type BooksSecretPropsType = {
    books: Array<string>,
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log("BooksSecret")
    return <div>
        <button onClick={() => props.addBook()}>add</button>
        {props.books.map((book, i) => (<div key={i}>{book}</div>))}
    </div>
}

const Books = React.memo(BooksSecret)
