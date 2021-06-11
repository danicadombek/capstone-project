import styled from 'styled-components/macro'
import MemoriesIcon from '../assets/images/icons/galery.png'
import PropTypes from 'prop-types'
import Button from '../components/Button'

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default function BackButton(props) {
  return (
    <ButtonStyle {...props}>
      <Icon src={MemoriesIcon} alt="" />
      <span>Back to memories</span>
    </ButtonStyle>
  )
}

const ButtonStyle = styled(Button)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  left: 23px;
  bottom: 25px;
  width: 90vw;
  height: 5vh;
  transition-duration: 0.4s;
`

const Icon = styled.img`
  height: 20px;
`