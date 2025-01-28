import Layout from "../../layout";


function Catalog() {
    return (
        <Layout
            headerChildren={'Catalogo'}
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
                    <p>Conteúdo do corpo 1</p>
                    <p>Conteúdo do corpo 2</p>
                </>
            }
            footerChildren={<p>Rodapé do Card</p>}
        />
    );
}

export default Catalog;