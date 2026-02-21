import React from 'react'
import Cards from './cards'
const rigth = (props) => {
  return (
    <div id='rigth' className='h-100% w-3/4 rounded-2xl p-5 flex gap-10 overflow-x-auto'>
      {props.users.map(function(ele,ind){
        return <Cards key={ind} id={ind} img={ele.img} intro={ele.intro} tag={ele.tag}/>
      })}
    </div>
  )
}

export default rigth
