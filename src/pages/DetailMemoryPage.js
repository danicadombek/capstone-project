import styled from 'styled-components/macro'
import ToMemoriesButton from '../components/ToMemoriesButton'
import PropTypes from 'prop-types'

DetailMemoryPage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
}

export default function DetailMemoryPage({ image, title, onNavigate }) {
  return (
    <Wrapper>
      <ImageDetail>
        <Image src={image} alt="Memory" width="320" max-height="240" />
        {title}
      </ImageDetail>
      <ToMemoriesButton onClick={onNavigate} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-between;
  height: 86vh;
`
const ImageDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(60, 2%, 80%, 0.8);
  max-height: max-content;
  padding: 10px;
  max-width: 88%;
`

const Image = styled.img`
  border-radius: 20px;
  border: 4px;
`
