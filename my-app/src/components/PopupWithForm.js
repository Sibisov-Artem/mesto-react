function PopupWithForm({ name, isOpen, onClose, title, children, submitText }) {
    return (
        <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>

            <div className="popup__container">
                <button
                    onClick={onClose}
                    // Можно использовать самозакрывающиеся теги, если нет children (нет ничего между тегов). 
                    className="popup__close-btn hover" type="button" />
                <h2 className="popup__title">{title}</h2>
                <form className={`popup__form popup__form_${name}`} name={`${name}`}>
                    {children}
                    <button className="popup__submit-btn" type="submit">{submitText}</button>
                </form>
            </div>

        </div>

    );
}

export default PopupWithForm;

//добавили пропс isOpen , написалт выражение, если isOpen = true то добавляем класс открытия попапа
//прокидываем isOpen в App как пропс и задаем ей значение исходного заданного состояния useState из React'а
// (в компоненте App в handler's (обработчиках) меняем императивный код на декларативный через React state)
// указываем первоначальное состояние false (то есть isOpne=false),
//при нажатии кнопки открытия попапов прокинутые с Main
//запускается функция (переписанная ранее было прописано через querySelector и classList.add)
//которая меняет, задает новое состояние с false на true в set
// и соответсвенно isOpen меняет статус на true => открываем попап