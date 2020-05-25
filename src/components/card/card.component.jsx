import React from 'react'
import './card.styles.css'

export const Card = (props) => {
   
   return (
      <div className="card-container">
         <img src={`https://robohash.org/${props.monster.id}?set=set2&size=140x140`} alt="monster" />
         <h2>{props.monster.name}</h2>
         <p>{props.monster.email}</p>
         <p>{props.monster.website}</p>
      </div>
   )
}
   
 