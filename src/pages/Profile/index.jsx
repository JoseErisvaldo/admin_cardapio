import Layout from "../../layout";

import ViewProfile from "../../components/Profile";

function Profile() {

    return (
        <Layout
            headerChildren={'Perfil'}
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
                    <p><ViewProfile /></p>

                </>
            }
            footerChildren={<p>Rodapé do Card</p>}
        />
    );
}

export default Profile;