import React from 'react'
import { useSearchParams } from 'react-router-dom'

function User() {
    const {userid}=useSearchParams()
  return (
    <div className='bg-orange-500 text-black text-3xl p-5 text-center'>User : {userid}</div>
  )
}

export default User