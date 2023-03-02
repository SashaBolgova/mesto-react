import './Main.css'
import React, { useState, useEffect } from 'react'
import { api } from '../utils/Api';
import Card from './Card'


function Main({ handleEditProfileClick, handleAddPlaceClick, handleEditAvatarClick, handleCardClick }) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    
    useEffect(() => {
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
    }, [])

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
        </main>
    );
}
export default Main;