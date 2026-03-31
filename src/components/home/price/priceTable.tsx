import style from "./priceTable.module.css";
import pix_img from "../../../assets/imgs/home_imgs/price_imgs/pix_image.png"
import money_img from "../../../assets/imgs/home_imgs/price_imgs/money_image.png";
import credit_card_img from "../../../assets/imgs/home_imgs/price_imgs/credit_card_icon.png";

const PriceTable = () => {
    return (
        <div className={style.price_table_container}>
            <table className={style.price_table}>
                <tbody>
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
                </tbody>
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
    )
}

export { PriceTable }