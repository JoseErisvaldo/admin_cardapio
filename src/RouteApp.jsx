import {BrowserRouter, Routes, Route} from "react-router-dom";  
import Home from "./pages/Home";
import { Auth } from "./pages/Auth";
import { AuthProvider } from "./context/Auth";
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";
import Members from "./pages/Members";
import Branch from "./pages/Branch";
import { UserProvider } from "./context/UserContext";

export default function RouteApp() {
    return (
        <BrowserRouter>
            <AuthProvider>  
                <UserProvider>
                    <Routes>
                        <Route path="/" element={<Auth />} />

                        <Route path="/home" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/members" element={<Members />} />
                        <Route path="/branch" element={<Branch />} />
                    </Routes>
                </UserProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}