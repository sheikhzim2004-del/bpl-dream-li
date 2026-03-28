import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Card = ({player, setcoin, coin}) => {

  const [isSelected, setIsSelected] = useState(false);
  const handleChoossPlayer = ()=> {

    let newCoin = coin - player.price;

    if(newCoin >= 0){
      setcoin(newCoin)
    }else{
      alert(`Not enough coin to purchess the player`)
      return
    }

    alert(`${player.playerName} is selected`);
    setIsSelected(true);

    
  }


  return (

    <div className="card bg-base-100 shadow-xl p-5">
            <figure>
              <img
                className='h-72 w-full'
                src={player.playerImage}
                alt="player" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <FaUser></FaUser>
                {player.playerName}</h2>
              <div className='flex justify-between items-center'>
                <div className='flex gap-2 justify-start items-center'>
                  <FaFlag></FaFlag>
                  <p>{player.country}</p>
                </div>
                <button>{player.playerType}</button>
              </div>

              <div className="divider"></div>

              <p className='text-xl font-bold'>Rating: {player.rating}</p>
              <div className='flex justify-between items-center'>
                <p className='text-lg font-medium'>{player.battingStyle}</p>
                <p className='text-right text-black/70 font-medium'>{player.bowlingStyle}</p>
              </div>
              <div className='flex justify-between items-center'>
                <p className='text-lg font-medium'>price: ${player.price} </p>
                <button 
                className='btn btn-ghost' 
                onClick={handleChoossPlayer}
                disabled={isSelected}
                >{isSelected===true ? "Selected" : "Chooss Player"}</button>
              </div>


            </div>
          </div>
  );
};

export default Card;