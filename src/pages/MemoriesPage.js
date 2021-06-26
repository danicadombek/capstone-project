//@ts-check
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import MemoryItem from '../components/MemoryItem'
import DeleteButton from '../components/DeleteButton'

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
  onDelete: PropTypes.func,
}

export default function MemoriesPage({
  onNavigate,
  onDetail,
  memories,
  onDelete,
}) {
  return (
    <Wrapper>
      <Title>
        <BackToCam onClick={onNavigate}> &lt; Cam</BackToCam>
        <h2>Your memories</h2>
      </Title>
      <ListWrapper>
        {memories.map(({ image, title, id, onDelete }) => (
          <ListItem key={id}>
            <DeleteButton onDelete={() => onDelete(id)} />
            <MemoryItem
              image={image}
              title={title}
              onDetail={() => onDetail(image, title)}
            />
          </ListItem>
        ))}
      </ListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 10%;
  justify-content: center;
  overflow-y: scroll;
`

const Title = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;

  h2 {
    font-size: 22px;
  }
`

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  gap: 10px;
  list-style-type: none;
  padding: 0;
  width: 90vw;
`

const ListItem = styled.li`
  display: flex;
  gap: 10px;
  background-color: var(--color-background);
  width: 100%;
  border-radius: 20px;
  box-shadow: var(--border-radius-global);
`

const BackToCam = styled(Button)`
  left: -30px;
  padding: 3px;
  position: relative;
  top: 0;
  width: 30%;
`
