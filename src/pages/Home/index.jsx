import Plan from "../../components/Plan";
import Layout from "../../layout";


function App() {
    return (
        <Layout
            headerChildren={'Home'}
            actionHeaderChildren={<h1>Título do Cabeçalho da Ação</h1>}
            actionBodyChildren={
                <>
                    <p>Conteúdo do corpo 1</p>
                    <p>Conteúdo do corpo 2</p>
                </>
            }
            filterHeaderChildren={<h1>Título do Cabeçalho do Filtro</h1>}
            filterBodyChildren={
                <>
                    <p>Conteúdo do corpo 1</p>
                    <p>Conteúdo do corpo 2</p>
                </>
            }
            bodyChildren={
                <>
                    <p>Conteúdo do corpo 1</p>
                    <p>Conteúdo do corpo 2</p>
                </>
            }
            footerChildren={<p><Plan /></p>}
        />
    );
}

export default App;