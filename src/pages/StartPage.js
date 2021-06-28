import styled from 'styled-components/macro'
import Button from '../components/Button'
import PropTypes from 'prop-types'

HomePage.propTypes = {
  onNavigate: PropTypes.func,
}

export default function HomePage({ onNavigate }) {
  return (
    <Wrapper>
      <Title>
        Welcome to your own virtuell diary - the place for your memories
      </Title>
      <section>Slider</section>
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

const Title = styled.h2`
  font-size: 26px;
  text-align: center;
  text-shadow: var(--shadow-text);
`

const EnterButton = styled(Button)`
  height: 50px;
  width: 50%;
`
