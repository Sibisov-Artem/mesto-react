import { useContext } from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

import Card from './Card';

function Main(props) {

    // const [userName, setUserName] = useState('')
    // const [userDescription, setUserDescription] = useState('')
    // const [userAvatar, setUserAvatar] = useState('')

    const currentUser = useContext(CurrentUserContext);


    // useEffect(() => {
    //     api.getUser()
    //         .then((data) => {
    //             setUserName(data.name);
    //             setUserDescription(data.about);
    //             setUserAvatar(data.avatar);
    //         })
    //         .catch((err) => {
    //             console.log(err); // выведем ошибку в консоль
    //         });
    //     return () => {
    //         console.log('Сброс')
    //     }
    // }, []) // массив зависимостей для ограничения количества срабатываний эффекта. Пустой массив означает, что нужно только один раз сработать при монтировании компонента.





    return (

        <main className="content">
            {/* {console.log('useEffect after return')} */}
            <section className="profile section page__section">
                <div
                    onClick={props.onEditAvatar}
                    className="profile__avatar-wrapper">

                    <img className="profile__avatar" src={currentUser.avatar} alt="аватарка" />
                </div>

                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button
                        onClick={props.onEditProfile}
                        className="profile__edit-btn hover"
                        type="button"
                    >
                    </button>
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button
                    onClick={props.onAddPlace}
                    className="profile__add-btn hover" type="button"></button>
            </section>

            <section className="place section page__section" aria-label="Места">
                <ul className="place__grid">

                    {props.cards.map((card) => (
                        <Card
                            card={card}
                            // owner={card.owner}
                            key={card._id}
                            // url={card.url}
                            // nameCard={card.nameCard}
                            // likes={card.likes}
                            onCardClick={props.onCardClick}
                            // добавить пропс onCardLike для компонента Card
                            onCardLike={props.onCardLike}
                        />))}

                </ul>
            </section>

        </main>
    );
}

export default Main;