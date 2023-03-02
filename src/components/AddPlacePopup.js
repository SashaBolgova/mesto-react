import React from 'react';
import './PopupWithForm.css'
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            onClose={onClose}
            isOpen={isOpen}
            name="card"
            title="Новое место"
            buttonTitle="Создать"
        >
            <input
                id="place-card"
                type="text"
                name="place"
                className="popup__input popup__input_type_place"
                placeholder="Название"
                required
                minLength="2"
                maxLength="30" />
            <span className="place-card-error popup__error popup__error_visible"></span>
            <input
                id="image-card"
                type="url"
                name="image"
                className="popup__input popup__input_type_image"
                placeholder="Ссылка на картинку"
                required />
            <span className="image-card-error popup__error popup__error_visible"></span>

        </PopupWithForm>
    )
}
export default AddPlacePopup;

