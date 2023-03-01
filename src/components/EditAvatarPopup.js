import React from 'react';
import './PopupWithForm.css'
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            onClose={onClose}
            isOpen={isOpen}
            name="profile"
            title="Обновить аватар"
            buttonTitle="Сохранить"
        >
            <input
                id="avatar-profile"
                type="url"
                name="avatar"
                className="popup__input popup__input_type_avatar"
                placeholder="Ссылка на аватар"
                required />
            <span className="avatar-profile-error popup__error popup__error_visible"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;




