import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";
import  logo  from '../../assets/logo.png';
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
    return (
        <header className={styles.Cabecalho}>
            <Link to="/">
                <img src={logo} alt="Logo do cinetag"></img>
            </Link>
            <nav>
            <CabecalhoLink url="/">
                Home
            </CabecalhoLink>
            <CabecalhoLink url="/favoritos">
                Favoritos
            </CabecalhoLink>
            <CabecalhoLink url="/sair">
                Sair
            </CabecalhoLink>
            </nav>
        </header>
    );
}

export default Cabecalho;