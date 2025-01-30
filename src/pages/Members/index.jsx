import { useEffect, useState } from "react";
import Plan from "../../components/Plan";
import Table from "../../components/UI/Table";
import Layout from "../../layout";
import supabase from "../../services/supabaseClient";
import { NewUser } from "../../components/Users/NewUser";
import { useUser } from "../../context/UserContext";
function Members() {
    const{idRole} = useUser()
    const headers = ["Nome", "Telefone", "Cargo", "Empresa"];
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchMembers() {
            try {
                let { data: members, error } = await supabase
                    .from("view_admin_users")
                    .select("name, whatsapp, name_role, name_branch");

                if (error) throw error;

                // Transformar os dados no formato correto para a tabela
                const formattedData = members.map(member => [
                    member.name,
                    member.whatsapp,
                    member.name_role,
                    member.name_branch
                ]);

                setData(formattedData);
            } catch (error) {
                console.error("Erro ao buscar membros:", error.message);
            }
        }

        fetchMembers();
    }, []);

    return (
        <Layout
            headerChildren="Membros"
            actionHeaderChildren={<h1>Ação</h1>}
            actionBodyChildren={
                <>
                    {idRole === 1 && <NewUser />}
                </>
            }
            filterHeaderChildren={<h1>Filtros</h1>}
            filterBodyChildren={
                <>
                    <p>Conteúdo do corpo 1</p>
                    <p>Conteúdo do corpo 2</p>
                </>
            }
            bodyChildren={
                <Table title="Membros" subtitle="Lista de membros" headers={headers} data={data} />
            }
            footerChildren={<Plan />}
        />
    );
}

export default Members;
