//@ts-check
import Button from '../components/Button'
import IconButton from '../components/IconButton'
import MemoryItem from '../components/MemoryItem'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import DeleteIcon from '../assets/images/icons/delete.png'
import cam from '../assets/images/icons/cam.png'

MemoriesPage.propTypes = {
  onNavigateBack: PropTypes.func,
  onDetail: PropTypes.func.isRequired,
  memory: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func.isRequired,
}

export default function MemoriesPage({
  onNavigateBack,
  onDetail,
  memories,
  onDelete,
}) {
  return (
    <Wrapper>
      <Title>
        <BackToCam onClick={onNavigateBack}>
          &lt;
          <CamIcon src={cam} alt="" />
        </BackToCam>
        <h2>Your memories</h2>
      </Title>
      <form>
        <InputSearch type="text"></InputSearch>
      </form>
      <ListWrapper>
        {memories.map(({ image, title, date, text, id }) => (
          <ListItem key={id}>
            <IconButton onClick={() => onDelete(id)}>
              <Icon src={DeleteIcon} alt="" />
            </IconButton>
            <MemoryItem
              image={image}
              title={title}
              date={date}
              text={text}
              id={id}
              onDetail={() => onDetail(image, title, date, text, id)}
            />
          </ListItem>
        ))}
      </ListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 10% 10%;
  justify-content: center;
  overflow-y: scroll;
`

const Title = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 25px 15px 10px 4px;

  h2 {
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-title);
  }
`

const InputSearch = styled.input`
  height: 30px;
  padding: 4px;
  margin: 20px 0;
  border-radius: var(--border-radius-form);
  width: 80%;
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
  border-radius: var(--border-radius-form);
`

const BackToCam = styled(Button)`
  padding: 0;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const CamIcon = styled.img`
  height: 40px;
`

const Icon = styled.img`
  height: 30px;
  width: 35px;
`
