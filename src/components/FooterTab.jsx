import React from 'react';
import  './FooterTab.less';
import { useNavigate } from 'react-router-dom'
import { ReceiptOutline, AlipayCircleFill, VideoOutline, MessageFill, UserOutline } from 'antd-mobile-icons'
export default function FooterTab() {
  const navigate=useNavigate()
  return (
    <>
      <div className="footer-tab">
        <div className="footer-tab-item" onClick={()=>{navigate('/classIndex')}}>
          <div className="footer-tab-item-icons">
            <AlipayCircleFill />
          </div>
          <span>首页</span>
        </div>
        <div className="footer-tab-item">
          <div className="footer-tab-item-icons">
            <ReceiptOutline />
          </div>
          <span>理财</span>
        </div>
        <div className="footer-tab-item" onClick={()=>{navigate('/video')}}>
          <div className="footer-tab-item-icons">
            <VideoOutline /></div>
          <span> 视频</span>
        </div>
        <div className="footer-tab-item" onClick={()=>{navigate('/massage')}}>
          <div className="footer-tab-item-icons">
            <MessageFill /></div>
          <span>消息</span>
        </div>
        <div className="footer-tab-item" onClick={()=>{navigate('/userInfo')}}>
          <div className="footer-tab-item-icons">
            <UserOutline /></div>
          <span>我的</span>
        </div>
      </div>
    </>
  )
}