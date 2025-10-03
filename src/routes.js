import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "components/Cabecalho";
import Footer from "components/Footer";
import Container from "components/Container";
import FavoritosProvider from "contextos/Favoritos";



function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route 
                            path="/" element={<Inicio/>} >
                        </Route>
                        <Route 
                            path="/Favoritos" element={<Favoritos/>} >
                        </Route>
                        <Route 
                            path="/:id" element={<Player/>} >
                        </Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Footer />
       </BrowserRouter>
    );
}

export default AppRoutes;