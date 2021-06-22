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
  image: PropTypes.string,
  upload: PropTypes.func,
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
              label="New memory"
              id="upload-img"
              type="file"
              name="file"
              onChange={upload}
            />
          )}
        </ImageSection>
        <InputText
          label="Memory name"
          id="upload-img"
          type="text"
          name="title"
          placeholder="Give your memory a name"
        />
        <Button>Save your memory</Button>
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

const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5em;
`

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 0;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5em;
  height: 86vh;
`

const ImageSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 230px;
  max-height: max-content;
  width: 230px;
  background: #e4eaeb;
  border-radius: 50px;

  span {
    letter-spacing: 4px;
    font-size: larger;
    text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
  }
`

const Image = styled.img`
  width: 100%;
  border: 4px solid #e4eaeb;
  border-radius: 50px;
`

const Input = styled.input`
  height: 230px;
  width: 230px;
`

const InputText = styled.input`
  border: 4px solid #e4eaeb;
  border-radius: 50px;
`
