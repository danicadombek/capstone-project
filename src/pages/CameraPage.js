import axios from 'axios'
import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import Button from '../components/Button'
import ToMemoriesButton from '../components/ToMemoriesButton'
import cam from '../assets/images/icons/cam.png'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

CameraPage.propTypes = {
  onNavigate: PropTypes.func,
  handleMemorySubmit: PropTypes.func,
}

export default function CameraPage({ onNavigate, handleMemorySubmit }) {
  const [image, setImage] = useState(null)

  return (
    <Wrapper>
      <FormWrap aria-label="Open your camera" onSubmit={onSubmit}>
        <Label>Start your cam</Label>
        <ImageSection>
          {image ? (
            <Image src={image} alt="" />
          ) : (
            <>
              <CamIcon src={cam} alt="" />
              <Input
                aria-label="Start your cam"
                id="upload-img"
                type="file"
                name="file"
                onChange={upload}
              />
            </>
          )}
        </ImageSection>
        <InputText
          aria-label="Choose a name"
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

  function onSubmit(event) {
    event.preventDefault()
    const form = event.target
    const title = form.elements.title.value

    const newMemory = {
      id: uuidv4(),
      title: title,
      image: image,
    }

    handleMemorySubmit(newMemory)
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
  font-size: 24px;
  margin-bottom: -15px;
  padding: 8px;
  text-align: center;
`

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-background-white);
  border-radius: var(--border-radius-global);
  box-shadow: var(--shadow-img);
  justify-content: space-evenly;
  max-height: 300px;
  min-height: 220px;
  width: 280px;
`

const CamIcon = styled.img`
  position: absolute;
`

const SaveButton = styled(Button)`
  padding: 4px;
  width: 260px;
`

const Image = styled.img`
  border-radius: var(--border-radius-global);
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
  border-radius: var(--border-radius-global);
  border: 4px solid #e4eaeb;
  box-shadow: var(--shadow-img);
  padding: 4px;
  width: 240px;
`
