import PropTypes from 'prop-types'
import Button from '../components/Button'
import styled from 'styled-components/macro'
import ToMemoriesButton from '../components/ToMemoriesButton'
import IconButton from '../components/IconButton'
import { useState } from 'react'
import EditIcon from '../assets/images/icons/edit.png'
import cancel from '../assets/images/icons/cancel.png'
import save from '../assets/images/icons/save.png'

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
}

export default function DetailMemoryPage({
  memory,
  image,
  title,
  date,
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
    id: id,
  })
  return (
    <Wrapper>
      {isEdited ? (
        <EditForm onSubmit={onSubmit}>
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
                type="date"
                name="date"
                value={memoriesInputs.date}
                onChange={handleChange}
              />
            </Title>
            <Image src={image} alt="Memory" width="320" max-height="180" />
            <textarea
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
              <span>{title.toUpperCase()}</span>
              <span>{formatDate(date)}</span>
            </Title>
            <Image src={image} alt="Memory" width="320" max-height="180" />
            <Text>{text}</Text>
          </MemoryDetail>
          <MemoriesButton onClick={onNavigate} />
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
    const text = form.elements.text.value

    const editedMemory = {
      ...memory,
      id,
      image,
      title: title,
      date: date,
      text: text,
    }

    onEdit(editedMemory)
  }
}

function formatDate(date) {
  return date.split('-').reverse().join('.')
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 86vh;
  justify-content: space-between;
  place-items: center;
  color: var(--color-text);
  font-weight: bold;
  margin: 15px 5px 5px 5px;
`
const Title = styled.div`
  padding: 4px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  padding: 10px;
  overflow-y: scroll;
`
const Image = styled.img`
  border-radius: 20px;
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
    margin-top: 10px;
    background-color: var(--color-background);
    border-radius: var(--border-radius-form);
    width: 300px;
    padding: 8px;
    max-height: auto;
  }
`
const EditMemoryDetail = styled.div`
  align-items: center;
  background-color: var(--color-background);
  border-radius: var(--border-radius-global);
  display: flex;
  flex-direction: column;
  max-height: 85%;
  padding: 4px;
  overflow-y: scroll;
`
const FormButtons = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 25px;
  gap: 10px;
`

const MemoriesButton = styled(ToMemoriesButton)`
  margin: 10px;
  width: 95%;
`

const CancelButton = styled(Button)`
  padding: 4px;
  width: 40%;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  letter-spacing: 0.1em;
  text-shadow: var(--shadow-text);
  text-transform: uppercase;
`

const CancelIcon = styled.img`
  height: 20px;
`

const SaveButton = styled(Button)`
  padding: 4px;
  width: 60%;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  letter-spacing: 0.1em;
  text-shadow: var(--shadow-text);
  text-transform: uppercase;
`

const SaveIcon = styled.img`
  height: 20px;
`
