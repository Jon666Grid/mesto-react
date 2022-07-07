import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {

  const [isEditAvatarPopupOpen,setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen,setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen,setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard,setSelectedCard] = React.useState([]);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  const avatar =
    <label className="popup__label">
      <input required type="url" name="avatar" placeholder="Ссылка на картинку" id="input-avatar"
        className="popup__input popup__input_type_img" />
      <span className="popup__error" id="input-avatar-error"></span>
    </label>;

  const edit =
    <><label className="popup__label">
      <input required type="text" name="name" minlength="2" maxlength="40" placeholder="Имя" id="input-name"
        className="popup__input popup__input_type_name" />
      <span className="popup__error" id="input-name-error"></span>
    </label>
      <label className="popup__label">
        <input required type="text" name="about" minlength="2" maxlength="200" placeholder="О себе"
          id="input-profession" className="popup__input  popup__input_type_profession" />
        <span className="popup__error" id="input-profession-error"></span>
      </label></>;

  const card =
    <><label className="popup__label">
      <input required type="text" name="name" minlength="2" maxlength="30" placeholder="Название"
        id="input-area" className="popup__input popup__input_type_area" />
      <span className="popup__error" id="input-area-error"></span>
    </label><label className="popup__label">
        <input required type="url" name="link" placeholder="Ссылка на картинку" id="input-link"
          className="popup__input popup__input_type_img" />
        <span className="popup__error" id="input-link-error"></span>
      </label></>

  return (
    <body className="page">
      <div className="page__container">

        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm name='avatar' 
        title='Обновить аватар' 
        children={avatar} 
        buttonName={'Сохранить'} 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups} 
        />

        <PopupWithForm name="edit" 
        title="Редактировать профиль" 
        children={edit} 
        buttonName={'Сохранить'} 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups}
        />

        <PopupWithForm name='new-card' 
        title='Новое место' 
        children={card} 
        buttonName={'Создать'} 
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups}/>

        <PopupWithForm name='delete-card' 
        title='Вы уверены?' 
        buttonName={'Да'} 
        onClose={closeAllPopups}/>

        <ImagePopup 
          card ={selectedCard}
          onClose={closeAllPopups}
        />

      </div>

    </body>
  );

}

export default App;