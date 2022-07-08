import { useEffect, useState } from 'react'
import api from '../utils/Api'
import Card from './Card'

export default function Main(props) {

   const [userAvatar, setUserAvatar] = useState('');
   const [userName, setUserName] = useState('');
   const [userDescription, setUserDescription] = useState('');
   const [userCards, setUserCards] = useState([]);

   useEffect(() => {
      api.getUserInfo()
         .then(res => {
            setUserAvatar(res)
            setUserName(res)
            setUserDescription(res)
         })
         .catch(err => console.log(err));
   }, [])

   useEffect(() => {
      api.getInitialCards()
         .then(res => {
            setUserCards(res)
         })
         .catch(err => console.log(err));
   }, [])

   return (
      <main className="content">

         <section className="profile">
            <button className="profile__avatar-edit"
               type="button" title="Обновить аватар"
               onClick={props.onEditAvatar}>
               <img className="profile__avatar" src={userAvatar.avatar} alt="Аватар" />
            </button>
            <div className="profile__info">
               <h1 className="profile__info-name">{userName.name}</h1>
               <button className="profile__button"
                  type="button"
                  onClick={props.onEditProfile}></button>
               <p className="profile__info-profession">{userDescription.about}</p>
            </div>
            <button className="profile__add-button"
               type="button"
               onClick={props.onAddPlace}></button>
         </section>

         <section className="elements">
            <ul className="elements__list">
               {userCards.map((item) => (
                  <Card
                     card={item}
                     key={item._id}
                     onCardClick={props.onCardClick}
                  />
               ))}
            </ul>
         </section>

      </main>
   );
}

