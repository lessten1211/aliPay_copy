import React, { useRef, useEffect, useState } from "react";
import { startCamera, stopCamera } from '../methods/camera'
import {CameraOutline,LeftOutline,EyeInvisibleFill}from 'antd-mobile-icons'
import { useNavigate } from "react-router-dom";
import './Scanf.less'

export default function Scanf() {
  const videoRef = useRef(null); // 创建 ref 对象
  const canvasRef = useRef(null); // 新增一个 ref 对象用于 canvas
  const photoRef = useRef(null); //
  const [showPhoto,setShowPhoto] = useState(null); // 展示的对象

  const navigate = useNavigate();

  const takePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    // 你可以在这里处理截图，例如下载或上传

    console.log(canvas.toDataURL());
    setShowPhoto(canvas.toDataURL());
  };

  const showOf = () => {
    console.log(photoRef.current)
    photoRef.current.className='showPhotoClicked'
  };
  const hiddenPhoto = () => {
    //释放图片同时将样式重置
    setShowPhoto(null)
    photoRef.current.className='showPhoto'
  };

  useEffect(() => {
    startCamera(videoRef.current);
    return () => {
      stopCamera(videoRef.current);
    };
  }, []);

  return (
    <div className="scanf-container">
      
      <video ref={videoRef} muted autoPlay id="video"></video>
      <canvas ref={canvasRef} style={{display: 'none'}}></canvas>
      <div className="z-container">
        <div className="comeback" onClick={() => navigate('/classIndex')}>
          <LeftOutline />
        </div>
        <div className="showPhoto"  ref={photoRef} >
            {
              showPhoto? (
                <>
                <div className="cancel">
               <EyeInvisibleFill onClick={hiddenPhoto} /></div>
                <img 
                  src={showPhoto}
                  alt="照片"
                  style={{ width: '100%', height: '100%',borderRadius:"5px" }}
                  onClick={showOf}
                /></>
              ) : null
            }
          </div>
        <div className="camera-icons" onTouchStart={takePhoto}>
          <CameraOutline />
        </div>
      </div>
    </div>
  );
}