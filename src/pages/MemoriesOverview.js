import styled from 'styled-components/macro'
import MemoryItems from '../components/MemoryItem'
import PropTypes from 'prop-types'

MemoriesOverview.propTypes = {
  image: PropTypes.node,
  subtitle: PropTypes.string,
}

export default function MemoriesOverview() {
  return (
    <Wrapper>
      <h2>Your memories</h2>
      <ListWrapper>
        <MemoryItems subtitle="Memory 1" />
        <MemoryItems subtitle="Memory 2" />
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
