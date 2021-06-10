import styled from 'styled-components/macro'
import Button from '../components/Button'
import PropTypes from 'prop-types'
import MemoriesIcon from '../assets/images/icons/galery.png'

DetailMemoryPage.propTypes = {
  image: PropTypes.node,
  onNavigate: PropTypes.func.isRequired,
}

export default function DetailMemoryPage({ image, onNavigate }) {
  return (
    <Wrapper>
      <Image src={image} alt="" width="95%" />
      <nav>
        <ButtonStyle onClick={onNavigate}>
          <Icon src={MemoriesIcon} alt="" />
          <span>Back to memories</span>
        </ButtonStyle>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 86vh;

  span {
    letter-spacing: -1px;
    font-size: larger;
  }
`
const Image = styled.img`
  border-radius: 20px;
  box-shadow: 5px 5px 15px 5px #6d6d6d;
  margin-top: 20px;
`

const ButtonStyle = styled(Button)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  left: 23px;
  bottom: 25px;
  width: 90vw;
  height: 5vh;
`

const Icon = styled.img`
  height: 20px;
`
