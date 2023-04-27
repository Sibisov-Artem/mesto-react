import Card from './Card';

function Main(props) {

    // function handleEditAvatarClick() {
    // document.querySelector('.popup_avatar').classList.add('popup_opened');  //перенес в App

    // }

    // function handleEditProfileClick() {
    //     document.querySelector('.popup_profile').classList.add('popup_opened');   //перенес в App
    // }

    // function handleAddPlaceClick() {
    //     document.querySelector('.popup_mesto').classList.add('popup_opened');   //перенес в App
    // }

    return (
        <main className="content">

            <section className="profile section page__section">
                <div
                    onClick={props.onEditAvatar}
                    className="profile__avatar-wrapper">

                    <img className="profile__avatar" src={props.userAvatar} alt="аватарка" />
                </div>

                <div className="profile__info">
                    <h1 className="profile__name">{props.userName}</h1>
                    <button
                        onClick={props.onEditProfile}
                        className="profile__edit-btn hover"
                        type="button"
                    >
                    </button>
                    <p className="profile__description">{props.userDescription}</p>
                </div>
                <button
                    onClick={props.onAddPlace}
                    className="profile__add-btn hover" type="button"></button>
            </section>

            <section className="place section page__section" aria-label="Места">
                <ul className="place__grid">

                    {props.cards.map((card) => (
                        <Card
                            key={card.key}
                            url={card.url}
                            nameCard={card.nameCard}
                            likes={card.likes}
                        />))}

                </ul>
            </section>

        </main>
    );
}

export default Main;