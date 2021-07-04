import PropTypes from 'prop-types'
import Button from './Button'
// import DeleteIcon from '../assets/images/icons/delete.png'
import styled from 'styled-components/macro'

IconButton.propTypes = {
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
}

export default function IconButton({ children }) {
  return <IconButtonStyle>{children}</IconButtonStyle>
}
const IconButtonStyle = styled(Button)`
  background: none;
  box-shadow: none;
`
