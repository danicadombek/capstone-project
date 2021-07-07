import Button from './Button'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

IconButton.propTypes = {
  onClick: PropTypes.func,
}

export default function IconButton(props) {
  return <IconButtonStyle {...props} />
}
const IconButtonStyle = styled(Button)`
  background: none;
  box-shadow: none;
`
