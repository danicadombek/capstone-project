import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ToMemoriesButton from '../components/ToMemoriesButton'

DetailMemoryPage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.number,
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
          {title} am {date}
        </Title>
        <Image src={image} alt="Memory" width="320" max-height="180" />
        <Text>{text}</Text>
      </MemoryDetail>
      <ToMemoriesButton onClick={onNavigate} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: space-between;
  place-items: center;
  color: var(--color-text);
  font-weight: bold;
  margin: 5px;
`

const MemoryDetail = styled.div`
  align-items: center;
  background-color: var(--color-background);
  border-radius: var(--border-radius-global);
  display: flex;
  flex-direction: column;
  max-height: 85%;
  padding: 10px;
`

const Image = styled.img`
  border-radius: 20px;
  border: 4px;
  box-shadow: var(--shadow-img);
  max-height: 70%;
`

const Title = styled.span`
  padding: 10px;
  text-align: center;
  font-size: 18px;
`

const Text = styled.span`
  margin-top: 10px;
  padding: 10px;
`
