import React from 'react'
import Card from './componant/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Sumit" img="https://images.unsplash.com/photo-1743105351262-3f9e6944920a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Yuji" img="https://images.unsplash.com/photo-1643613959591-693e0a15d67d?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Parth"img="https://images.unsplash.com/photo-1762613875432-1b80b1682905?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
