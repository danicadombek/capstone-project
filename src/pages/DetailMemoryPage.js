import styled from 'styled-components/macro'
import BackButton from '../components/BackButton'
import PropTypes from 'prop-types'

DetailMemoryPage.propTypes = {
  image: PropTypes.node,
  alt: PropTypes.string,
}

export default function DetailMemoryPage({ image, onNavigate }) {
  return (
    <Wrapper>
      <ImageDetail>
        <Image src={image} alt="Memory 1" width="100%" />
      </ImageDetail>
      <nav>
        <BackButton onClick={onNavigate}>Back to memories</BackButton>
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
  width: 90%;

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
  left: 1.35em;
  right: 1.35em;
  padding: 10px;
  width: 84vw;
`
