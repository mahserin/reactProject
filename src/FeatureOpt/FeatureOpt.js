import React from 'react'
import './FeatureOpt.css'

export default function FeatureOpt(props) {
  return (
    <div id='FeatureOpt'>
        {props.children}
        <div id="featureopt-text">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    </div>
  )
}
