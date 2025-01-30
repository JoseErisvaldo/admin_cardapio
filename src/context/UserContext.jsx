import React, { createContext, useState, useContext, useEffect } from 'react';
import supabase from '../services/supabaseClient';
import { AuthContext } from './Auth';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const {user} = useContext(AuthContext);
    const [authEmail, setAuthEmail] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [userId, setUserId] = useState('');
    const [idBranch, setIdBranch] = useState(null);
    const [idRole, setIdRole] = useState(null);
    const [name, setName] = useState('');
    const [nameBranch, setNameBranch] = useState('');
    const [nameRole, setNameRole] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [zip, setZip] = useState('');

    async function fetchProfile() {
        try {
            let { data: users, error } = await supabase
                .from('view_auth_uid_users')
                .select()

            if (error) throw error;
            if (users && users.length > 0) {
                const user = users[0];
                // Atualizando os estados com os dados do usuário
                setAuthEmail(user.auth_email);
                setCreatedAt(user.created_at);
                setUserId(user.user_id);
                setIdBranch(user.id_branch);
                setIdRole(user.id_role);
                setName(user.name);
                setNameBranch(user.name_branch);
                setNameRole(user.name_role);
                setWhatsapp(user.whatsapp);
                setZip(user.zip);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProfile();
    }, [user]);

    return (
        <UserContext.Provider value={{
            authEmail, createdAt, userId, idBranch, idRole, name, nameBranch, nameRole, whatsapp, zip
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
