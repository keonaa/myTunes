import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div className="main">
      <section className="content">
        <header className="head">
          <div>
            <h1>keona's tunes!</h1>
          </div>
        </header>
        <div className="info">
          <img src="https://www.billboard.com/wp-content/uploads/2023/04/Frank-Ocean-credit-Andras-Ladocsi-press-2021-billboard-1548.png" height="230" width="330" alt="frank ocean"></img>
          <div className="dropDown">
            <h3>Frank's Albums</h3>
            <details>
              <summary>channel ORANGE</summary>
              <ol>
                <li>Start</li>
                <li>Think Bout You</li>
                <li>Fertilizer</li>
                <li>Fertilizer</li>
                <li>Sierra Leone</li>
              </ol>
            </details>
            <details>
              <summary>blond</summary>
              <ol>
                <li>Nikes</li>
                <li>Ivy</li>
                <li>Pink + White</li>
                <li>Be Yourself</li>
                <li>Solo</li>
              </ol>
            </details>
          </div>
        </div>
      </section>  
      </div>
    </>
  )
}

export default App
