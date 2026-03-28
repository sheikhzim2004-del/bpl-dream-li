
import { Suspense } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players';



const fetchPlayers = async () => {
  const res = await fetch('/data.json');
  return res.json();
}



function App() {
  const playersPromiss = fetchPlayers();
  return (
    <>
      <div className='container  mx-auto'>
        <Navbar></Navbar>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Players playersPromiss={playersPromiss}></Players>
        </Suspense>
      </div>
    </>
  )
}

export default App
