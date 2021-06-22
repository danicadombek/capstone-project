import styled from 'styled-components/macro'
import ToMemoriesButton from '../components/ToMemoriesButton'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import axios from 'axios'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

CameraPage.propTypes = {
  image: PropTypes.string.isRequired,
  upload: PropTypes.func.isRequired,
  onNavigate: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default function CameraPage({ onNavigate, onSubmit }) {
  const [image, setImage] = useState(null)

  return (
    <Wrapper>
      <Title>Start your cam</Title>
      <FormWrap aria-label="Open your camera" onSubmit={handleSubmit}>
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
        <InputText
          aria-label="Choose a name"
          label="Memory name"
          id="upload-img"
          type="text"
          name="title"
          placeholder="Give it a name"
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

  function handleSubmit(event) {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  height: 86vh;
`

const Title = styled.h2`
  margin-bottom: 0;
`

const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
`

const ImageSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 200px;
  max-height: 300px;
  width: 300px;
  background: #e4eaeb;
  border-radius: 50px;

  span {
    letter-spacing: 4px;
    font-size: larger;
    text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
  }
`

const SaveButton = styled(Button)`
  width: 300px;
  padding: 4px;
`

const Image = styled.img`
  width: 100%;
  height: 95%;
  border: 4px solid #e4eaeb;
  border-radius: 50px;
`

const Input = styled.input`
  font-size: 20px;
  position: absolute;
  left: 20%;
  color: black;
`

const InputText = styled.input`
  border: 4px solid #e4eaeb;
  border-radius: 50px;
  width: 280px;
  padding: 4px;
`
