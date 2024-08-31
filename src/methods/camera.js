let stream; // 存储 MediaStream 对象
export async function startCamera(videoElement) {
  try {
    console.log('摄像头打开')
    console.log(videoElement.srcObject)
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.srcObject = stream;
  } catch (error) {
    console.error('Error accessing camera:', error);
  }
}

// 关闭摄像头
export function stopCamera(videoElement) {
  if (videoElement && stream) {
    console.log('摄像头关闭')
    stream.getTracks().forEach(track => track.stop());
    videoElement.srcObject = null;
  }
}