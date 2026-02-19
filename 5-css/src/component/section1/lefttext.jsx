import Herotext from './herotext'
import Arrow from './arrow'
const lefttext = () => {
  return (
    <div className='h-100% w-1/4 rounded-2xl p-5 flex flex-col justify-between'>
      <Herotext/>
      <Arrow/>
    </div>
  )
}

export default lefttext
