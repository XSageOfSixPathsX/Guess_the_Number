import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import "../styles/home.css"

function Home() {
  const [number, setNumber] = useState(0);
  const [over,setOver]=useState(0);
  const [midText, setMidText]=useState("The number is in the range 1-100, Guess and Check!");
  const [random,setRandom]=useState(Math.floor(Math.random()*100+1));
  const [highScore,setHighScore]=useState("none");
  const [box,setBox]=useState('?');
  const [attempts,setAttempts]=useState(0);
  console.log(random);

  const checkHighScore=()=>{
    console.log("hi"+attempts);
    if(highScore==="none")
    {
      setHighScore(attempts+1);
    }
    else if(highScore>attempts)
    {
      setHighScore(attempts+1);
    }
  }

  const handleRestart=()=>{
    setRandom(Math.floor(Math.random()*100+1));
    setMidText("Guess Again");
    setBox('?');
    setAttempts(0);
    setNumber(0);
    setOver(0);
  }
  const handleClick=()=>{
    setAttempts(attempts+1);
    if(number===random)
    {
      setBox(number);
      setOver(1);
      setMidText("That's correct, Congrats!");
      checkHighScore();
    }
    else if(number<random)
    {
      setMidText("That's low, go up!")
    }
    else{
      setMidText("Too high, go low!")
    }
  }
  const handleNumberChange=(e)=>{
    setNumber(parseInt(e.target.value, 10));
  }
  return (
    <div className="all">
      <Head>
        <title>Guess The Number!</title>
      </Head>
      <div className="header_main">Guess The Number</div>
      <div className='unknown_container'>
      <div className="unknown">{box}</div>
      <div className='empty_box1' />
      </div>
     
      
      <div className="instructions">{midText}</div>
      <div className="input">
        <div className="num_text">Enter Number : </div>
        <input
        type="number"
        id="number"
        name="number"
        className="user_input"
        value={number}
        onChange={handleNumberChange}
        />
      </div>
      {over?
      (<button className='check_button' onClick={handleRestart}>Restart</button>)
      :(<button className='check_button' onClick={handleClick}>Check</button>)
      }
      <div className='score'>
          <div className='Curr_Score'>Current Score : {attempts}</div>
          <div className='high_score'>High Score : {highScore}</div>
          
 
      </div>
    </div>

  )
}

export default Home;