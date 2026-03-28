
import { Suspense, useState } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players';



const fetchPlayers = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
  const playersPromiss = fetchPlayers();

  const [coin, setcoin] = useState(50000);
  return (
    <>
      <div className='container  mx-auto'>
        <Navbar coin={coin}></Navbar>

        <Suspense fallback={<div className='flex justify-center items-center h-screen'><span className="loading loading-dots loading-xl"></span></div>}>
          <Players 
          playersPromiss={playersPromiss}
          setcoin={setcoin}
          coin={coin}
          ></Players>
        </Suspense>
      </div>
    </>
  )
}

export default App
