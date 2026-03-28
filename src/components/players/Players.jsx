import React, { use } from 'react';
import AvailablePlayers from '../availablePlayers/AvailablePlayers'

const Players = ({playersPromiss}) => {
  // console.log(playersPromiss);
  const players = use(playersPromiss)
  console.log(players);
  return (
    <div>
      <h1>players length: {players.length}</h1>
      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
};

export default Players;