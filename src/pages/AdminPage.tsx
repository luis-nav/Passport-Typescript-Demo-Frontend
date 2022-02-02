import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { myContext } from "./Context";

const AdminPage = () => {
    const ctx = useContext(myContext)

    const [data, setData] = useState<any>()
    const [selectedUser, setSelectedUser] = useState<string>("")

    useEffect(() => {
        axios.get("http://localhost:8000/getallusers", { withCredentials: true })
            .then(res => {
                setData(res.data)
            })

    }, [])

    const deleteUser = () => {
        axios.post("http://localhost:8000/deleteuser", {
            id: selectedUser
        }, { withCredentials: true })
            .then(res => {
                console.log(res.data)
            })
    }


    return (
        <div>
            <h1>Admin Page, Only Admin can see this</h1>

            <select name="deleteuser" onChange={e => setSelectedUser(e.target.value)}>
                <option value="" id="defaultoption">Select a user</option>
                {
                    data && data.map((item: any) => {
                        if (item.username !== ctx.username) {
                            return (
                                <option id={item.username} value={item.id} key={item.id}>{item.username}</option>
                            )
                        } else return null
                    })
                }
            </select>
            <button onClick={deleteUser}>Delete User</button>
        </div>
    )
};

export default AdminPage;
