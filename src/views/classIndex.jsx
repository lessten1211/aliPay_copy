import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import FooterTab from "../components/FooterTab";
import { AddCircleOutline,ScanningOutline,HandPayCircleOutline,TravelOutline,BankcardOutline } from 'antd-mobile-icons'

import '../assets/classIndex.less'
export default function ClassIndex() {
  const [placeholders,setPlaceholders]=useState('赣服通')
  const redBooks = useSelector(state => state.redBooks.list)
  const navigate=useNavigate()
  // console.log(redBooks)
  const printRedBook = () => {
    return redBooks.map(book => <li key={book.id}>{book.title}{book.id}  {book.content}</li>)
  }


  const placeholderSwiper=()=>{
    const placeholderList=['赣服通','学生特权','绿色出行','蚂蚁森林','金秋送礼']
    let i=0
    setInterval(()=>{
    setPlaceholders(placeholderList[i])
    i=(i+1)%placeholderList.length
    },2000)
  }
useEffect(()=>{
  placeholderSwiper()
},[])
  return (
    <div className="classIndex-container">
      <div className="header">
        <div className="header_search">
          <div className="addr">
            南昌 
            <div className="wether">多云30~37</div>
          </div>

          <input type="text" placeholder={placeholders}/>
          <div className="icons"><AddCircleOutline /></div>
        </div>
        <div className="items">
            <div className="item" onClick={()=>{navigate('/scanf')}}>
              <div className="icons">
            <ScanningOutline /></div>
              <span>
              扫一扫</span>
            </div>
            <div className="item">
              <div className="icons">
              <HandPayCircleOutline /></div>
              <span>
              收付款</span>
            </div>
            <div className="item">
              <div className="icons">
            <TravelOutline /></div>
              <span>
              出行</span>
            </div>
            <div className="item">
              <div className="icons">
            <BankcardOutline /></div>
             <span> 卡包
              </span>
            </div>
        </div>
      </div>

    <div className="content">
      <div className="items">
            <h1>ClassIndex</h1>

      <ul>
        {printRedBook()}
      </ul>
      </div>

      </div>

      <div className="footer">
        <FooterTab />
      </div>
    </div>
  )
}