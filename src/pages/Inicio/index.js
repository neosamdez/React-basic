import Banner from 'components/Banner'
import Cabecalho from 'components/Cabecalho';
import Card from 'components/Card';
import Footer from 'components/Footer';
import Titulo from 'components/Titulo';
import videos from 'json/db.json';
import styles from './Inicio.module.css';

function Inicio() {
    return(
        <>
            <Cabecalho />
            <Banner imagem={"home"}/>
            <Titulo>
                <h1>um lugar para guardar seus videos e filmes</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
            <Footer />
        </>    
    );
}

export default Inicio;
