import style from "./footer.module.css";

const Footer = () => {
    return (
        <footer>
            <p className={style.copyright_text}>&copy;Serviço de transito LTDA</p>
        </footer>
    )
}
export { Footer };