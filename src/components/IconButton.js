import PropTypes from 'prop-types'
import Button from './Button'
import DeleteIcon from '../assets/images/icons/delete.png'
import styled from 'styled-components/macro'

DeleteButton.propTypes = {
  onClick: PropTypes.func,
}

export default function DeleteButton(props) {
  return (
    <DeleteButtonStyle {...props}>
      <Icon src={DeleteIcon} alt="" />
    </DeleteButtonStyle>
  )
}
const DeleteButtonStyle = styled(Button)`
  background: none;
  box-shadow: none;
`

const Icon = styled.img`
  height: 30px;
  width: 35px;
`
