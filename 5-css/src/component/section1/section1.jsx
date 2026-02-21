import React from 'react'
import Nav from "./nav";
import Center from './center';
const section1 = (props) => {
  return (
    <div className='h-screen w-full '>
      <Nav/>
      <Center users={props.users}/>
    </div>
  )
}

export default section1
