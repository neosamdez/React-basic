import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import FavoritosProvider from "contextos/Favoritos";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom"; 

function PagninaBase() {
    return (
<main>
    <Cabecalho />
    <FavoritosProvider>
        <Container>
            <Outlet />
        </Container>
    </FavoritosProvider>
    <Footer />
</main>
    )
}

export default PagninaBase;