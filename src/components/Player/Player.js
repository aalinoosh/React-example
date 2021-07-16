import React from 'react'
import ReactPlayer from 'react-player'
import './Player.css';

const Player = () => {

  return (
    <div className="player-wrapper">

      <ReactPlayer 
     className ='react-player'
      controls
      width="100%" 
      height="100%"
      playing = {true}
      muted
      url='https://www.youtube.com/watch?v=CIBnXsOfcJw&t=6s'
      onReady = {()=>console.log("onReady CallBack")}
      onStart = {() => console.log("onStart CallBack")}
      onError = {() => console.log('onError CallBack')}
      onPause  = { () => console.log('onPause CallBack')}
      onDuration = {() => console.log('onDuration CallBack')}
      />

      
    </div>


  ) 
}

export default Player;