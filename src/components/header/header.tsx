import style from "./header.module.css";
import logo from "../../assets/imgs/home_imgs/logo.png";

const Header = () => {
    return (
        <header>
            <div className={style.container_logo}>
                <img src={logo} alt="logo imagem" />
                <p>Serviços de Transito</p>
            </div>
        </header>
    )
}
export { Header };