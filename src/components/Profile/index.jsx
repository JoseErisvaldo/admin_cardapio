import { Avatar } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import supabase from "../../services/supabaseClient";

export default function ViewProfile() {
  const [user, setUser] = useState(null);

  async function fetchProfile() {
    try {
      let { data: users, error } = await supabase
        .from("view_auth_uid_users")
        .select()
      if (error) throw error; 
      if (users && users.length > 0) {
        setUser(users[0]);
        console.log(users[0]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="relative -z-0">
        {/* Capa do perfil */}
        <div className="h-52 w-full rounded-2xl overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://marketplace.canva.com/EAD5DdSyaYI/1/0/1600w/canva-respira%C3%A7%C3%A3o-facebook-capa-EF9hf0DORFc.jpg"
            alt="Profile Cover"
          />
        </div>

        {/* Avatar centralizado sobre a capa */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
          <Avatar
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="avatar"
            className="h-32 w-32 border-4 border-white shadow-lg rounded-full"
          />
        </div>
      </div>
      {user && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
          <p className="text-gray-600">
            <span className="font-bold">Criado em:</span> {user.created_at}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Email:</span> {user.auth_email}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Telefone:</span> {user.whatsapp}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Empresa:</span> {user.name_branch}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Cargo:</span> {user.name_role}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">CEP:</span> {user.zip}
          </p>
          {/* O campo "status" não existe na resposta da consulta, verifique o nome da propriedade */}
          {/* <p className="text-gray-600">
            <span className="font-bold">Status:</span> {user.status}
          </p> */}
        </div>
      )}
    </div>
  );
}
