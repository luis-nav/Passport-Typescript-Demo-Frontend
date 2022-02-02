import axios from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
//It is for passing data for a lot of components without having to pass it as props for every component
//You only use const ctx = useContext(nameOfTheExportedContext`myContext`)

export const myContext = createContext<any>({})
const Context = (props: PropsWithChildren<any>) => {

    const [user, setUser] = useState<any>({})

    useEffect(() => {
        axios.get("http://localhost:8000/user", { withCredentials: true })
            .then(res => {
                setUser(res.data)
            })
    }, [])

    return (
        <myContext.Provider value={user}>{props.children}</myContext.Provider>
    )
}

export default Context;
