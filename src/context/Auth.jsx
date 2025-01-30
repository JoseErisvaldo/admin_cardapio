import { createContext, useEffect, useState } from "react";
import supabase from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [page, setPage] = useState(null);
    const [accountCreateStatus, setAccountCreateStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            if (session) {
                const open = localStorage.getItem("open");
                switch (open) {
                    case "1":
                        navigate("/home");
                        break;
                    case "2":
                        navigate("/catalog");
                        break;
                    case "3":
                        navigate("/members");
                        break;
                    case "4":
                        navigate("/branch");
                        break;
                    default:
                        navigate("/home");
                        break;
                }
            } else {
                navigate("/");
            }
        });

        return () => {
            if (data?.subscription) {
                data.subscription.unsubscribe();
            }
        };
    }, []);

    async function CreateUser(email, password) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        });
    
        if (error) {
            console.error("Erro ao criar conta:", error.message);
            return;
        }
    
        const userId = data?.user?.id;
    
        if (!userId) {
            console.error("Usuário não autenticado. Não é possível inserir no banco.");
            return;
        }
    
        const { error: insertError } = await supabase
            .from("users")
            .insert([{ user_id: userId }]);
    
        if (insertError) {
            console.error("Erro ao inserir usuário no banco:", insertError.message);
        } else {
        }
    }
    

    async function Login(email, password) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            console.error("Erro ao fazer login:", error.message);
        }
    }

    async function signOut() {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error("Erro ao fazer logout:", error.message);
        }
    }

    return (
        <AuthContext.Provider value={{ CreateUser, Login, signOut, user, page, accountCreateStatus }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
