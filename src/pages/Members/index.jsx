import Plan from "../../components/Plan";
import Table from "../../components/UI/Table";
import Layout from "../../layout";

function Members() {
    const headers = ["Nome", "Idade", "Cargo","Empresa"];
    const data = [
      ["João Silva", 30, "Desenvolvedor","Google"],
      ["Maria Oliveira", 28, "Designer","Facebook"],
      ["Carlos Santos", 35, "Gerente","Amazon"],
      ["Ana Souza", 26, "Analista","Microsoft"],
      ["Fernando Lima", 40, "Diretor","Apple"],
    ];
    return (
        <Layout
            headerChildren={'Membros'}
            actionHeaderChildren={<h1>Ação</h1>}
            actionBodyChildren={
                <>
                    <p>Conteúdo do corpo 1</p>
                    <p>Conteúdo do corpo 2</p>
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
                <>
                    <p><Table title={'Membros'} subtitle={'Lista de membros'} headers={headers} data={data} /></p>

                </>
            }
            footerChildren={<p><Plan /></p>}
        />
    );
}

export default Members;