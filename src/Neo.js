import React from 'react'
import Face from './Face'
import './App.css'

export default function Neo() {
  return (
    <div className='full'>
    <div >
        <Face />
    </div>
    <div style={{"margin":"10px"}}>
    <div className='yellow'>--------------------------------</div>
    <div>
        <span className='yellow'>Name: </span><span>Subhadeep Chatterjee</span>
    </div>
    <div>
        <span className='yellow'>Age: </span><span>20</span>
    </div>    
    <div>
        <span className='yellow'>Stuff I like: </span><span>Anime, Games</span>
    </div>    
    <div>
        <span className='yellow'> Tech I Used: </span><span>Python, ML/AI, Pytorch, and stuff</span>
    </div>    
    <div>
        <span className='yellow'>Hobbies: </span><span>Embedded systems programming, Graphics Programming, Electronics, OpenGL</span>
    </div>
    <div>
        <span className='yellow'>Future Aspects: </span><span>Game development, Game Engine Development, GANs, Encoders, Robotics</span>
    </div>
    </div>
    </div>
  )
}
