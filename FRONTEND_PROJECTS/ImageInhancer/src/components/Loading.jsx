import React from 'react'
import { LifeLine } from 'react-loading-indicators'

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-80 bg-gray-200 text-gray-500'>
      <LifeLine color="#123458" size="medium" text="Loading..." textColor="#123458" />
    </div>
  )
}

export default Loading