import { createContext, useEffect, useState } from "react";
import supabase from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [page, setPage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            console.log("Subscription:", session);
            if(session) {
                const open = localStorage.getItem('open');
                switch(open) {
                    case '1': navigate('/home');
                     break;
                    case '2': navigate('/catalog');
                     break;
                    default:
                     break;
                   }
            } else {
                navigate("/");
            }
        });
    
        return () => subscription.unsubscribe();
    }, []); 
    
    async function CreateUser(email, password) {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        })  
     }

    async function Login(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
     }

    async function signOut ()  {
        const { error } = await supabase.auth.signOut()
    }
    return (
        <AuthContext.Provider value={{ CreateUser, Login, signOut, user, page }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };