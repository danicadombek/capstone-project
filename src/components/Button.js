import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default styled.button`
  border-radius: 50px;
  background: #e4eaeb;
  box-shadow: 25px 25px 33px #baaba4;
  max-width: auto;
  font-size: 18px;
  font-weight: semi-bold;
`
