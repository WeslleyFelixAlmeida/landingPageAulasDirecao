import style from "./evaluationStars.module.css";
import { useEffect, useState, type HTMLElementType } from "react";

type EvaluationStarProps = {
    starsAmount: 0 | 1 | 2 | 3 | 4 | 5;
}

const EvaluationStars = (props: EvaluationStarProps) => {
    const [stars, setStars] = useState<HTMLElementType[]>();

    const showStars = (amount: number = props.starsAmount ? props.starsAmount : 0) => {
        let stars: any = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= amount) {
                stars.push(<p style={{ color: "#f7b500" }} key={i}>★</p>);
            } else {
                stars.push(<p style={{ color: "gray" }} key={i}>★</p>);
            }
        }

        setStars(stars);
    }

    useEffect(() => {
        showStars(props.starsAmount);
    }, []);

    return (
        <div className={style.container_stars} style={{ gridArea: "evaluation_item_3" }}>
            {stars?.map((star) => star)}
        </div>
    )
}

export { EvaluationStars }