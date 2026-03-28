import React, { use } from 'react';

const Players = ({playersPromiss}) => {
  // console.log(playersPromiss);
  const data = use(playersPromiss)
  console.log(data);
  return (
    <div>
      <h1>players length: {data.length}</h1>
    </div>
  );
};

export default Players;