import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ImageSlider = ({
  images = [],
  autoPlay = true,
  autoPlayTime = 3000,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex

    setCurrentSlide(newSlideIndex)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide()
    }, autoPlayTime)

    return () => clearTimeout(timer)
  }, [currentSlide])

  return (
    <Wrapper {...props}>
      {images.map((imageUrl, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${imageUrl})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
          }}
        ></Slide>
      ))}
      <Gradient />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;
`

const Slide = styled.div`
  height: 50%;
  width: 100%;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 800ms all ease-in-out;
`

const ChildrenWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
`

const Gradient = styled.div`
  width: 90%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
`

export default ImageSlider
