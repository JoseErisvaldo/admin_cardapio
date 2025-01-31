import { Avatar } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import supabase from "../../services/supabaseClient";

export default function ViewBranch() {
  const [branch, setBranch] = useState(null);

  async function fetchBranch() {
    try {
      let { data: branches, error } = await supabase
        .from("view_company_same_user")
        .select()
      if (error) throw error;
      if (branches && branches.length > 0) {
        setBranch(branches[0]);
        console.log(branches[0]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBranch();
  }, []);
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="relative -z-0">
        {/* Capa do perfil */}
        <div className="h-52 w-full rounded-2xl overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={branch?.cover_photo}
            alt="Profile Cover"
          />
        </div>

        {/* Avatar centralizado sobre a capa */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
          <Avatar
            src={branch?.profile_picture}
            alt="avatar"
            className="h-32 w-32 border-4 border-white shadow-lg rounded-full"
          />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">{branch?.name_branch}</h2>
        <p className="text-gray-600">
          <span className="font-bold">Email da empresa:</span> {branch?.email_branch}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">CNPJ/CPF:</span> {branch?.cnpj_cpf}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Telefone:</span> {branch?.phone}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Total de funcionários:</span> {branch?.total_users}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Status:</span> {branch?.status}
        </p>
      </div>
    </div>
  );
}
