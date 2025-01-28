import {BrowserRouter, Routes, Route} from "react-router-dom";  
import Home from "./pages/Home";
import { Auth } from "./pages/Auth";
import { AuthProvider } from "./context/Auth";

export default function RouteApp() {
    return (
        <BrowserRouter>
            <AuthProvider>  
                <Routes>
                    <Route path="/" element={<Auth />} />

                    <Route path="/home" element={<Home />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}