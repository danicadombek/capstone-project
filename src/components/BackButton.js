import Button from '../components/Button'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default function BackButton(props) {
  return <BackButtonStyle {...props}>&lt; Back</BackButtonStyle>
}
const BackButtonStyle = styled(Button)`
  margin: 10px;
  width: 30%;
`
