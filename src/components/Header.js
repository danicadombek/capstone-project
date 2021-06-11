import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function Header({ children }) {
  return <Headline>{children}</Headline>
}

const Headline = styled.h2`
  font-weight: bolder;
  text-align: center;
  padding: 10px;
  margin: 0;
  font-size: 40px;
`
