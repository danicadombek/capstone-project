//@ts-check
import styled from 'styled-components/macro'
import MemoryItem from '../components/MemoryItem'
import Button from '../components/Button'
import PropTypes from 'prop-types'

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
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  min-height: 86vh;
`

const Title = styled.section`
  display: flex;
  align-items: center;
`

const ListWrapper = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 10px;
  padding: 5px;
  font-weight: bold;
`

const BackToCam = styled(Button)`
  background: none;
  color: #e4eaeb;
  position: relative;
  top: 0;
  left: -30px;
`
