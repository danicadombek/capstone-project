import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import Button from '../components/Button'
import cam from '../assets/images/icons/cam.png'
import home from '../assets/images/icons/home.png'
import PropTypes from 'prop-types'
import save from '../assets/images/icons/save.png'
import styled from 'styled-components/macro'
import ToMemoriesButton from '../components/ToMemoriesButton'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

CameraPage.propTypes = {
  onNavigate: PropTypes.func,
  onNavigateBack: PropTypes.func,
  handleMemorySubmit: PropTypes.func.isRequired,
}

export default function CameraPage({
  onNavigateBack,
  onNavigate,
  handleMemorySubmit,
}) {
  const [image, setImage] = useState(null)

  return (
    <Wrapper>
      <FormWrap aria-label="Open your camera" onSubmit={onSubmit}>
        <Title>
          <BackButton onClick={onNavigateBack}>
            {' '}
            &lt;
            <HomeIcon src={home} alt="" />
          </BackButton>
          <Label>Start your cam</Label>
        </Title>
        <ImageSection>
          {image ? (
            <Image src={image} alt="" />
          ) : (
            <>
              <CamIcon src={cam} alt="" />
              <InputImage
                aria-label="Start your cam"
                id="upload-img"
                type="file"
                name="file"
                onChange={upload}
              />
            </>
          )}
        </ImageSection>
        <TitleDate>
          <InputTitle
            aria-label="Choose a title"
            id="upload-img"
            type="text"
            name="title"
            placeholder="Choose a title"
            autoComplete="off"
            maxLength="10"
          />
          <Datepicker type="date" name="date" aria-label="Choose a date" />
        </TitleDate>
        <Textarea
          rows="4"
          cols="30"
          placeholder="This is the place for your thoughts."
          name="textarea"
          maxLength="500"
        />
        <SaveButton>
          {' '}
          <SaveIcon src={save} alt="" />
          Save your memory
        </SaveButton>
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
    const date = form.elements.date.value
    const text = form.elements.textarea.value

    const newMemory = {
      id: uuidv4(),
      title: title,
      image: image,
      date: date,
      text: text,
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
  justify-content: space-between;
  margin: 10px 10px 10px 10px;
`

const Title = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0;
  width: 90%;

  h2 {
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-title);
  }
`

const BackButton = styled(Button)`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  padding: 3px;
  width: 25%;
`
const HomeIcon = styled.img`
  height: 30px;
`

const FormWrap = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.7em;
  justify-content: center;
`

const Label = styled.label`
  font-size: var(--font-size-title);
  font-weight: var(--font-weight-title);
  padding: 10px;
`

const ImageSection = styled.div`
  align-items: center;
  background-color: var(--color-background);
  border-radius: var(--border-radius-form);
  box-shadow: var(--shadow-img);
  display: flex;
  justify-content: space-evenly;
  max-height: 240px;
  min-height: 100px;
  width: 280px;
`

const CamIcon = styled.img`
  position: absolute;
`

const Image = styled.img`
  border-radius: var(--border-radius-form);
  border: 4px solid #e4eaeb;
  max-height: 90%;
  max-width: 90%;
`

const InputImage = styled.input`
  height: 120px;
  opacity: 0;
  width: 280px;
`

const TitleDate = styled.section`
  display: flex;
  gap: 4px;
  justify-content: center;
`

const InputTitle = styled.input`
  background-color: var(--color-background);
  border-radius: var(--border-radius-title-date);
  padding: 4px;
  width: 56%;
`

const Datepicker = styled.input`
  background-color: var(--color-background);
  border-radius: var(--border-radius-title-date);
  padding: 7px;
  width: 26%;
`

const Textarea = styled.textarea`
  background-color: var(--color-background);
  border-radius: var(--border-radius-form);
  padding: 8px;
  width: 280px;
`
const SaveButton = styled(Button)`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  letter-spacing: 0.1em;
  padding: 4px;
  text-shadow: var(--shadow-text);
  text-transform: uppercase;
  width: 83%;
`

const SaveIcon = styled.img`
  height: 20px;
`
