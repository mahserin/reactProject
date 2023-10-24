import React from 'react'
import ServiceOpt from './../ServiceOpt/ServiceOpt'

import {TbWorldWww} from 'react-icons/tb'
import {MdSettingsApplications} from 'react-icons/md'
import {TbBrandInstagram} from 'react-icons/tb'
import {BiSolidVector} from 'react-icons/bi'
import {IoBriefcaseOutline} from 'react-icons/io5'
import {MdOutlineManageAccounts} from 'react-icons/md'

import './Services.css'

export default function Services() {
        const inner = [
                {id: 1 , title: 'طراحی وب‌سایت حرفه‌ای' , text: 'این خدمات شامل طراحی سفارشی وب‌سایت‌های داینامیک و واکنش‌گرا به همراه طراحی رابط کاربری (UI) جذاب و بهینه جهت جلب توجه کاربران می‌شود.'},
                {id: 2 , title: 'توسعه نرم‌افزار و اپلیکیشن مخصوص' , text: 'این خدمات به ایجاد برنامه‌ها و اپلیکیشن‌های سفارشی با استفاده از تکنولوژی‌های مدرن می‌پردازد.'},
                {id: 3 , title: 'بازاریابی دیجیتال و تبلیغات آنلاین' , text: 'این خدمات به بهبود دسترسی و تشویق ترافیک آنلاین به وب‌سایت شما از طریق استراتژی‌های بازاریابی دیجیتالی از جمله تبلیغات گوگل و شبکه‌های اجتماعی می‌پردازد.'},
                {id: 4 , title: 'طراحی لوگو و برندینگ' , text: 'این خدمات به ایجاد شناسه بصری قوی برای کسب‌وکار شما از طریق طراحی لوگو، کارت ویزیت، و اجزای بصری دیگر می‌پردازد.'},
                {id: 5 , title: 'سئو و بهینه‌سازی وب‌سایت' , text: 'این خدمات به بهبود رتبه‌بندی و نمایش وب‌سایت شما در موتورهای جستجوی اینترنتی می‌پردازد.'},
                {id: 6 , title: 'پشتیبانی و مدیریت وب‌سایت' , text: 'این خدمات شامل به‌روزرسانی محتوا، افزودن و تغییر اطلاعات، پشتیبانی فنی، و مدیریت امنیتی وب‌سایت می‌شود.'},
        ]
  return (
    <div id='Services'>
        <h5>خدمات</h5>
        <h2>خدمات را بررسی کنید</h2>
        <div id='option-par'>
        <ServiceOpt {...inner[0]}><TbWorldWww/></ServiceOpt>
        <ServiceOpt {...inner[1]}><MdSettingsApplications/></ServiceOpt>
        <ServiceOpt {...inner[2]}><TbBrandInstagram/></ServiceOpt>
        <ServiceOpt {...inner[3]}><BiSolidVector/></ServiceOpt>
        <ServiceOpt {...inner[4]}><IoBriefcaseOutline/></ServiceOpt>
        <ServiceOpt {...inner[5]}><MdOutlineManageAccounts/></ServiceOpt>
        </div>
    </div>
  )
}
