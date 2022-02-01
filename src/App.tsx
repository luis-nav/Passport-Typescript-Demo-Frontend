import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";



const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='' element={<Homepage />} />
                <Route path='/admin' element={<AdminPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;