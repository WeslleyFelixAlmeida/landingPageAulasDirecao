import style from "./home.module.css";
import car_image from "../../assets/imgs/home_imgs/car_image.png";
import service_1 from "../../assets/imgs/home_imgs/service_cards/service1.png";
import service_2 from "../../assets/imgs/home_imgs/service_cards/service2.png";
import service_3 from "../../assets/imgs/home_imgs/service_cards/service3.png";
import credit_card_img from "../../assets/imgs/home_imgs/price_imgs/credit_card_icon.png";
import wpp_icon from "../../assets/imgs/home_imgs/wppIcon.png";
import pix_img from "../../assets/imgs/home_imgs/price_imgs/pix_image.png"
import money_img from "../../assets/imgs/home_imgs/price_imgs/money_image.png";

const Home = () => {
    return (
        <>
            <section className={`${style.home_section} ${style.container_introduction}`}>
                <img
                    src={car_image}
                    className={style.car_image} alt="Imagem carro"
                    style={{ gridArea: "intro_grid_1" }}
                />
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
                    <div className={style.service_card}>
                        <img src={service_1} alt="Imagem serviço baliza"
                            style={{ gridArea: "service_grid1" }} />
                        <p
                            style={{ gridArea: "service_grid2" }}>Estacionar</p>
                    </div>
                    <div className={style.service_card}>
                        <img src={service_2} alt="Imagem serviço Dirigir"
                            style={{ gridArea: "service_grid1" }} />
                        <p
                            style={{ gridArea: "service_grid2" }}>Dirigir automóvel</p>
                    </div>
                    <div className={style.service_card}>
                        <img src={service_3} alt="Imagem serviço regras"
                            style={{ gridArea: "service_grid1" }} />
                        <p
                            style={{ gridArea: "service_grid2" }}>Regras de transito</p>
                    </div>
                </div>
            </section>
            <section className={`${style.home_section} ${style.price_container}`}>
                <h2>Nossos preços:</h2>
                <div className={style.price_table_container}>
                    <table className={style.price_table}>
                        <tr>
                            <td>Quantidade</td>
                            <td>Valor</td>
                            <td rowSpan={2}>*Compre mais e pague menos por cada unidade!</td>
                        </tr>
                        <tr>
                            <td>1 Aula</td>
                            <td>R$<p>130,00</p></td>
                        </tr>
                        <tr>
                            <td>5 Aula</td>
                            <td>R$<p>600,00</p></td>
                            <td>7% de desconto</td>
                        </tr>
                        <tr>
                            <td>10+ Aula</td>
                            <td>R$<p>1150,00</p></td>
                            <td>11% de desconto</td>
                        </tr>
                    </table>
                    <div className={style.container_payment}>
                        <p>Pagamento aceitos:</p>
                        <div className={style.payment_line}>
                            <img src={credit_card_img} alt="Tipo pagamento cartão" />
                            <p>Cartão de crédito ou débito</p>
                        </div>
                        <div className={style.payment_line}>
                            <img src={pix_img} alt="Tipo pagamento pix" />
                            <p>Pix</p>
                        </div>
                        <div className={style.payment_line}>
                            <img src={money_img} alt="Tipo pagamento dinheiro" />
                            <p>Dinheiro</p>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <p></p>
                    <button>
                        <img src="" alt="" />
                        <p></p>
                    </button>
                </div> */}
            </section>
            {/* 
            <section>
                <h2></h2>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p></p>
                        <div></div>
                        <p></p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p></p>
                        <div></div>
                        <p></p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p></p>
                        <div></div>
                        <p></p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p></p>
                        <div></div>
                        <p></p>
                    </div>
                </div>
            </section> */}
        </>
    )
}
export { Home }