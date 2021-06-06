import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return <Headline>{children}</Headline>
}

const Headline = styled.header`
  font-weight: bolder;
  text-align: center;
  padding: 10px;
  margin: 0;
  font-stretch: ultra-expanded;
  font-size: 40px;
`
