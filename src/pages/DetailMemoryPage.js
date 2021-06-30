import PropTypes from 'prop-types'
import Button from '../components/Button'
import styled from 'styled-components/macro'
import ToMemoriesButton from '../components/ToMemoriesButton'
import EditButton from '../components/EditButton'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

DetailMemoryPage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
  alt: PropTypes.string,
  onEdit: PropTypes.func,
  handleEditedMemory: PropTypes.func,
}

export default function DetailMemoryPage({
  image,
  title,
  date,
  text,
  id,
  onEdit,
  onNavigate,
  handleEditedMemory,
}) {
  const [isEdited, setIsEdited] = useState(false)

  return (
    <Wrapper>
      {isEdited === false && (
        <>
          <MemoryDetail>
            <Title>
              {title.toUpperCase()} {formatDate(date)}{' '}
              <EditButton onClick={() => setIsEdited(!isEdited)} />
            </Title>
            <Image src={image} alt="Memory" width="320" max-height="180" />
            <Text>{text}</Text>
          </MemoryDetail>
          <ToMemoriesButton onClick={onNavigate} />
        </>
      )}
      {isEdited && (
        <>
          <form onSubmit={onSubmit} onEdit={onEdit}>
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
                  onChange={title.value}
                />
                <input type="date" value={date} onChange={date.value} />
              </Title>
              <SavedImage
                src={image}
                alt="Memory"
                width="150"
                max-height="180"
              />
              <Textarea
                rows="4"
                cols="30"
                name="textarea"
                maxlength="500"
                value={text}
                onChange={text.value}
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
  function onSubmit(event) {
    event.preventDefault()
    const form = event.target
    const title = form.elements.title.value
    const date = form.elements.date.value
    const text = form.elements.textarea.value

    const editedMemory = {
      id: uuidv4(),
      title: title,
      image: image,
      date: date,
      text: text,
    }

    handleEditedMemory(editedMemory)
    form.reset()
  }
}

function formatDate(date) {
  return date.split('-').reverse().join('.')
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 85vh;
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
