import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ToMemoriesButton from '../components/ToMemoriesButton'

DetailMemoryPage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  alt: PropTypes.string,
}

export default function DetailMemoryPage({
  image,
  title,
  date,
  text,
  onNavigate,
}) {
  return (
    <Wrapper>
      <MemoryDetail>
        <Title>
          {title.toUpperCase()} {formatDate(date)}
        </Title>
        <Image src={image} alt="Memory" width="320" max-height="180" />
        <Text>{text}</Text>
      </MemoryDetail>
      <ToMemoriesButton onClick={onNavigate} />
    </Wrapper>
  )
  function formatDate(date) {
    return date.split('-').reverse().join('.')
  }
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: space-between;
  place-items: center;
  color: var(--color-text);
  font-weight: bold;
  margin: 10px;
`

const MemoryDetail = styled.div`
  align-items: center;
  background-color: var(--color-background);
  border-radius: var(--border-radius-global);
  display: flex;
  flex-direction: column;
  max-height: 90%;
  padding: 10px;
  overflow-y: scroll;
`

const Image = styled.img`
  border-radius: 20px;
  border: 4px;
  box-shadow: var(--shadow-img);
  max-height: 80%;
`

const Title = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 18px;
`

const Text = styled.span`
  margin-top: 10px;
  padding: 10px;
  text-align: justify;
`
