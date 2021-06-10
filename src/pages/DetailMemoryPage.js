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
      <ImageDetail>
        <Image src={image} alt="Memory 1" width="100%" />
      </ImageDetail>
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
  height: 86.9vh;

  span {
    letter-spacing: -1px;
    font-size: larger;
    text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
  }
`
const Image = styled.img`
  border-radius: 20px;
  border-radius: 20px;
  border: 4px;
  border-color: white;
`

const ImageDetail = styled.div`
  background-color: hsl(60, 2%, 80%, 0.8);
  position: absolute;
  left: 20px;
  padding: 10px;
  width: 84vw;
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
