import { useState } from 'react'
import { Image } from '../assets'
import viteLogo from '/vite.svg'
import '../App.css'


const Home = () => {
  const [count, setCount] = useState(0)
  return (
    <>

      <h1>Welcome to the Home Page!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>


  )
};

export default Home;
