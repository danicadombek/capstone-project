import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import MemoriesIcon from '../assets/images/icons/galery.png'
import Button from './Button'

ToMemoriesButton.propTypes = {
  onNavigate: PropTypes.func.isRequired,
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
  width: 100%;
  padding: 3px;

  span {
    letter-spacing: 0.4em;
    text-shadow: var(--shadow-text);
    text-transform: uppercase;
  }
`

const Icon = styled.img`
  height: 20px;
`
