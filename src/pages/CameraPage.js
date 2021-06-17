import styled from 'styled-components/macro'
import ToMemoriesButton from '../components/ToMemoriesButton'
import PropTypes from 'prop-types'
import Button from '../components/Button'

CameraPage.propTypes = {
  image: PropTypes.string,
  upload: PropTypes.func,
  onNavigate: PropTypes.func,
}

export default function CameraPage({ image, upload, onNavigate }) {
  return (
    <Wrapper>
      <FormWrap>
        <label>
          Start your cam
          <ImageSection>
            {image ? (
              <img src={image} alt="" style={{ width: '100%' }} />
            ) : (
              <input type="file" name="file" onChange={upload} />
            )}
            {upload}
          </ImageSection>
        </label>

        <input type="text" name="titel" placeholder="Name of memory"></input>
        <Button>Save your memory</Button>
      </FormWrap>
      <ToMemoriesButton onClick={onNavigate}>To your memories</ToMemoriesButton>
    </Wrapper>
  )
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
