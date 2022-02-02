import axios, { AxiosResponse } from "axios";
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const login = () => {
        axios.post("http://localhost:8000/login", { username, password }, { withCredentials: true })
            .then((res: AxiosResponse) => {
                if (res.data === 'Success') {
                    window.location.href = "/"
                }
            }, () => { //On Rejection
                console.log("fail")
            })
            .catch(e => { //Catch Error
                console.log(e)
            })
    }

    const getUser = () => {
        axios.get("http://localhost:8000/user", { withCredentials: true })
            .then(res => {
                console.log(res.data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Username" onChange={(e => setUsername(e.target.value))} />
            <input type="password" placeholder="Password" onChange={(e => setPassword(e.target.value))} />
            <button onClick={login}>Login</button>
            <button onClick={getUser}>Get User that is logged in</button>
        </div>
    )
};

export default Login;
