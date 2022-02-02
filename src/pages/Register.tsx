import axios, { AxiosResponse } from "axios";
import { useState } from "react";

const Register = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const register = () => {
        axios.post("http://localhost:8000/register", { username, password }, { withCredentials: true })
            .then((res: AxiosResponse) => {
                if (res.data === 'Success') {
                    window.location.href = "/"
                }
            })
            .catch(e => { //Catch Error
                console.log(e)
            })
    }


    return (
        <div>
            <h1>Register</h1>
            <input type="text" placeholder="Username" onChange={(e => setUsername(e.target.value))} />
            <input type="password" placeholder="Password" onChange={(e => setPassword(e.target.value))} />
            <button onClick={register}>Register</button>
        </div>
    )
};

export default Register;