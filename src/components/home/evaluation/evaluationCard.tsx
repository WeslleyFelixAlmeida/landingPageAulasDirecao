import style from "./evaluationCard.module.css";
import { EvaluationStars } from "./evaluationStars/evaluationStars"

type EvaluationCardProps = {
    image: string;
    evaluation: 0 | 1 | 2 | 3 | 4 | 5;
    text: string;
    personName: string;
}

const EvaluationCard = (props: EvaluationCardProps) => {
    return (
        <div className={style.evaluation_card}>
            <img src={props.image} alt="Imagem pessoa" style={{ gridArea: "evaluation_item_1" }} />
            <p className={style.person_name_evaluation} style={{ gridArea: "evaluation_item_2" }}>{props.personName}</p>
            <EvaluationStars starsAmount={props.evaluation} />
            <p style={{ gridArea: "evaluation_item_4" }} className={style.evaluation_text}>"{props.text}"</p>
        </div>
    )
}

export { EvaluationCard }