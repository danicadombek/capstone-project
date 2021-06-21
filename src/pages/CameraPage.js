import styled from 'styled-components/macro'
import ToMemoriesButton from '../components/ToMemoriesButton'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import { v4 as uuidv4 } from 'uuid'

CameraPage.propTypes = {
  image: PropTypes.string,
  upload: PropTypes.func,
  onNavigate: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default function CameraPage({ image, upload, onNavigate, onSubmit }) {
  return (
    <Wrapper>
      <FormWrap onSubmit={handleSubmit}>
        Start your cam
        <ImageSection>
          {image ? (
            <Image src={image} alt="" />
          ) : (
            <Input id="upload-img" type="file" name="file" onChange={upload} />
          )}
          {upload}
        </ImageSection>
        <input
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
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const title = form.elements.title

    const newMemory = {
      id: uuidv4(),
      title: title,
    }

    onSubmit({ newMemory })
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
