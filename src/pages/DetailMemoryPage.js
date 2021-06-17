import styled from 'styled-components/macro'
import ToMemoriesButton from '../components/ToMemoriesButton'
import PropTypes from 'prop-types'

DetailMemoryPage.propTypes = {
  ownImage: PropTypes.string,
  ownTitle: PropTypes.string,
  alt: PropTypes.string,
}

export default function DetailMemoryPage({ ownImage, ownTitle, onNavigate }) {
  return (
    <Wrapper>
      <ImageDetail>
        <Image src={ownImage} alt="Memory" width="100%" />
        {ownTitle}
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
