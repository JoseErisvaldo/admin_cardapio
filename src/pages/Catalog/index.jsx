import Table from "../../components/UI/Table";
import Layout from "../../layout";


function Catalog() {
    const headers = ["Dessert (100g serving)", "Calories", "Fat (g)", "Carbs (g)", "Protein (g)"];
    const data = [
      ["Frozen yoghurt", 159, 6, 24, 4],
      ["Ice cream sandwich", 237, 9, 37, 4.3],
      ["Eclair", 262, 16, 24, 6],
      ["Cupcake", 305, 3.7, 67, 4.3],
      ["Gingerbread", 356, 16, 49, 3.9],
    ];
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
                    <p><Table title={'Produtos'} subtitle={'Lista de produtos'} headers={headers} data={data} /></p>

                </>
            }
            footerChildren={<p>Rodapé do Card</p>}
        />
    );
}

export default Catalog;