import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import logo from '../assets/logo.png'

Header.propTypes = {
  image: PropTypes.node.isRequired,
}

export default function Header() {
  return (
    <LogoStyle>
      <Logo src={logo} alt="" />
    </LogoStyle>
  )
}

const LogoStyle = styled.section`
  display: grid;
  justify-items: center;
  margin: 10px;
`

const Logo = styled.img`
  width: 80%;
`
