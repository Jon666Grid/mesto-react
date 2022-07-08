export default function Card({ card, onCardClick }) {

   function handleCardClick() {
      onCardClick(card);
   }

   return (
      <section className="card-template">
         <li className="card">
            <img src={card.link} alt={card.name}
               className="card__img"
               onClick={handleCardClick} />
            <div className="card__flex">
               <h2 className="card__title">{card.name}</h2>
               <div className="card__like-container">
                  <button className="card__like-button"
                     type="button"></button>
                  <span className="card__like-counter">{card.likes.length}</span>
               </div>
               <button className="card__del-button"
                  type="button"></button>
            </div>
         </li>
      </section>
   )
}