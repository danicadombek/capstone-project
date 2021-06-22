import styled from 'styled-components/macro'
import MemoriesIcon from '../assets/images/icons/galery.png'
import PropTypes from 'prop-types'
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90vw;
  height: 5vh;

  span {
    letter-spacing: 4px;
    font-size: larger;
    text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
  }
`

const Icon = styled.img`
  height: 20px;
`
