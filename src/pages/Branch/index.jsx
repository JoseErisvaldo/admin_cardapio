import Layout from "../../layout";
import ViewBranch from "../../components/Branch";
import Plan from "../../components/Plan";

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
            footerChildren={<p><Plan /></p>}
        />
    );
}

export default Branch;