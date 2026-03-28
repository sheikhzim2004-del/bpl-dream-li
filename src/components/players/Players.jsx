import React, { use, useState } from 'react';
import AvailablePlayers from '../availablePlayers/AvailablePlayers';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers';

const Players = ({playersPromiss}) => {

  const players = use(playersPromiss);
  const [selected, setSelected] = useState('available');
  console.log(selected, 'selected');
  return (
    <div>
      <div className='flex gap-4 justify-between items-center text-center'>
        {selected === "available" ? <h2 className='text-2xl font-bold my-10'>Available Players</h2> : <h2 className='text-2xl font-bold my-10'>Selected (2/12)</h2>}
        
        <div className='flex'>
          <button
          onClick={()=> setSelected("available")}
          className={`btn rounded-r-none rounded-l-xl ${selected === "available" ? "bg-[#E7FE29]" : ""}`}
          >Available</button>
          <button
          onClick={()=> setSelected("selected")}
          className={`btn rounded-l-none rounded-r-xl ${selected === "selected" ? "bg-[#E7FE29]" : ""}`}
          >Selected (1)</button>
        </div>
      </div>


      {selected==="available" ? <AvailablePlayers players={players}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>}
    </div>
  );
};

export default Players;