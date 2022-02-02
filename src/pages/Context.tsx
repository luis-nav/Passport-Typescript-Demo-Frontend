import { createContext, PropsWithChildren } from "react";
//It is for passing data for a lot of components without having to pass it as props for every component
//You only use const ctx = useContext(nameOfTheExportedContext`myContext`)

export const myContext = createContext<any>({})
const Context = (props: PropsWithChildren<any>) => {
    return <myContext.Provider value={1000}>{props.children}</myContext.Provider>;
};

export default Context;
