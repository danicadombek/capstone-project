import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import MemoriesIcon from '../assets/images/icons/galery.png'
import Button from './Button'

ToMemoriesButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default function ToMemoriesButton(props) {
  return (
    <ButtonStyle {...props}>
      <Icon src={MemoriesIcon} alt="" />
      <span>To your memories</span>
    </ButtonStyle>
  )
}

const ButtonStyle = styled(Button)`
  align-items: center;
  display: flex;
  height: 5vh;
  justify-content: space-evenly;
  width: 90vw;

  span {
    font-size: larger;
    letter-spacing: 0.2em;
    text-shadow: var(--shadow-text);
  }
`

const Icon = styled.img`
  height: 20px;
`
