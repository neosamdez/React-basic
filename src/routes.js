import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";
import PAgninaBase from "pages/PaginaBase";



function AppRoutes() {
    return (
        <BrowserRouter>
                    <Routes>
                        <Route 
                            path="/" element={<PAgninaBase/>} >
                        
                        <Route 
                            index element={<Inicio/>} >
                        </Route>
                        <Route 
                            path="Favoritos" element={<Favoritos/>} >
                        </Route>
                        <Route 
                            path=":id" element={<Player/>} >
                        </Route>
                        <Route 
                            path="*" element={<NaoEncontrada/>} >
                        </Route>
                        </Route>
                    </Routes>
       </BrowserRouter>
    );
}

export default AppRoutes;