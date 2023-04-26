function ImagePopup() {
    return (

        <div className="popup popup_view">

            <figure className="popup__container-view">
                <button className="popup__close-btn hover" type="button"></button>
                <img className="popup__image" alt="" src="#" />
                <figcaption className="popup__image-caption"></figcaption>
            </figure>

        </div>

    );
}

export default ImagePopup;