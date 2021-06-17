import styled from 'styled-components/macro'
import ToMemoriesButton from '../components/ToMemoriesButton'
import PropTypes from 'prop-types'
import Button from '../components/Button'

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
        <label>
          Start your cam
          <ImageSection>
            {image ? (
              <Image src={image} alt="" />
            ) : (
              <input type="file" name="file" onChange={upload} />
            )}
            {upload}
          </ImageSection>
        </label>

        <input
          type="text"
          name="title"
          placeholder="Name of your memory"
        ></input>
        <Button>Save your memory</Button>
      </FormWrap>
      <ToMemoriesButton onClick={onNavigate}>To your memories</ToMemoriesButton>
    </Wrapper>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const file = form.elements.file
    const title = form.elements.title

    const memories = {
      ownImage: file,
      ownTitle: title,
    }

    onSubmit(memories)
    form.reset()
    // file.focus()
  }
}

const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5em;

  .label {
    display: flex;
    align-self: center;
    gap: 2.5em;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5em;
  height: 87vh;
`

const ImageSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 230px;
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
