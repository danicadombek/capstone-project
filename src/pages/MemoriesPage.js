import styled from 'styled-components/macro'
import MemoryItem from '../components/MemoryItem'
import PropTypes from 'prop-types'

MemoriesPage.propTypes = {
  memories: PropTypes.arrayOf(
    PropTypes.shape({ image: PropTypes.node, subtitle: PropTypes.string })
  ),
}

export default function MemoriesPage({ memories }) {
  return (
    <Wrapper>
      <h2>Your memories</h2>
      <ListWrapper>
        {memories.map(memory => (
          <MemoryItem
            key={memory.image}
            image={memory.image}
            subtitle={memory.subtitle}
          />
        ))}
      </ListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 0;
  }
`

const ListWrapper = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 20px;
  padding: 5px;
`
