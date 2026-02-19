import React from 'react'
import Lefttext from './lefttext'
import Rigth from './rigth'
const center = () => {
  return (
    <div className='py-3 px-18 flex  h-[80vh] gap-10'>
      <Lefttext/>
      <Rigth/>
    </div>
  )
}

export default center
