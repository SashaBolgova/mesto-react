import React from 'react';
import './Card.css'

function Card({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
    }
    return (
        <article className="element">
            <button type="button" className="element__button-delete" aria-label="Удаление карточки"></button>
            <img
                onClick={handleClick}
                className="element__image" alt={card.name} src={card.link} />
            <div className="element__group">
                <h2 className="element__text">{card.name}</h2>
                <div className="element__like">
                    <button type="button" className="element__like-button" aria-label="Лайк карточки"></button>
                    <h3 className="element__like-counter">{card.likes.length}</h3>
                </div>
            </div>
        </article>
    )
}
export default Card;