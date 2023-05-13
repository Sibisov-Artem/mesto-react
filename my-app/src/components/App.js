import { useState, useEffect } from 'react';
import { api } from '../utils/Api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';

import { CurrentUserContext } from '../contexts/CurrentUserContext';



function App() {  //функциональный компонент App

  const [cards, setCards] = useState([]);


  useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        console.log(data)

        // const results = data.map((item) => ({
        //   owner: item.owner._id,
        //   key: item._id,
        //   nameCard: item.name,
        //   likes: item.likes,
        //   url: item.link,
        // }));
        setCards(data);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }, [])


  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  function handleEditProfileClick() { // обработчик открытия попап профиля
    setIsEditProfilePopupOpen(true);
  }


  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  function handleAddPlaceClick() { // обработчик открытия попап добавления места
    setIsAddPlacePopupOpen(true);
  }


  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  function handleEditAvatarClick() { // обработчик открытия попап аватарки 
    setIsEditAvatarPopupOpen(true);
  }

  const [selectedCard, setSelectedCard] = useState({ nameCard: '', url: '' });
  function handleCardClick(props) {
    setSelectedCard(props);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      console.log(newCard);
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      // обновите стейт cards - удаление карточки через filter (не пропускаем свою карточку)
      setCards((state) => state.filter((c) => c._id !== card._id));
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  const [currentUser, setCurrentUser] = useState({ name: '', about: '', _id: '' });

  useEffect(() => {
    api.getUser()
      .then((data) => {
        console.log(data);
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }, [])


  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ nameCard: '', url: '' });
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="root">

        <div className="page">

          <Header />

          <Main
            cards={cards}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />

          <Footer />

        </div>

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

        <PopupWithForm
          name='mesto'
          title='Новое место'
          submitText='Создать'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}

          children={
            <fieldset className="popup__input-container">
              <input className="popup__input popup__input_el_mesto-title" type="text" name="name" placeholder="Название"
                required minLength="2" maxLength="30" id="mestoTitle" />
              <span className="popup__input-error mestoTitle-error"></span>
              <input className="popup__input popup__input_el_mesto-url" type="url" name="link" placeholder="Ссылка на картинку"
                required id="mestoUrlImage" />
              <span className="popup__input-error mestoUrlImage-error"></span>
            </fieldset>
          }
        />



        <ImagePopup
          onClose={closeAllPopups}
          card={selectedCard}
        />



        <PopupWithForm
          name='confirmation-remove'
          title='Вы уверены?'
          submitText='Да'
        />


        <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          submitText='Сохранить'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}

          children={
            <fieldset className="popup__input-container">
              <input className="popup__input popup__input_avatar-url" type="url" name="avatar" placeholder="Ссылка на картинку"
                required id="avatarUrl" />
              <span className="popup__input-error avatarUrl-error"></span>
            </fieldset>
          }
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;