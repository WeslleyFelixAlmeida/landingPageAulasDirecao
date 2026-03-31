import style from "./service.module.css";

type ServiceCardProps = {
    image: string;
    alt: string;
    cardNumber: number;
    name: string;
}

const ServiceCard = (props: ServiceCardProps) => {
    const gridArea = `service_card${props.cardNumber}`;

    return (
        <div className={style.service_card} style={{ gridArea: gridArea }}>
            <img src={props.image} alt={props.alt}
                style={{ gridArea: "service_grid1" }} />
            <p style={{ gridArea: "service_grid2" }}>{props.name}</p>
        </div>
    )
}

export { ServiceCard }