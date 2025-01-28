import Layout from "../../layout";

import ViewProfile from "../../components/Profile";
import Plan from "../../components/Plan";

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
            footerChildren={<p><Plan /></p>}
        />
    );
}

export default Profile;