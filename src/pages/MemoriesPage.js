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
        <BackToCam onClick={onNavigate}> &lt; Cam</BackToCam>
        <h2>Your memories</h2>
      </Title>
      <ListWrapper>
        {memories.map(({ image, title, id }) => (
          <li key={id}>
            <MemoryItem
              image={image}
              title={title}
              onDetail={() => onDetail(image)}
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
  min-height: 86vh;
  overflow-y: scroll;
`

const Title = styled.section`
  align-items: center;
  display: flex;
`

const ListWrapper = styled.ul`
  display: grid;
  font-weight: bold;
  gap: 10px;
  list-style-type: none;
  padding: 5px;
`

const BackToCam = styled(Button)`
  background: none;
  color: #e4eaeb;
  left: -30px;
  position: relative;
  top: 0;
`
