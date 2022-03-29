import { useState } from "react";
import Clock from "./components/Clock";
import Title from "./components/Title";
import ToDo from "./components/ToDo";
import DarkLightMode from "./components/DarkLightMode/DarkLightMode";

export default function App() {
    const [show, setShow] = useState(true)
    const [darkMode, setDarkMode] = useState(false);


    return <main className={` ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <DarkLightMode setDarkMode={setDarkMode} darkMode={darkMode}/>
        {/* <button onClick={() => setShow(!show)}>click</button>*/}
        <Title side={` ${darkMode ? 'left' : 'right'}`} />
        {show ? <Clock /> : ''}
        <ToDo />
    </main>
}
