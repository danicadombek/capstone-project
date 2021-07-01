import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function Header({ children }) {
  return <Headline>{children}</Headline>
}

const Headline = styled.h2`
  font-size: 40px;
  font-style: inherit;
  font-weight: bold;
  margin: 0;
  padding: 10px;
  text-align: center;
  letter-spacing: 0.5em;
`
