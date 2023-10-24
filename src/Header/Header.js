
import React from 'react'
import Navbar from './../Navbar/Navbar'
import Headpack from './../Headpack/Headpack'
import {MdHighQuality} from 'react-icons/md'
import {BiSolidCoinStack} from 'react-icons/bi'
import {BiSupport} from 'react-icons/bi'
import {MdOutlinePointOfSale} from 'react-icons/md'
import {AiFillGift} from 'react-icons/ai'
import './Header.css'
export default function Header() {
  const inner = [
    {id : 1 , title:'با کیفیت ترین ارائه'},
    {id : 2 , title:'کمترین بهره گیری'},
    {id : 3 , title:'پشتیبانی 24/7'},
    {id : 4 , title:'خدمات پس از فروش'},
    {id : 5 , title:'حاوی بسته هدیه'},
  ]
  return (
    <div id='Header'>
        <Navbar></Navbar>
        <div id="header-sec">
        <div id='header-text'>
        <h1>ناموس مجازی قدرت دیجیتال با <br /><span>Webanic</span></h1>
        <h3>وبانیک ، مکانیک وب</h3>
        <div id='headpack-parent'>
        <Headpack {...inner[0]}><MdHighQuality/></Headpack>
        <Headpack {...inner[1]}><BiSolidCoinStack/></Headpack>
        <Headpack {...inner[2]}><BiSupport/></Headpack>
        <Headpack {...inner[3]}><MdOutlinePointOfSale/></Headpack>
        <Headpack {...inner[4]}><AiFillGift/></Headpack>
        </div>
        </div>
        </div>

    </div>
  )
}
