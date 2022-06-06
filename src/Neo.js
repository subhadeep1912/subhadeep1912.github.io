import React from 'react'
import Face from './Face'
import './App.css'

export default function Neo() {
  return (
    <div className='full'>
    <div >
        <Face/>
    </div>
    <div style={{"margin":"10px"}} className="typewriter">
    <div className='yellow'>--------------------------------</div>
    <div>
        <span className='yellow'>Name: </span><span className='white'>Subhadeep Chatterjee</span>
    </div>
    <div>
        <span className='yellow'>Age: </span><span className='white'>20</span>
    </div>    
    <div>
        <span className='yellow'>Stuff I like: </span><span className='white'>Anime, Games</span>
    </div>    
    <div>
        <span className='yellow'> Tech I Used: </span><span className='white'>Python, ML/AI, Pytorch, and stuff</span>
    </div>    
    <div>
        <span className='yellow'>Hobbies: </span><span className='white'>Embedded systems programming, Graphics Programming, Electronics, OpenGL</span>
    </div>
    <div>
        <span className='yellow'>Future Aspects: </span><span className='white'>Game development, Game Engine Development, GANs, Encoders, Robotics</span>
    </div>
    <div>
        <span className='yellow'>About Me: </span>
        <span className='white'><br></br>I made this wesbite to show my portfolio. I did not know anything web dev yet I made this website </span>
    
    </div>
    </div>
    </div>
  )
}
