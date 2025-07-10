import './App.css'

// import {Select} from "./components/Select.tsx";
import ReactWithMemo from "./components/ReactMemo.tsx";

function App() {

    // const users = [
    //     {title: "Ivan", id: "1"},
    //     {title: "Nasty", id: "2"},
    //     {title: "Valy", id: "3"},
    //     {title: "Igor", id: "4"},
    //     {title: "Alex", id: "5"},
    // ]

  return (
    <>
        {/*<Select users={users}/>*/}
        <ReactWithMemo/>
    </>
  )
}

export default App
