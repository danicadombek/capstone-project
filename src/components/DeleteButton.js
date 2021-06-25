import PropTypes from 'prop-types'
import Button from './Button'
import DeleteIcon from '../assets/images/icons/delete.png'
import styled from 'styled-components/macro'

DeleteButton.propTypes = {
  index: PropTypes.number,
  // deleteGoal: PropTypes.func,
}

export default function DeleteButton(props) {
  return (
    <ToDeleteButton {...props}>
      <Icon src={DeleteIcon} alt="" />
    </ToDeleteButton>
  )
}
const ToDeleteButton = styled(Button)`
  width: 10%;
  padding: 3px;
`

const Icon = styled.img`
  height: 20px;
`
