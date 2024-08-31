import React, { useState, useEffect, useRef } from "react";
import FooterTab from "../components/FooterTab";
import "../assets/Video.less";
export default function Video() {
  const videoRefs = useRef([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);


  const handleScroll = (event) => {
    const container = event.currentTarget;
    const scrollTop = container.scrollTop;

    // 获取当前滚动到的视频
    let foundCurrentVideo = false;
    for (let i = 0; i < videoRefs.current.length; i++) {
      const videoRef = videoRefs.current[i];
      const videoTop = videoRef.offsetTop;
      const videoHeight = videoRef.offsetHeight;
      const videoBottom = videoTop + videoHeight;

      if (scrollTop < videoBottom && !foundCurrentVideo) {
        // 更新当前视频索引
        setCurrentVideoIndex(i);
        foundCurrentVideo = true;
      }

      // 检查是否滑动超过一半
      if (foundCurrentVideo && scrollTop > videoTop + videoHeight / 2) {
        // 如果不是最后一个视频，则跳转到下一个视频的底部
        if (i < videoRefs.current.length - 1) {
          container.scrollTo({
            top: videoRefs.current[i + 1].offsetTop,
            behavior: 'smooth'
          });
        } else {
          // 如果是最后一个视频，则跳回到当前视频的底部
          container.scrollTo({
            top: videoBottom,
            behavior: 'smooth'
          });
        }
        break;
      }
      //没有超过一半，则返回当前视频的底部
      // else{
      //   container.scrollTo({
      //     top: videoBottom,
      //     behavior: 'smooth'
      //   });
      // }
    }
  };

  useEffect(() => {
    return () => {
    };
  }, [currentVideoIndex]);

  useEffect(() => {

    const container = document.querySelector(".video-container");
    // container.addEventListener("scroll", handleScroll);
    //移除scroll
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="video-container" onScroll={(e) => handleScroll(e)} >
      <div className="screem">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="video-wrapper"
            ref={(el) => (videoRefs.current[index] = el)}
          >
            <video
              src={`../../public/matrial/video${index + 1}.mp4`}
              controls
              muted
              loop
              autoPlay={index === currentVideoIndex}
            ></video>
          </div>
        ))}
      </div>

      <div className="footer">
        <FooterTab />
      </div>
    </div>
  );
}