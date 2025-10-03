import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { useFavoritosContext } from '../../contextos/Favoritos';


function Card({id, titulo, capa}) {
    const { favoritos, adicionarFavorito } = useFavoritosContext();
    const ehFavorito = favoritos.some((fav) => fav.id === id);
const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    return (
        <div className={styles.card}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img src={icone}
                alt="Favoritar Filme"
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({id, titulo, capa})
                }} />
        </div>

    )
}

export default Card;