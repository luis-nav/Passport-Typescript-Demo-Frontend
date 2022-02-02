import { useContext } from "react";
import { myContext } from "./Context";

const Profile = () => {
    const ctx = useContext(myContext)

    return <div>
        <h1>Current Logged In User: {ctx.username}</h1>
    </div>;
};

export default Profile;
