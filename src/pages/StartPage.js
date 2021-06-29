import styled from 'styled-components/macro'
import Button from '../components/Button'
import PropTypes from 'prop-types'
import Slider from '../components/Slider'

StartPage.propTypes = {
  onNavigate: PropTypes.func,
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`

const Title = styled.h2`
  font-size: 26px;
  text-align: center;
  font-weight: 700;
  background-color: var(--color-background);
  color: var(--color-text);
  height: 20vh;
  padding: 20px;
`

const EnterButton = styled(Button)`
  height: 50px;
  width: 50%;
  position: relative;
  left: 25%;
  bottom: 20%;
`
