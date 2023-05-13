import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function AddPlacePopup(props) {

    const [name, setName] = useState('');
    function handleChangeName(e) {
        setName(e.target.value);
    }

    const [link, setlink] = useState('null');
    function handleChangeLink(e) {
        setlink(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        props.onAddPlace({
            name,
            link,
        });
    }

    return (
        <PopupWithForm
            name='mesto'
            title='Новое место'
            submitText='Создать'
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}

            children={
                <fieldset className="popup__input-container">
                    <input className="popup__input popup__input_el_mesto-title" type="text" name="name" placeholder="Название"
                        required minLength="2" maxLength="30" id="mestoTitle"
                        onChange={handleChangeName}
                        value={name} />
                    <span className="popup__input-error mestoTitle-error"></span>
                    <input className="popup__input popup__input_el_mesto-url" type="url" name="link" placeholder="Ссылка на картинку"
                        required id="mestoUrlImage"
                        onChange={handleChangeLink}
                        value={link} />
                    <span className="popup__input-error mestoUrlImage-error"></span>
                </fieldset>
            }
        />
    )
}

export default AddPlacePopup