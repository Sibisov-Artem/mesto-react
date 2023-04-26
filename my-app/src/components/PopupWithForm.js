function PopupWithForm(props) {
    return (

        <div className={`popup popup_${props.name}`}>

            <div className="popup__container">
                <button className="popup__close-btn hover" type="button"></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__form popup__form_${props.name}`} name={`${props.name}`}>
                    {props.children}
                    <button className="popup__submit-btn" type="submit">{props.submitText}</button>
                </form>
            </div>

        </div>

    );
}

export default PopupWithForm;