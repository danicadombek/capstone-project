import styled from 'styled-components/macro'
import ToMemoriesButton from '../components/ToMemoriesButton'
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
        <BackButtonStyle onClick={onNavigate} />
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: space-between;
  height: 86vh;
  width: 90%;
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
  left: 1.15em;
  padding: 10px;
  width: 85%;
`

const BackButtonStyle = styled(ToMemoriesButton)`
  width: 88%;
`
