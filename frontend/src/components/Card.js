import '../index.css';
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onClick, onCardLike, onCardDelete}) {
  const currentUser = useContext(CurrentUserContext)
  const isOwner = card.owner._id === currentUser._id
  const isLiked = card.likes.some(i => i._id === currentUser._id)
  const cardLikeButtonClassName = (
    `element__heart hover ${isLiked && 'element__heart_active'}`
  )
  function onCardClick() {
    onClick(card)
  }
  function handleLikeClick() {
    onCardLike(card)
  }
  function handleCardDelete() {
    onCardDelete(card)
  }

    return(
        <div className="element">
          {isOwner && <div className="element__delete hover" onClick={handleCardDelete}></div>}
          <img src={card.link} alt={card.name} className="element__photo" onClick={onCardClick}/>
          <h2 className="element__name">{card.name}</h2>
          <div className={cardLikeButtonClassName} onClick={handleLikeClick}><p className="element__like-count">{card.likes.length}</p></div>
        </div>
    )
}

export default Card
