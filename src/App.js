import logo from './logo.svg';
import './App.css';
import Tom from './components/Tom';
import Jerry from './components/Jerry';
import { useEffect, useState } from 'react';

function App() {
  const [gameStop, setGameStop] = useState(false)
  const [isCaught, setIsCaught] = useState(false)
  const [tomPosition, setTomPosition] = useState({
    x: 800,
    y: 800,
    direction: 'right'
  })


  const [jerryPosition, setJerryPosition] = useState({
    x: Math.max(Math.floor(Math.random() * window.innerWidth) - 200, 200),
    y: Math.max(Math.floor(Math.random() * window.innerHeight) - 200, 200),
    direction: 'right'
  })

  const randomizeJerry = () => {
    setJerryPosition({
      x: Math.max(Math.floor(Math.random() * window.innerWidth) - 200, 200),
      y: Math.max(Math.floor(Math.random() * window.innerHeight) - 200, 200),
      direction: 'right'
    })
  }

  useEffect(() => {
    if (!gameStop && (Math.abs(tomPosition.x - 70 - jerryPosition.x) < 100 && Math.abs(tomPosition.y - 100 - jerryPosition.y) < 200)) {
      // alert("You won !!!")
      // setGameStop(true)
      // setJerryPosition({
      //   x: Math.random() * 600,
      //   y: Math.random() * 600,
      //   direction: 'right'
      // })
      setIsCaught(true)
      randomizeJerry()
    } else {
      setIsCaught(false)
    }
  }, [tomPosition])
  console.log(`isCaught = ${isCaught}`)
  return (
    <div className="App">
      <Tom setTomPosition={setTomPosition} tomPosition={ tomPosition}/>
      <Jerry x={jerryPosition.x} y={jerryPosition.y} isCaught={ isCaught}/>
    </div>
  );
}

export default App;
