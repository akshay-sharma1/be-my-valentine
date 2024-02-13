import { useState } from 'react'
import winnieThePooh from './assets/winnie-the-pooh-pooh-bear.gif'
import './App.css'

const gallery = Object.values(import.meta.glob('./assets/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))

const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

function App() {

  const [isPressed, setIsPressed] = useState(false)

  const MouseEnter = (event) => {
    event.target.style.left = `${Math.ceil(Math.random() * 90)}%`
    event.target.style.top = `${Math.ceil(Math.random() * 90)}%`;
  }

  return (
    <>
      <div>
        {!isPressed ? <img src={winnieThePooh} className="winnieThePooh" alt="Winnie The Pooh GIF" /> 
        : <img src={getRandomElement(gallery)} className="couplePhoto" alt="" />}
      </div>
      { !isPressed ? <h1 className="header">Will you be my valentine?</h1> : 
       <h1 className="header"> Love you thiiis much, here's a cute photo</h1>}
      <div className="buttons">
        <button className="yesButton" onClick={() => setIsPressed(!isPressed)}>
            {!isPressed ? "Yes" : "Go Back"} 
        </button>
        {!isPressed ? 
        <button className="noButton" onMouseOver={MouseEnter}>
            No
        </button> : ""}
      </div>
    </>
  )
}

export default App
