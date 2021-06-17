import styled from 'styled-components/macro'
import MemoryItem from '../components/MemoryItem'
import PropTypes from 'prop-types'

MemoriesPage.propTypes = {
  onDetail: PropTypes.func.isRequired,
  memories: PropTypes.arrayOf(
    PropTypes.shape({ ownImage: PropTypes.string, ownTitle: PropTypes.string })
  ),
}

export default function MemoriesPage({ memories, onDetail }) {
  return (
    <Wrapper>
      <h2>Your memories</h2>
      <ListWrapper>
        {memories.map(({ ownImage, ownTitle }) => (
          <li key={ownImage}>
            <MemoryItem
              ownImage={ownImage}
              ownTitle={ownTitle}
              onDetail={() => onDetail(ownImage)}
            />
          </li>
        ))}
      </ListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  h2 {
    margin-bottom: 0;
  }
`

const ListWrapper = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 10px;
  padding: 5px;
  font-weight: bold;
`
