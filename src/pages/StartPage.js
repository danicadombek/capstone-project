import Button from '../components/Button'
import PropTypes from 'prop-types'
import Slider from '../components/Slider'
import styled from 'styled-components/macro'
import enter from '../assets/images/icons/enter.png'

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
  margin-top: 15px;
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
  bottom: 20%;
  height: 50px;
  left: 27%;
  position: relative;
  width: 50%;
  padding: 4px;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  letter-spacing: 0.1em;
  text-shadow: var(--shadow-text);
  text-transform: uppercase;

  img {
    height: 25px;
  }
`
