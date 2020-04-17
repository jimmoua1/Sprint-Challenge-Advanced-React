import {useEffect} from "react"
import useLocalStorage from './localStorage'


const useDarkMode = () => {
    const [values, setValues] = useLocalStorage("darkMode");
    useEffect(()=> {
}

export default useDarkMode