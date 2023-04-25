function Main() {
    return (
        <main className="content">

            <section className="profile section page__section">
                <div className="profile__avatar-wrapper">
                    {/* Вставки вида <% %> — синтаксис шаблона lodash */}
                    <img className="profile__avatar" src="<%=require('./images/profile__avatar.jpg')%>" alt="аватарка" />
                </div>

                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button className="profile__edit-btn hover" type="button"></button>
                    <p className="profile__description">Исследователь океана</p>
                </div>
                <button className="profile__add-btn hover" type="button"></button>
            </section>

            <section className="place section page__section" aria-label="Места">
                <ul className="place__grid">
                </ul>
            </section>

        </main>
    );
}

export default Main;