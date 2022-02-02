import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import './main.css'
import Context from "./pages/Context";
import Register from "./pages/Register";



const App = () => {
    return (
        <BrowserRouter>
            <Context>
                <Navbar />
                <Routes>
                    <Route path='' element={<Homepage />} />
                    <Route path='/admin' element={<AdminPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </Context >
        </BrowserRouter>
    )
};

export default App;