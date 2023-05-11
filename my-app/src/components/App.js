import { useState, useEffect } from 'react';
import { api } from '../utils/Api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import { CurrentUserContext } from '../contexts/CurrentUserContext';



function App() {  //функциональный компонент App

  const [cards, setCards] = useState([]);


  useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        console.log(data)
        const results = data.map((item) => ({
          key: item._id,
          nameCard: item.name,
          likes: item.likes,
          url: item.link,
        }));
        setCards(results);
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
          />

          <Footer />

        </div>

        <PopupWithForm
          name='profile'
          title='Редактировать профиль'
          submitText='Сохранить'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          {/* можно обойтись без children таким образом:
      <PopupWithForm …  >
        <input …  />
        <input…   />
      <PopupWithForm />
       */}
          <fieldset className="popup__input-container">
            <input className="popup__input popup__input_el_name" type="text" name="name" placeholder="Имя" required
              minLength="2" maxLength="40" id="profileName" />
            <span className="popup__input-error profileName-error"></span>
            <input className="popup__input popup__input_el_description" type="text" name="info" placeholder="Профессия"
              required minLength="2" maxLength="200" id="profileDescription" />
            <span className="popup__input-error profileDescription-error"></span>
          </fieldset>
        </PopupWithForm>

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