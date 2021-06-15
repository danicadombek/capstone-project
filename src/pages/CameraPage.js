import React, { useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import ToMemoriesButton from '../components/ToMemoriesButton'
import CamIcon from '../assets/images/icons/cam.png'

export default function CameraPage() {
  const videoRef = useRef(null)
  const pictureRef = useRef(null)
  const stripRef = useRef(null)

  useEffect(() => {
    getVideo()
  }, [videoRef])

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 250 } })
      .then(stream => {
        let video = videoRef.current
        video.srcObject = stream
        video.play()
      })
      .catch(err => {
        console.error('error:', err)
      })
  }

  const paintToCanvas = () => {
    let video = videoRef.current
    let picture = pictureRef.current
    let compress = picture.getContext('2D')

    const width = 250
    const height = 400
    picture.width = width
    picture.height = height

    return setInterval(() => {
      compress.drawImage(video, 0, 0, width, height)
    }, 200)
  }

  const takePicture = () => {
    let picture = pictureRef.current
    let strip = stripRef.current

    console.warn(strip)

    const data = picture.toDataURL('image/jpeg')

    console.warn(data)
    const link = document.createElement('a')
    link.href = data
    link.setAttribute('download', 'myWebcam')
    link.innerHTML = `<img scr='${data}' alt='thumbnail'/>`
    strip.insertBefore(link, strip.firstChild)
  }

  return (
    <Wrapper>
      <CamButton onClick={() => takePicture()}>
        <img src={CamIcon} alt="" />
        <span>Cam</span>
      </CamButton>
      <video onCanPlay={() => paintToCanvas()} ref={videoRef} />
      <canvas ref={pictureRef} />
      <div ref={stripRef} />
      <h2>Start your cam</h2>
      <ToMemoriesButton>To your memories</ToMemoriesButton>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5em;
`
const CamButton = styled(Button)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 230px;
  width: 230px;

  span {
    letter-spacing: 4px;
    font-size: larger;
    text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
  }
`
