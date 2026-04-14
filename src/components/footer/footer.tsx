import style from "./footer.module.css";

const Footer = () => {
    return (
        <footer>
            <p className={style.copyright_text}>&copy;Serviços de trânsito LTDA</p>
        </footer>
    )
}
export { Footer };