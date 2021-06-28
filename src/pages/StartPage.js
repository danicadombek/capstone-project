import styled from 'styled-components/macro'
import Button from '../components/Button'
import PropTypes from 'prop-types'
import memory1 from '../assets/images/memory1.jpg'
import memory2 from '../assets/images/memory2.jpg'
import memory3 from '../assets/images/memory3.jpg'

HomePage.propTypes = {
  onNavigate: PropTypes.func,
}

export default function HomePage({ onNavigate }) {
  return (
    <Wrapper>
      <Title>
        Welcome to your own virtuell diary - the place for your memories
      </Title>
      <ImageSlider>
        <img src={memory1} alt="" />
        <img src={memory2} alt="" />
        <img src={memory3} alt="" />
      </ImageSlider>
      <EnterButton onClick={onNavigate}>Enter</EnterButton>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 20% auto 20%;
  justify-items: center;
  padding: 20px;
  gap: 20px;
`

const ImageSlider = styled.section`
  display: none;
  width: 100%;
`

const Title = styled.h2`
  font-size: 26px;
  text-align: center;
`

const EnterButton = styled(Button)`
  height: 50px;
  width: 50%;
`
