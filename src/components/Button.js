import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

styled.button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default styled.button`
  background: var(--color-background-white);
  border-radius: var(--border-radius-global);
  border: none;
  box-shadow: var(--shadow-img);
  font-size: 18px;
  font-weight: 'semi-bold';
  max-width: auto;
  text-shadow: var(--shadow-text);
`
