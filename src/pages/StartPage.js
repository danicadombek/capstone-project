import Button from '../components/Button'
import enter from '../assets/images/icons/enter.png'
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
      date: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default function StartPage({ onNavigate, memories }) {
  const imageArray = memories.map(memory => memory.image)
  return (
    <Wrapper>
      <Title>Welcome to your virtual diary - the place for your memories</Title>
      <Slider images={imageArray}>
        <Sliderarea />
      </Slider>
      <EnterButton onClick={onNavigate}>
        Enter
        <img src={enter} alt="" />
      </EnterButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 20% 50% 30%;
  margin-top: 20px;
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
  height: 95%;
  padding: 20px;
  text-align: center;
`

const EnterButton = styled(Button)`
  align-items: center;
  bottom: 20%;
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  left: 27%;
  letter-spacing: 0.1em;
  padding: 4px;
  position: relative;
  text-shadow: var(--shadow-text);
  text-transform: uppercase;
  width: 50%;

  img {
    height: 25px;
  }
`
