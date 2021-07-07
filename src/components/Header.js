import logo from '../assets/images/logo.png'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Header.propTypes = {
  image: PropTypes.node,
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
