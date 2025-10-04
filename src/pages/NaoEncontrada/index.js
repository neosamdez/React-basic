import styles from './NaoEncontrada.module.css';

function NaoEncontrada() {
    return(
        <section className={styles.container}>
            <h2>Página Não Encontrada</h2>  
            <p>Erro 404</p>
        </section>
    )
}
export default NaoEncontrada;