import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default function Button({ children }) {
  return <ButtonStyle>{children}</ButtonStyle>
}

const ButtonStyle = styled.button`
  border-radius: 50px;
  background: #dbc9c1;
  box-shadow: 25px 25px 33px #baaba4, -25px -25px 33px #fce7de;
  max-width: auto;
`
