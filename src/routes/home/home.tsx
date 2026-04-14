import style from "./home.module.css";

//Ilustração serviços:
import service_1 from "../../assets/imgs/home_imgs/service_cards/service1.png";
import service_2 from "../../assets/imgs/home_imgs/service_cards/service2.png";
import service_3 from "../../assets/imgs/home_imgs/service_cards/service3.png";
import service_3_dark_theme from "../../assets/imgs/home_imgs/service_cards/service_3_dark.png";

//Imagens de pessoas ficticias:
import person_1 from "../../assets/imgs/people/person1.png";
import person_2 from "../../assets/imgs/people/person2.png";
import person_3 from "../../assets/imgs/people/person3.png";
import person_4 from "../../assets/imgs/people/person4.png";

//Outros:
import wpp_icon from "../../assets/imgs/home_imgs/wppIcon.png";
import car_image from "../../assets/imgs/home_imgs/car_image.png";

//Componentes
import { PriceTable } from "../../components/home/price/priceTable";
import { ServiceCard } from "../../components/home/services/serviceCard";
import { EvaluationCard } from "../../components/home/evaluation/evaluationCard";
import { useState } from "react";

//Icons
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";


const Home = () => {
    const body = document.getElementById("root");
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [buttonMove, setButtonMove] = useState<"0px" | "27px">("0px");
    const [buttonRotation, setButtonRotation] = useState<"0deg" | "360deg">("0deg");

    const darkMode = () => {
        if (!darkTheme) {
            setDarkTheme(!darkTheme);
            return body?.classList.add("dark_theme");
        }

        setDarkTheme(!darkTheme);
        return body?.classList.remove("dark_theme");
    }

    const moveButton = () => {
        if (buttonMove === "0px") {
            setButtonRotation("360deg")
            return setButtonMove("27px");
        }
        setButtonRotation("0deg");
        return setButtonMove("0px");
    }

    return (
        <>
            <div className={style.change_theme}>
                <button
                    onClick={() => {
                        darkMode();
                        moveButton();
                    }}
                    style={{
                        translate: `${buttonMove} 0px`,
                        rotate: `${buttonRotation}`
                    }}>
                    {!darkTheme && <CiLight />}
                    {darkTheme && <CiDark />}
                </button>
                <CiLight className={style.light_icon} />
                <CiDark className={style.dark_icon} />
            </div>
            <section className={`${style.home_section} ${style.container_introduction}`}>
                <div className={style.container_img}>
                    <img
                        src={car_image}
                        className={style.car_image} alt="Imagem carro"
                        style={{ gridArea: "intro_grid_1" }}
                    />
                    <div className={style.bg_img}>

                    </div>
                </div>
                <div
                    className={style.intro_text}
                    style={{ gridArea: "intro_grid_2" }}
                >
                    <h1>{"Seja bem-vindo(a) à prestadora de serviços"}</h1>
                    <h2>Aqui você vai alcançar seu objetivo de tirar sua habilitação!</h2>
                </div>
                <div className={style.contact}
                    style={{ gridArea: "intro_grid_3" }}
                >
                    <p>Entre em contato conosco:</p>
                    <button>
                        <img src={wpp_icon} alt="WhatsApp icone" />
                        <p>Chat on WhatsApp</p>
                    </button>
                </div>
            </section>

            <section className={`${style.home_section} ${style.container_services}`}>
                <h2>O que você vai aprender?</h2>
                <div className={style.container_service_cards}>
                    <ServiceCard image={service_1} alt={"Imagem serviço baliza"} cardNumber={1} name={"Estacionar"} />
                    <ServiceCard image={service_2} alt={"Imagem serviço Dirigir"} cardNumber={2} name={"Dirigir automóvel"} />
                    <ServiceCard image={darkTheme ? service_3_dark_theme : service_3} alt={"Imagem serviço regras"} cardNumber={3} name={"Regras de transito"} />
                </div>
            </section>

            <section className={`${style.home_section} ${style.price_container}`}>
                <h2>Nossos preços:</h2>
                <PriceTable />
                <div className={style.wpp_contact_call}>
                    <h2>Se interessou? Entre em contato pelo WhatsApp:</h2>
                    <button>
                        <img src={wpp_icon} alt="WhatsApp icone" />
                        <p>Chat on WhatsApp</p>
                    </button>
                </div>
            </section>

            <section className={`${style.home_section} ${style.container_evaluation}`}>
                <h2>Veja as avaliações de nossos clientes:</h2>
                <div className={style.container_carousel}>
                    <div className={style.carousel_evaluation}>
                        <EvaluationCard
                            image={person_1}
                            personName={"Pedro"}
                            evaluation={5}
                            text={"Excelente serviço."}
                        />
                        <EvaluationCard
                            image={person_2}
                            personName={"Ana"}
                            evaluation={5}
                            text={"Serviço muito bom. Aprendi super rápido."}
                        />
                        <EvaluationCard
                            image={person_3}
                            personName={"Maria"}
                            evaluation={4}
                            text={"Tive um pouco de dificuldade no ínicio, mas todas as minhas dúvidas foram atendidas."}
                        />
                        <EvaluationCard
                            image={person_4}
                            personName={"Isabela"}
                            evaluation={5}
                            text={"Excelente serviço e suporte para o cliente."}
                        />
                    </div>
                </div>
                <div className={style.container_evaluation_buttons}>
                    <input type="radio" name="evaluation_page" id="page_1" className={style.evaluation_button} />
                    <label htmlFor="page_1"></label>
                    <input type="radio" name="evaluation_page" id="page_2" className={style.evaluation_button} />
                    <label htmlFor="page_2"></label>
                    <input type="radio" name="evaluation_page" id="page_3" className={style.evaluation_button} />
                    <label htmlFor="page_3"></label>
                </div>
            </section>
        </>
    )
}
export { Home }