import { useContext } from "react";
import { myContext } from "./Context";

const Homepage = () => {
    const ctx = useContext(myContext)

    return <div>{ctx}</div>;
};

export default Homepage;
