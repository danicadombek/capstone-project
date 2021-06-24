//@ts-check
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import MemoryItem from '../components/MemoryItem'

MemoriesPage.propTypes = {
  onNavigate: PropTypes.func,
  onDetail: PropTypes.func.isRequired,
  memories: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

export default function MemoriesPage({ memories, onDetail, onNavigate }) {
  return (
    <Wrapper>
      <Title>
        <BackToCam onClick={onNavigate}> &lt;</BackToCam>
        <h2>Your memories</h2>
      </Title>
      <ListWrapper>
        {memories.map(({ image, title, id }) => (
          <li key={id}>
            <MemoryItem
              image={image}
              title={title}
              onDetail={() => onDetail(image, title)}
            />
          </li>
        ))}
      </ListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-top: -130px;
`

const Title = styled.section`
  align-items: center;
  display: flex;
  justify-content: flex-start;

  h2 {
    font-size: 22px;
  }
`

const ListWrapper = styled.ul`
  display: grid;
  font-weight: bold;
  gap: 10px;
  list-style-type: none;
  padding: 5px;
  border: var(--border-radius-global);
`

const BackToCam = styled(Button)`
  left: -30px;
  position: relative;
  top: 0;
  padding: 3px;
  width: 30%;
`
