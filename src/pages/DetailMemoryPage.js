import PropTypes from 'prop-types'
import Button from '../components/Button'
import styled from 'styled-components/macro'
import ToMemoriesButton from '../components/ToMemoriesButton'
import IconButton from '../components/IconButton'
import { useState } from 'react'
import EditIcon from '../assets/images/icons/edit.png'

DetailMemoryPage.propTypes = {
  memory: PropTypes.objectOf(
    PropTypes.shape({
      image: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  onEdit: PropTypes.func,
  handleEditSubmit: PropTypes.func,
}

export default function DetailMemoryPage({
  memory,
  image,
  title,
  date,
  text,
  id,
  onEdit,
  onNavigate,
  handleEditSubmit,
}) {
  const [isEdited, setIsEdited] = useState(false)
  // const [title, setEditTitle] = useState('')
  const [memoriesInputs, setMemoriesInputs] = useState({
    title,
    date,
    text,
  })

  return (
    <Wrapper>
      {isEdited === false && (
        <>
          <MemoryDetail>
            <Title>
              {title.toUpperCase()} {formatDate(date)}{' '}
              <IconButton onClick={() => setIsEdited(!isEdited)}>
                {' '}
                <Icon src={EditIcon} alt="" />
              </IconButton>
            </Title>
            <Image src={image} alt="Memory" width="320" max-height="180" />
            <Text>{text}</Text>
          </MemoryDetail>
          <ToMemoriesButton onClick={onNavigate} />
        </>
      )}
      {isEdited && (
        <>
          <form onSubmit={onSubmit}>
            <EditMemoryDetail>
              <Title>
                <input
                  aria-label="Choose a name"
                  id="upload-img"
                  type="text"
                  name="title"
                  autoComplete="off"
                  maxlength="100"
                  value={title}
                  onChange={handleChange}
                />
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={handleChange}
                />
              </Title>
              <SavedImage
                src={image}
                alt="Memory"
                width="180"
                max-height="180"
              />
              <Textarea
                rows="4"
                cols="30"
                name="textarea"
                maxlength="500"
                value={text}
                onChange={handleChange}
              />
            </EditMemoryDetail>
            <FormButtons>
              <Button>Save changes</Button>
              <Button onClick={() => setIsEdited(!isEdited)}>Cancel</Button>
            </FormButtons>
          </form>
        </>
      )}
    </Wrapper>
  )

  function handleChange(event) {
    const { title, date, text } = event.target
    setMemoriesInputs({ ...memoriesInputs, title, date, text })
  }

  function onSubmit(event) {
    event.preventDefault()
    const form = event.target
    const title = form.elements.title.value
    const date = form.elements.date.value
    const text = form.elements.textarea.value

    const editedMemory = {
      ...memory,
      image,
      title,
      date,
      text,
      id,
    }

    handleEditSubmit(editedMemory)
  }
}

function formatDate(date) {
  return date.split('-').reverse().join('.')
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  place-items: center;
  color: var(--color-text);
  font-weight: bold;
  margin: 5px;
  overflow-y: scroll;
`

const Textarea = styled.textarea`
  border-radius: var(--border-radius-form);
  width: 300px;
  padding: 8px;
`

const MemoryDetail = styled.div`
  align-items: center;
  background-color: var(--color-background);
  border-radius: var(--border-radius-global);
  display: flex;
  flex-direction: column;
  max-height: 90%;
  padding: 10px;
  overflow-y: scroll;
`

const Image = styled.img`
  border-radius: 20px;
  border: 4px;
  box-shadow: var(--shadow-img);
  max-height: 80%;
`

const Title = styled.div`
  padding: 10px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.span`
  margin-top: 10px;
  padding: 10px;
  text-align: justify;
`

const FormButtons = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`

const EditMemoryDetail = styled.div`
  align-items: center;
  background-color: var(--color-background);
  border-radius: var(--border-radius-global);
  display: flex;
  flex-direction: column;
  max-height: 90%;
  padding: 10px;
  overflow-y: scroll;
`

const SavedImage = styled.img`
  border-radius: 20px;
  border: 4px;
  box-shadow: var(--shadow-img);
  max-height: 50%;
`

const Icon = styled.img`
  height: 30px;
  width: 35px;
`
