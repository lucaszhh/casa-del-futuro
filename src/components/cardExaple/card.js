import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../../styles/Cards/cards.css";


const Card = ({ car }) => {

  const navigate = useNavigate();
  const [vermas, setVermas] = useState(false);
  const [visited, setVisited] = useState(false);

  const style = { backgroundImage: `url( ${car?.images[0]?.url_image} )` }


  return (
    <div className={vermas ? "cards--card cards--card--vermas" : "cards--card  "} >
      <div className={vermas ? "cards--img cards--img--vermas" : "cards--img "} style={style} />
      <div className='cardsContainer--cards-info' >
        <p>Duracion: {car?.category?.title} </p>
        <h2>{car?.title}</h2>
        <div>
          <p>{vermas ? car?.description : car?.description.slice(0, 150) + " "}
            <small className={visited ? 'link linkvisited' : 'link'} 
            onClick={() => { setVermas(vermas => !vermas); setVisited(true) }} >
                {vermas ? "...ver menos" : "...ver mas"} 
            </small>
          </p>
        </div>
        <div className='cards--button-container'>
          <button onClick={() => navigate(`autos/${car?.id}`)} className="primary-button cards--button">Ver Detalle</button>
        </div>
      </div>
    </div>
  )
}

export default Card;