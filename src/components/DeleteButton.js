import PropTypes from 'prop-types'
import Button from './Button'
import DeleteIcon from '../assets/images/icons/delete.png'
import styled from 'styled-components/macro'

DeleteButton.propTypes = {
  onClick: PropTypes.func,
}

export default function DeleteButton(props) {
  return (
    <ToDeleteButton {...props}>
      <Icon src={DeleteIcon} alt="" />
    </ToDeleteButton>
  )
}
const ToDeleteButton = styled(Button)`
  background: none;
  box-shadow: none;
`

const Icon = styled.img`
  height: 40px;
  width: 45px;
`
