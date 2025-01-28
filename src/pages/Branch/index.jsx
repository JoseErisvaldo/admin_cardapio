import Layout from "../../layout";
import ViewBranch from "../../components/Branch";

function Branch() {

    return (
        <Layout
            headerChildren={'Perfil da empresa'}
            actionHeaderChildren={<h1>Ação</h1>}
            actionBodyChildren={
                <>
                
                </>
            }
            filterHeaderChildren={<h1>Filtros</h1>}
            filterBodyChildren={
                <>

                </>
            }
            bodyChildren={
                <>
                    <p><ViewBranch /></p>

                </>
            }
            footerChildren={<p>Rodapé do Card</p>}
        />
    );
}

export default Branch;