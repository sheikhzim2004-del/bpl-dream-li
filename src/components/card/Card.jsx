import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Card = ({player}) => {
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
                <button className='btn btn-ghost'>Choos Player</button>
              </div>


            </div>
          </div>
  );
};

export default Card;