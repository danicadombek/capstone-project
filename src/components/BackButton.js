import styled from 'styled-components/macro'
import Button from '../components/Button'
import PropTypes from 'prop-types'

BackButton.propTypes = {
  onNavigateBack: PropTypes.func.isRequired,
}

export default function BackButton(props) {
  return <BackButtonStyle {...props}>&lt; Back</BackButtonStyle>
}
const BackButtonStyle = styled(Button)`
  width: 30%;
  margin: 10px;
`
