import React from 'react';
import Card from '../card/Card';

const availablePlayers = ({ players, setcoin, coin }) => {
  console.log(players)
  return (

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-96 md:w-full mx-auto gap-4 mt-6'>
      {
        players.map(player => {
          return <Card 
          player={player} 
          key={player.id} 
          setcoin={setcoin}
          coin={coin}
          ></Card>
        })
      }
    </div>
  );
};

export default availablePlayers;