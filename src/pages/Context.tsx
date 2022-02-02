import axios, { AxiosResponse } from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { UserInterface } from "../interfaces/interfaces";
//It is for passing data for a lot of components without having to pass it as props for every component
//You only use const ctx = useContext(nameOfTheExportedContext`myContext`)

export const myContext = createContext<Partial<UserInterface>>({})
const Context = (props: PropsWithChildren<any>) => {

    const [user, setUser] = useState<UserInterface>()

    useEffect(() => {
        axios.get("http://localhost:8000/user", { withCredentials: true })
            .then((res: AxiosResponse) => {
                setUser(res.data)
            })
    }, [])

    return (
        <myContext.Provider value={user!}>{props.children}</myContext.Provider>
    )
}

export default Context;
