import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function Header({ children }) {
  return (
    <Background>
      <Headline>{children}</Headline>
    </Background>
  )
}

const Headline = styled.h2`
  font-weight: bolder;
  text-align: center;
  padding: 10px;
  margin: 0;
  font-size: 40px;
`

const Background = styled.div`
  background-color: hsl(9, 7%, 62%, 0.35);
`
