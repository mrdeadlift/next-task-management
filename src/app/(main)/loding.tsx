import React from 'react'

const loading = () => {
  return (
    <div className='h-full flex justify-center items-center'
    aria-label='読み込み中'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
    </div>
  )
}

export default loading