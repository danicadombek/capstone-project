import styled from 'styled-components/macro'
import Button from '../components/Button'
import PropTypes from 'prop-types'

BackButton.propTypes = {
  onNavigate: PropTypes.func.isRequired,
}

export default function BackButton(props) {
  return <BackButtonStyle {...props}>&lt; Back</BackButtonStyle>
}
const BackButtonStyle = styled(Button)`
  left: -30px;
  padding: 3px;
  position: relative;
  top: 0;
  width: 30%;
`
