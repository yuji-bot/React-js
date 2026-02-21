import React from 'react'

const cards = (props) => {
  return (
    <div className='h-full w-70 bg-red-400 rounded-3xl overflow-hidden relative shrink-0'>
      <img className='h-full w-full object-cover' src={props.img} alt="" srcset="" />
      <div className='h-full w-full  absolute top-0 left-0 px-3 py-3 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full w-10 h-10 flex justify-center items-center text-2xl font-bold'>{props.id+1}</h2>
        <div>
            <p className='text-shadow-black leading-relaxed text-2xl mb-10 text-white'>{props.intro}.</p>
            <button className='px-4 py-2 text-2xl bg-blue-600 rounded-full text-white'>{props.tag}</button>
        </div>
      </div>
    </div>
  )
}

export default cards
