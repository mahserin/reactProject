import React from 'react'
import CountOpt from './../CountOpt/CountOpt'
import './Counts.css'

export default function Counts() {
  return (
    <div id='Counts'>
        <div>
            <div id='count-image'>
                <img src="counts-img.jpg" alt="" />
            </div>
            <div id='count-text'>
                <h1>شایسته ترین لذت را به هر حال ارائه می دهد</h1>
                <p>خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است</p>
                <div id="countopt-par">
                    <CountOpt></CountOpt>
                    <CountOpt></CountOpt>
                    <CountOpt></CountOpt>
                    <CountOpt></CountOpt>
                </div>
            </div>
        </div>
    </div>
  )
}
