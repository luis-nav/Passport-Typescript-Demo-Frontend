import { useContext } from "react";
import { myContext } from "./Context";

const Homepage = () => {
    const ctx = useContext(myContext)

    return <div>Hello</div>;
};

export default Homepage;
