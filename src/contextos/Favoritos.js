import { useContext, createContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState([]);

    return(
        <FavoritosContext.Provider 
            value={{favoritos, setFavoritos}}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritosContext() {
    const { favoritos, setFavoritos } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        const jaExiste = favoritos.some(
            item => item.id === novoFavorito.id
        );

        let novaLista = [...favoritos];

        if (!jaExiste) {
            novaLista.push(novoFavorito);
        } else {
            novaLista = favoritos.filter((fav) => fav.id !== novoFavorito.id);
        }

        setFavoritos(novaLista);
    }

    return { favoritos, adicionarFavorito };
}
