import React from 'react'
import {Bookmark} from 'lucide-react'

const cards = (props) => {
  return (
    <div className='cards'>
      <div className="top">
        <img src={props.logo} />
        <button>Save <Bookmark className='book'/></button>
      </div>
      <div className="center">
        <h3>{props.company} <span id='spam'>{props.upload}</span></h3>
        <h2>{props.post}</h2>
        <div className="type">
          <h4>{props.time}</h4>
          <h4>{props.lev}</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
        </div>
        <button>Apply</button>
      </div>


      
    </div>
  )
}

export default cards
