import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ToMemoriesButton from '../components/ToMemoriesButton'

DetailMemoryPage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
}

export default function DetailMemoryPage({ image, title, onNavigate }) {
  return (
    <Wrapper>
      <ImageDetail>
        <Title>{title}</Title>
        <Image src={image} alt="Memory" width="320" max-height="180" />
      </ImageDetail>

      <ToMemoriesButton onClick={onNavigate} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 86vh;
  justify-content: space-between;
  place-items: center;
  color: var(--color-text);
  font-weight: bold;
`

const ImageDetail = styled.div`
  align-items: center;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  max-height: 80%;
  max-width: 90%;
  padding: 10px;
`

const Image = styled.img`
  border-radius: 20px;
  border: 4px;
  box-shadow: var(--shadow-img);
  max-height: 90%;
`

const Title = styled.span`
  padding: 5px;
  text-align: center;
  font-size: 20px;
`
