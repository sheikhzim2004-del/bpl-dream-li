import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';



const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setcoin }) => {
  console.log(selectedPlayers, 'selectedPlayers')

  const handleDeleteSelectedPlayer =(player) => {
    const filterSelectedPlayer = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName)
    console.log(filterSelectedPlayer, 'filterSlect')
    setSelectedPlayers(filterSelectedPlayer)
    setcoin(coin + player.price)
  }


  return (
    <div className='space-y-4'>
      {
        selectedPlayers.map(player => {
          return (
            <div 
            className='flex justify-between items-center border-2 p-2 rounded-md border-green-400 mx-2'
            key={player.id}
            >
                <div className='flex items-center gap-3'>
                  <img src={player.playerImage} alt="" className='h-20 w-35 rounded-xl' />
                  <div>
                    <h2 className='flex gap-2 items-center'><FaUser></FaUser>{player.playerName}</h2>
                    <p>{player.playerType}</p>
                  </div>
                </div>
                <button 
                className='btn text-red-600'
                onClick={()=> handleDeleteSelectedPlayer(player)}
                >
                  <MdDelete></MdDelete>
                </button>
              </div>
          )
        })
      }
    </div>
  );
};

export default SelectedPlayers;