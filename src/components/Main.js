import React from 'react';
import './Main.css'
import EditAvatarPopup from './EditAvatarPopup'
import EditProfilePopup from './EditProfilePopup'
import AddPlacePopup from './AddPlacePopup'
import { api } from '../utils/Api';
import Card from './Card'
import ImagePopup from './ImagePopup';

function Main({ handleEditProfileClick, handleAddPlaceClick, handleEditAvatarClick, handleCardClick }) {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, cards]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    })

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard(false);
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__data">
                    <button
                        onClick={handleEditAvatarClick}
                        className="profile__avatar-edit" aria-label="Открытие попапа аватара">
                        <img className="profile__avatar" src={userAvatar} alt="Аватар" />
                    </button>
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button
                            onClick={handleEditProfileClick}
                            type="button" className="profile__edit" aria-label="Открытие попапа профиля"></button>
                        <p className="profile__profession">{userDescription}</p>
                    </div>
                </div>
                <button
                    onClick={handleAddPlaceClick}
                    type="button" className="profile__add-card" aria-label="Открытие попапа карточек"></button>
            </section>
            <section className="elements" aria-label="Места России">
                {cards.map((card) => (
                    <Card
                        key={card._id}
                        card={card}
                        onCardClick={handleCardClick}
                    />
                ))}
            </section>

            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            />
            <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            />
            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            />
            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />
        </main>
    );
}
export default Main;