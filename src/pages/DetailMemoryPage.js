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
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  font-weight: bold;
  height: 85vh;
  justify-content: space-between;
  margin: 10px;
  place-items: center;
`

const MemoryDetail = styled.div`
  align-items: center;
  background-color: var(--color-background);
  border-radius: var(--border-radius-global);
  display: flex;
  flex-direction: column;
  max-height: 90%;
  overflow-y: scroll;
  padding: 10px;
`

const Image = styled.img`
  border-radius: 20px;
  border: 4px;
  box-shadow: var(--shadow-img);
  max-height: 80%;
`

const Title = styled.div`
  font-size: 18px;
  padding: 10px;
  text-align: center;
`

const Text = styled.span`
  margin-top: 10px;
  padding: 10px;
  text-align: justify;
`
