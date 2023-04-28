import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



function App() {  //функциональный компонент App

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

  const [selectedCard, setSelectedCard] = useState(false);
  function handleCardClick(props) {
    setSelectedCard(props);
  }


  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }



  return (

    <div className="root">

      <div className="page">

        <Header />

        <Main
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


        children={
          <fieldset className="popup__input-container">
            <input className="popup__input popup__input_el_name" type="text" name="name" placeholder="Имя" required
              minLength="2" maxLength="40" id="profileName" />
            <span className="popup__input-error profileName-error"></span>
            <input className="popup__input popup__input_el_description" type="text" name="info" placeholder="Профессия"
              required minLength="2" maxLength="200" id="profileDescription" />
            <span className="popup__input-error profileDescription-error"></span>
          </fieldset>
        }
      />
      {/* 
      <div className="popup popup_profile">
        <div className="popup__container">
          <button className="popup__close-btn hover" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form popup__form_profile" name="profile">
            <fieldset className="popup__input-container">
              <input className="popup__input popup__input_el_name" type="text" name="name" placeholder="Имя" required
                minLength="2" maxLength="40" id="profileName" />
              <span className="popup__input-error profileName-error"></span>
              <input className="popup__input popup__input_el_description" type="text" name="info" placeholder="Профессия"
                required minLength="2" maxLength="200" id="profileDescription" />
              <span className="popup__input-error profileDescription-error"></span>
            </fieldset>
            <button className="popup__submit-btn" type="submit">Сохранить</button>
          </form>
        </div>
      </div> */}

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

      {/* 
      <div className="popup popup_mesto">
        <div className="popup__container">
          <button className="popup__close-btn hover" type="button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form popup__form_mesto" name="mesto">
            <fieldset className="popup__input-container">
              <input className="popup__input popup__input_el_mesto-title" type="text" name="name" placeholder="Название"
                required minLength="2" maxLength="30" id="mestoTitle" />
              <span className="popup__input-error mestoTitle-error"></span>
              <input className="popup__input popup__input_el_mesto-url" type="url" name="link" placeholder="Ссылка на картинку"
                required id="mestoUrlImage" />
              <span className="popup__input-error mestoUrlImage-error"></span>
            </fieldset>
            <button className="popup__submit-btn" type="submit">Создать</button>
          </form>
        </div>
      </div> */}

      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
      />

      {/* <div className="popup popup_view">

        <figure className="popup__container-view">
          <button className="popup__close-btn hover" type="button"></button>
          <img className="popup__image" alt="" src="#" />
          <figcaption className="popup__image-caption"></figcaption>
        </figure>

      </div> */}

      <PopupWithForm
        name='confirmation-remove'
        title='Вы уверены?'
        submitText='Да'
      />
      {/*       
      <div className="popup popup_confirmation-remove">
        <div className="popup__container">
          <button className="popup__close-btn hover" type="button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form popup__form_confirmation-remove" name="confirmation-remove">
            <button className="popup__submit-btn" type="submit">Да</button>
          </form>
        </div>
      </div> */}

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

      {/* <div className="popup popup_avatar">
        <div className="popup__container">
          <button className="popup__close-btn hover" type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form popup__form_avatar" name="avatar">
            <fieldset className="popup__input-container">
              <input className="popup__input popup__input_avatar-url" type="url" name="avatar" placeholder="Ссылка на картинку"
                required id="avatarUrl" />
              <span className="popup__input-error avatarUrl-error"></span>
            </fieldset>
            <button className="popup__submit-btn" type="submit">Сохранить</button>
          </form>
        </div>
      </div> */}





      {/* <div className="card-template">

        <li className="place__card">
          <img className="place__image" src={cards.url} alt={cards.nameCard} />
          <button className="place__wastebasket-btn hover" type="button"></button>
          <div className="place__info">
            <h2 className="place__title">{cards.nameCard}</h2>
            <div className="place__like">
              <button className="place__like-btn hover" type="button"></button>
              <p className="place__like-count">{cards.likes}</p>
            </div>

          </div>
        </li>

      </div> */}



    </div>
  );
}

export default App;