import React from 'react'
import Section1 from "./component/section1/section1";
import Section2 from "./component/section2/section2";
const App = () => {
  const user=[
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'suhani builds scalable web applications using modern technologies.',
      tag:'Satiesfied'
    },
    {
      img:'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'om designs secure cloud infrastructure and optimizes performance.',
      tag:'Unsatisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Suhas Verma protects systems from cyber threats and attacks',
      tag:'Enjoying'
    },
    {
      img:'https://images.unsplash.com/photo-1582138825658-fb952c08b282?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'kishan Verma protects systems from cyber threats and attacks',
      tag:'Enjoying'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1678453147461-0e53fe848df6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'disha Verma protects systems from cyber threats and attacks',
      tag:'Enjoying'
    }

  ]
  return (
    <div >
      <Section1 users={user} />
      {/* <Section2/> */}
    </div>
  )
}

export default App
