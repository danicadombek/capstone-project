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

  handleEditSubmit: PropTypes.func,
}

export default function DetailMemoryPage({
  memory,
  image,
  title,
  date,
  text,
  id,
  onNavigate,
  handleEditSubmit,
}) {
  const [isEdited, setIsEdited] = useState(false)

  return (
    <Wrapper>
      {isEdited === false && (
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
          <ToMemoriesButton onClick={onNavigate} />
        </>
      )}
      {isEdited && (
        <>
          <EditForm onSubmit={onSubmit}>
            <EditMemoryDetail>
              <Title>
                <input
                  aria-label="Choose a name"
                  id="upload-img"
                  type="text"
                  name="title"
                  autoComplete="off"
                  maxlength="100"
                  placeholder={title}
                />
                <input type="date" name="date" placeholder={date} />
              </Title>
              <Image src={image} alt="Memory" width="320" max-height="180" />
              <textarea
                rows="4"
                cols="30"
                name="textarea"
                maxlength="500"
                placeholder={text}
              />
            </EditMemoryDetail>
            <FormButtons>
              <Button onClick={() => setIsEdited(!isEdited)}>Cancel</Button>
              <Button>Save changes</Button>
            </FormButtons>
          </EditForm>
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
  height: 86vh;
  justify-content: space-between;
  place-items: center;
  color: var(--color-text);
  font-weight: bold;
  margin: 5px;
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
  max-height: 80%;
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
  margin-top: 30px;

  button {
    padding: 4px;
    width: 40%;
  }
`
