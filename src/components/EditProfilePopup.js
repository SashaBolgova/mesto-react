import React from 'react';
import './PopupWithForm.css'
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            onClose={onClose}
            isOpen={isOpen}
            name="profile"
            title="Редактировать профиль"
            buttonTitle="Сохранить"
        >
            <input
                id="name-profile"
                type="text"
                name="name"
                className="popup__input popup__input_type_name"
                placeholder="Имя"
                required
                minlength="2"
                maxlength="40" />
            <span className="name-profile-error popup__error popup__error_visible"></span>
            <input
                id="profession-profile"
                type="text"
                name="profession"
                className="popup__input popup__input_type_profession"
                placeholder="О себе"
                required
                minlength="2"
                maxlength="200" />
            <span className="profession-profile-error popup__error popup__error_visible"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;






