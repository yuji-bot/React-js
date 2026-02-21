import React from 'react'
import Lefttext from './lefttext'
import Rigth from './rigth'
const center = (props) => {
  return (
    <div className='py-3 px-18 flex  h-[80vh] gap-10'>
      <Lefttext/>
      <Rigth users={props.users}/>
    </div>
  )
}

export default center
