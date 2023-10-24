import React from 'react'
import CallOpt from './../CallOpt/CallOpt'
import "./Call.css"

export default function Call() {
  return (
    <div id='Call'>
        <h5>تماس با ما</h5>
        <h2>با ما تماس بگیرید</h2>
        <div id="call-par">
        <div id="callopt-par">
        <CallOpt></CallOpt>
        <CallOpt></CallOpt>
        <CallOpt></CallOpt>
        <CallOpt></CallOpt>
        </div>
        <div id="form-par">
            <input type="text" id="item-1" placeholder="نام" />
            <input type="text" id="item-2" placeholder='نام خانوادگی'/>
            <input type="text" id="item-3" placeholder='ایمیل' />
            <input type="text" id="item-4"  placeholder='نظرات و پیشنهادات'/>
        </div>
        </div>
    </div>
  )
}
