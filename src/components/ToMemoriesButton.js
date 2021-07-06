import Button from './Button'
import MemoriesIcon from '../assets/images/icons/galery.png'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ToMemoriesButton.propTypes = {
  onNavigate: PropTypes.func,
}

export default function ToMemoriesButton(props) {
  return (
    <ButtonStyle {...props}>
      <Icon src={MemoriesIcon} alt="" />
      <span>Your memories</span>
    </ButtonStyle>
  )
}

const ButtonStyle = styled(Button)`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  padding: 3px;
  width: 100%;

  span {
    letter-spacing: 0.4em;
    text-shadow: var(--shadow-text);
    text-transform: uppercase;
  }
`

const Icon = styled.img`
  height: 20px;
`
