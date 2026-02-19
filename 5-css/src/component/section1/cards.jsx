import React from 'react'

const cards = () => {
  return (
    <div className='h-full w-70 bg-red-400 rounded-3xl overflow-hidden relative shrink-0'>
      <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
      <div className='h-full w-full  absolute top-0 left-0 px-3 py-3 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full w-10 h-10 flex justify-center items-center text-2xl font-bold'>1</h2>
        <div>
            <p className='leading-relaxed text-2xl mb-10 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, laborum.</p>
            <button className='px-4 py-2 text-2xl bg-blue-600 rounded-full text-white'>Satified</button>
        </div>
      </div>
    </div>
  )
}

export default cards
