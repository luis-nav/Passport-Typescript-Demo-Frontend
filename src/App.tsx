import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import './main.css'
import { myContext } from "./pages/Context";
import Register from "./pages/Register";
import { useContext } from "react";



const App = () => {
    const ctx = useContext(myContext)

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='' element={<Homepage />} />
                {ctx ? (
                    <>
                        <Route path='/profile' element={<Profile />} />
                        {ctx.isAdmin && (<Route path='/admin' element={<AdminPage />} />)}
                    </>
                ) : (
                    <>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    )
};

export default App;