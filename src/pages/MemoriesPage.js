//@ts-check
import Button from '../components/Button'
import IconButton from '../components/IconButton'
import MemoryItem from '../components/MemoryItem'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import DeleteIcon from '../assets/images/icons/delete.png'
import cam from '../assets/images/icons/cam.png'
import search from '../assets/images/icons/search.png'
import { useState } from 'react'

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
  onSubmit,
}) {
  const [searchMemory, setSearchMemory] = useState(null)
  return (
    <Wrapper>
      <Title>
        <BackToCam onClick={onNavigateBack}>
          &lt;
          <CamIcon src={cam} alt="" />
        </BackToCam>
        <h2>Your memories</h2>
      </Title>
      <FormSearch onSubmit={handleSearch}>
        <input
          type="text"
          onChange={event => setSearchMemory(event.target.value.toLowerCase())}
          placeholder="Search your memory"
          name="search"
          autoComplete="off"
          aria-label="Search your memory"
        />{' '}
        <SearchButton>
          <SearchIcon src={search} alt="" />
        </SearchButton>
      </FormSearch>
      <ListWrapper>
        {searchMemory
          ? memories
              .filter(memory =>
                memory.title.toLowerCase().includes(searchMemory)
              )
              .map(({ image, title, date, text, id }) => (
                <ListItem key={id}>
                  <IconButton onClick={() => onDelete(id)}>
                    <DeletedIcon src={DeleteIcon} alt="" />
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
              ))
          : memories.map(({ image, title, date, text, id }) => (
              <ListItem key={id}>
                <IconButton onClick={() => onDelete(id)}>
                  <DeletedIcon src={DeleteIcon} alt="" />
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

  function handleSearch(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.search.value
    onSubmit(searchMemory)
  }
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 12% 8%;
  justify-content: center;
  overflow-y: scroll;
`

const Title = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 20px 15px 20px 4px;

  h2 {
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-title);
  }
`

const FormSearch = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    height: 35px;
    padding: 10px;
    margin: 20px 0;
    border-radius: var(--border-radius-form);
    width: 80%;
  }
`

const SearchButton = styled(Button)`
  width: 18%;
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

const DeletedIcon = styled.img`
  height: 30px;
  width: 35px;
`

const SearchIcon = styled.img`
  height: 30px;
`
