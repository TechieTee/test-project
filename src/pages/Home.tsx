import { useState } from 'react'
import {Image} from '../assets'
import viteLogo from '/vite.svg'
import '../App.css'


const Home = () => {
    const [count, setCount] = useState(0)
    return( 
    <>
  
      <h1>Welcome to the Home Page!</h1>
     <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={Image.reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <code>Vite + React write it well</code>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  

)
  };
  
  export default Home;
  