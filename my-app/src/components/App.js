import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";


function App() {  //функциональный компонент App
  return (

    <div className="root">

      <div className="page">

        <Header />

        <Main />

        <Footer />


      </div>

      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        submitText='Сохранить'

        children={
          <fieldset className="popup__input-container">
            <input className="popup__input popup__input_el_name" type="text" name="name" placeholder="Имя" required
              minlength="2" maxlength="40" id="profileName" />
            <span className="popup__input-error profileName-error"></span>
            <input className="popup__input popup__input_el_description" type="text" name="info" placeholder="Профессия"
              required minlength="2" maxlength="200" id="profileDescription" />
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
                minlength="2" maxlength="40" id="profileName" />
              <span className="popup__input-error profileName-error"></span>
              <input className="popup__input popup__input_el_description" type="text" name="info" placeholder="Профессия"
                required minlength="2" maxlength="200" id="profileDescription" />
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

        children={
          <fieldset className="popup__input-container">
            <input className="popup__input popup__input_el_mesto-title" type="text" name="name" placeholder="Название"
              required minlength="2" maxlength="30" id="mestoTitle" />
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
                required minlength="2" maxlength="30" id="mestoTitle" />
              <span className="popup__input-error mestoTitle-error"></span>
              <input className="popup__input popup__input_el_mesto-url" type="url" name="link" placeholder="Ссылка на картинку"
                required id="mestoUrlImage" />
              <span className="popup__input-error mestoUrlImage-error"></span>
            </fieldset>
            <button className="popup__submit-btn" type="submit">Создать</button>
          </form>
        </div>
      </div> */}

      <div className="popup popup_view">

        <figure className="popup__container-view">
          <button className="popup__close-btn hover" type="button"></button>
          <img className="popup__image" alt="" src="#" />
          <figcaption className="popup__image-caption"></figcaption>
        </figure>

      </div>

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

      <template className="card-template">

        <li className="place__card">
          <img className="place__image" alt="" />
          <button className="place__wastebasket-btn hover" type="button"></button>
          <div className="place__info">
            <h2 className="place__title"></h2>
            <div className="place__like">
              <button className="place__like-btn hover" type="button"></button>
              <p className="place__like-count">111</p>
            </div>

          </div>
        </li>

      </template>



    </div>
  );
}

export default App;