import React from 'react'
import ExamPic from './../ExamPic/ExamPic'
import './Example.css'

export default function Example() {
  return (
    <div id='Example'>
        <h5>نمونه کار ها</h5>
        <h2>نمونه کار ها را بررسی کنید</h2>
        <div id="exbutt-par">
          <button>همه</button>
          <button>برنامه</button>
          <button>محصول</button>
          <button>اینترنت</button>
        </div>
        <div id="exampic-par">
          <ExamPic></ExamPic>
          <ExamPic></ExamPic>
          <ExamPic></ExamPic>
          <ExamPic></ExamPic>
          <ExamPic></ExamPic>
          <ExamPic></ExamPic>
          <ExamPic></ExamPic>
          <ExamPic></ExamPic>
          <ExamPic></ExamPic>
        </div>
    </div>
  )
}
