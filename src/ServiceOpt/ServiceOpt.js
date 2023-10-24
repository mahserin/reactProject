import React from 'react'
import './ServiceOpt.css'

export default function ServiceOpt({title , text , children}) {
  return (
    <div id='ServiceOpt'>
        {children}
        <h1>{title}</h1>
        <p>{text}</p>

    </div>
  )
}
