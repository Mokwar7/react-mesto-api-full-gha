import '../index.css';
import React from "react";
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onSubmit}) {
    const inputRef = React.useRef()

    function handleSubmit(e) {
        e.preventDefault()

        onSubmit(inputRef.current.value)
      }

    return(
        <PopupWithForm title={'Обновить аватар'} name={'avatar'} isOpen={isOpen} onClose={onClose} buttonText={'Сохранить'} onSubmit={handleSubmit}>
          <label>
            <span className="popup__span"></span>
            <input type="url" name="description" id="links" placeholder="Ссылка на картинку" required className="popup__input popup__input_type_description" ref={inputRef}/>
            <span className="links-error popup__span"></span>
          </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup
