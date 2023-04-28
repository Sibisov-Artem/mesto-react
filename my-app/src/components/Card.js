function Card(props) {

    function handleClick() {
        props.onCardClick(props);
    }

    return (

        <li className="place__card">
            <img
                onClick={handleClick}
                className="place__image" src={props.url} alt={props.nameCard} />
            <button className="place__wastebasket-btn hover" type="button"></button>
            <div className="place__info">
                <h2 className="place__title">{props.nameCard}</h2>
                <div className="place__like">
                    <button className="place__like-btn hover" type="button"></button>
                    <p className="place__like-count">{props.likes}</p>
                </div>

            </div>
        </li>

    );
}

export default Card;