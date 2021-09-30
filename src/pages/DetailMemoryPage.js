import { useState } from 'react'
import Button from '../components/Button'
import cancel from '../assets/images/icons/cancel.png'
import EditIcon from '../assets/images/icons/edit.png'
import IconButton from '../components/IconButton'
import PropTypes from 'prop-types'
import save from '../assets/images/icons/save.png'
import styled from 'styled-components/macro'
import ToMemoriesButton from '../components/ToMemoriesButton'

DetailMemoryPage.propTypes = {
  memory: PropTypes.objectOf(
    PropTypes.shape({
      image: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
      category: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  onNavigate: PropTypes.func,
  onEdit: PropTypes.func,
}

export default function DetailMemoryPage({
  memory,
  image,
  title,
  date,
  category,
  text,
  id,
  onNavigate,
  onEdit,
}) {
  const [isEdited, setIsEdited] = useState(false)
  const [memoriesInputs, setMemoriesInput] = useState({
    title: title,
    date: date,
    text: text,
    category: category,
    id: id,
  })
  return (
    <Wrapper>
      {isEdited ? (
        <EditForm onSubmit={onSubmit} aria-label="Edit your memory">
          <EditMemoryDetail>
            <Title>
              <input
                aria-label="Choose a name"
                id="upload-img"
                type="text"
                name="title"
                autoComplete="off"
                maxLength="100"
                value={memoriesInputs.title}
                onChange={handleChange}
              />
              <input
                aria-label="Choose a date"
                type="date"
                name="date"
                value={memoriesInputs.date}
                onChange={handleChange}
              />
            </Title>
            <Image src={image} alt="Memory" width="320" max-height="180" />
            <textarea
              aria-label="Write your text"
              rows="4"
              cols="30"
              name="text"
              maxLength="500"
              value={memoriesInputs.text}
              onChange={handleChange}
            />
          </EditMemoryDetail>
          <FormButtons>
            <CancelButton onClick={() => setIsEdited(!isEdited)}>
              <CancelIcon src={cancel} alt="" />
              Cancel
            </CancelButton>
            <SaveButton>
              <SaveIcon src={save} alt="" />
              Save changes
            </SaveButton>
          </FormButtons>
        </EditForm>
      ) : (
        <>
          <MemoryDetail>
            <Title>
              {' '}
              <IconButton onClick={() => setIsEdited(!isEdited)}>
                {' '}
                <img src={EditIcon} alt="" />
              </IconButton>
              <span>{formatTitle(title)}</span>
              <span>{formatDate(date)}</span>
            </Title>
            <Image src={image} alt="Memory" width="320" max-height="180" />
            <div>{category}</div>
            <Text>{text}</Text>
          </MemoryDetail>
          <MemoriesButton type="button" onClick={onNavigate} />
        </>
      )}
    </Wrapper>
  )

  function handleChange(event) {
    const { name, value } = event.target
    setMemoriesInput({ ...memoriesInputs, [name]: value })
  }

  function onSubmit(event) {
    event.preventDefault()
    const form = event.target
    const title = form.elements.title.value
    const date = form.elements.date.value
    const category = form.elements.category.value
    const text = form.elements.text.value

    const editedMemory = {
      ...memory,
      id,
      image,
      title: title,
      date: date,
      category: category,
      text: text,
    }

    onEdit(editedMemory)
  }
}

function formatDate(date) {
  return date.split('-').reverse().join('.')
}

function formatTitle(title) {
  return title.toUpperCase()
}

const Wrapper = styled.section`
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  font-weight: bold;
  height: 86vh;
  justify-content: space-between;
  margin: 15px 5px 5px 5px;
  place-items: center;
`
const Title = styled.div`
  align-items: center;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  padding: 4px;
  width: 80vw;

  img {
    height: 30px;
    width: 35px;
  }
`
const MemoryDetail = styled.div`
  align-items: center;
  background-color: var(--color-background);
  border-radius: var(--border-radius-global);
  display: flex;
  flex-direction: column;
  max-height: 90%;
  overflow-y: scroll;
  padding: 10px;
`
const Image = styled.img`
  border-radius: var(--border-radius-form);
  border: 4px;
  box-shadow: var(--shadow-img);
  max-height: 90%;
`
const Text = styled.span`
  margin-top: 10px;
  padding: 10px;
  text-align: justify;
`

const EditForm = styled.form`
  height: 90vh;
  width: 93vw;

  input {
    background-color: var(--color-background);
    border-radius: var(--border-radius-form);
    padding: 5px;
  }

  textarea {
    background-color: var(--color-background);
    border-radius: var(--border-radius-form);
    margin-top: 10px;
    max-height: auto;
    padding: 8px;
    width: 300px;
  }
`
const EditMemoryDetail = styled.div`
  align-items: center;
  background-color: var(--color-background);
  border-radius: var(--border-radius-global);
  display: flex;
  flex-direction: column;
  max-height: 85%;
  overflow-y: scroll;
  padding: 4px;
`
const FormButtons = styled.section`
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  margin-top: 25px;
`

const MemoriesButton = styled(ToMemoriesButton)`
  margin: 10px;
  width: 95%;
`

const CancelButton = styled(Button)`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  letter-spacing: 0.1em;
  padding: 4px;
  text-shadow: var(--shadow-text);
  text-transform: uppercase;
  width: 40%;
`

const CancelIcon = styled.img`
  height: 20px;
`

const SaveButton = styled(Button)`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  letter-spacing: 0.1em;
  padding: 4px;
  text-shadow: var(--shadow-text);
  text-transform: uppercase;
  width: 60%;
`

const SaveIcon = styled.img`
  height: 20px;
`
