import '../index.css';
import React from "react";
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const currentUser = React.useContext(CurrentUserContext)

    function handleChangeName(e) {
      setName(e.target.value)
    }
    function handleChangeDescription(e) {
      setDescription(e.target.value)
    }
    function handleSubmit(e) {
      e.preventDefault()

      onUpdateUser({name: name, about: description})
    }

    React.useEffect(() => {
        setName(currentUser.name)
        setDescription(currentUser.about)
    }, [currentUser, isOpen])

    return(
        <PopupWithForm title={'Редактировать профиль'} name={'profile'} isOpen={isOpen} onClose={onClose} buttonText={'Сохранить'} onSubmit={handleSubmit}>
          <label>
            <input type="text" name="name" id="name" minLength="2" maxLength="40" placeholder="Имя профиля" required className="popup__input popup__input_type_name" value={name || ''} onChange={handleChangeName} />
            <span className="name-error popup__span"></span>
          </label>
          <label>
            <input type="text" name="about" id="about" minLength="2" maxLength="200" placeholder="Описание профиля" required className="popup__input popup__input_type_description" value={description || ''} onChange={handleChangeDescription}/>
            <span className="about-error popup__span"></span>
          </label>
        </PopupWithForm>
    )
}

export default EditProfilePopup
