import React from 'react'
import './Headpack.css'

export default function Headpack({title , children}) {
  return (
    <div className='Headpack'>
      {children}
      <h4>{title}</h4>
    </div>
  )
}
