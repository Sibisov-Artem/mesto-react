import { useState, useEffect } from 'react';
import { api } from '../utils/Api'
import Card from './Card';

function Main(props) {

    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')



    useEffect(() => {
        api.getUser()
            .then((data) => {
                console.log(data);
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            });
    })


    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                console.log(data);
                const results = data.map((item) => ({
                    key: item._id,
                    nameCard: item.name,
                    likes: item.likes.length,
                    url: item.link,
                }));
                setCards(results);
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            });
    }, [])


    return (
        <main className="content">

            <section className="profile section page__section">
                <div
                    onClick={props.onEditAvatar}
                    className="profile__avatar-wrapper">

                    <img className="profile__avatar" src={userAvatar} alt="аватарка" />
                </div>

                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button
                        onClick={props.onEditProfile}
                        className="profile__edit-btn hover"
                        type="button"
                    >
                    </button>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button
                    onClick={props.onAddPlace}
                    className="profile__add-btn hover" type="button"></button>
            </section>

            <section className="place section page__section" aria-label="Места">
                <ul className="place__grid">

                    {cards.map((card) => (
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