import Button from '../components/Button'
import PropTypes from 'prop-types'
import Slider from '../components/Slider'
import styled from 'styled-components/macro'

StartPage.propTypes = {
  onNavigate: PropTypes.func,
  memories: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.number,
      text: PropTypes.string,
    })
  ),
}

export default function StartPage({ onNavigate, memories }) {
  const imageArray = memories.map(memory => memory.image)
  return (
    <Wrapper>
      <Title>
        Welcome to your virtuell diary - the place for your memories
      </Title>
      <Slider images={imageArray}>
        <Sliderarea />
      </Slider>
      <EnterButton onClick={onNavigate}>Enter</EnterButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 20% 50% 30%;
`

const Sliderarea = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 80%;
`

const Title = styled.h2`
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 26px;
  font-weight: 700;
  height: 20vh;
  padding: 20px;
  text-align: center;
`

const EnterButton = styled(Button)`
  bottom: 20%;
  height: 50px;
  left: 25%;
  position: relative;
  width: 50%;
`
