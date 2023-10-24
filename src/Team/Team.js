import React from 'react'
import TeamOpt from './../TeamOpt/TeamOpt'
import './Team.css'

export default function Team() {
  return (
    <div id='Team'>
        <h5>تیم</h5>
        <h2>تیم ما را بررسی کنید</h2>
        <div id="teamOpt-par">
            <TeamOpt/>
            <TeamOpt/>
            <TeamOpt/>
            <TeamOpt/>
        </div>
    </div>
  )
}
