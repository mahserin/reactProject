import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div id='Navbar'>
        <nav>
            <div id='start-nav'>
                <button>شروع</button>
            </div>
            <div id='menu-nav'>
                <li><a href="#Header">خانه</a></li>
                <li><a href="#About">درباره ما</a></li>
                <li><a href="#Services">خدمات</a></li>
                <li><a href="#Example">نمونه کار ها</a></li>
                <li><a href="#Team">تیم</a></li>
                <li><a href="">لیست کشویی</a></li>
                <li><a href="#Call">تماس با ما</a></li>
            </div>
            <div id='logo-nav'>
                <a href="http://localhost:3002"><img src="white.png" alt="" /></a>
            </div>
        </nav>
    </div>
  )
}
