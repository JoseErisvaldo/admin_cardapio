import {BrowserRouter, Routes, Route} from "react-router-dom";  
import Home from "./pages/Home";
import { Auth } from "./pages/Auth";
import { AuthProvider } from "./context/Auth";
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";

export default function RouteApp() {
    return (
        <BrowserRouter>
            <AuthProvider>  
                <Routes>
                    <Route path="/" element={<Auth />} />

                    <Route path="/home" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}