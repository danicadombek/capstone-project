import axios from 'axios'
import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import Button from '../components/Button'
import ToMemoriesButton from '../components/ToMemoriesButton'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

CameraPage.propTypes = {
  image: PropTypes.string.isRequired,
  upload: PropTypes.func.isRequired,
  onNavigate: PropTypes.func,
  handleMemorySubmit: PropTypes.func,
}

export default function CameraPage({ onNavigate, onSubmit }) {
  const [image, setImage] = useState(null)

  return (
    <Wrapper>
      <FormWrap aria-label="Open your camera" onSubmit={handleMemorySubmit}>
        <Label for="New Memory">
          Start your cam with click in the white space
        </Label>
        <ImageSection>
          {image ? (
            <Image src={image} alt="" />
          ) : (
            <Input
              aria-label="Start your cam"
              label="New memory"
              id="upload-img"
              type="file"
              name="file"
              onChange={upload}
            />
          )}
        </ImageSection>
        <LabelText>Name for your memory:</LabelText>
        <InputText
          aria-label="Choose a name"
          label="Memory name"
          id="upload-img"
          type="text"
          name="title"
          placeholder="Choose a name"
        />
        <SaveButton>Save your memory</SaveButton>
      </FormWrap>
      <ToMemoriesButton onClick={onNavigate}>To your memories</ToMemoriesButton>
    </Wrapper>
  )

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', PRESET)

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(saveImage)
      .catch(err => console.error(err))
  }

  function saveImage(response) {
    setImage(response.data.url)
  }

  function handleMemorySubmit(event) {
    event.preventDefault()
    const form = event.target
    const title = form.elements.title.value

    const newMemory = {
      id: uuidv4(),
      title: title,
      image: image,
    }

    onSubmit(newMemory)
    form.reset()
  }
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2em;
  height: 86vh;
  justify-content: space-between;
  width: 100%;
`

const FormWrap = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  justify-content: center;
`

const Label = styled.label`
  font-size: 20px;
  margin-bottom: -15px;
  padding: 8px;
  text-align: center;
`

const ImageSection = styled.div`
  align-items: center;
  background: var(--color-background-white);
  border-radius: var(--border-radius-global);
  box-shadow: var(--shadow-img);
  display: flex;
  justify-content: space-evenly;
  max-height: 300px;
  min-height: 220px;
  width: 280px;

  span {
    font-size: larger;
    letter-spacing: 4px;
    text-shadow: var(--shadow-text);
  }
`

const LabelText = styled.label`
  font-weight: bold;
  margin-bottom: -15px;
`

const SaveButton = styled(Button)`
  padding: 4px;
  width: 260px;
`

const Image = styled.img`
  border-radius: 50px;
  border: 4px solid #e4eaeb;
  height: 95%;
  width: 95%;
`

const Input = styled.input`
  height: 220px;
  opacity: 0;
  width: 280px;
`

const InputText = styled.input`
  border-radius: 50px;
  border: 4px solid #e4eaeb;
  box-shadow: var(--shadow-img);
  padding: 4px;
  width: 240px;
`
