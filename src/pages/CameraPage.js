import styled from 'styled-components/macro'
import ToMemoriesButton from '../components/ToMemoriesButton'
import PropTypes from 'prop-types'

CameraPage.propTypes = {
  image: PropTypes.string,
  upload: PropTypes.func,
  onNavigate: PropTypes.func,
}

export default function CameraPage({ image, upload, onNavigate }) {
  return (
    <Wrapper>
      <CamButton>
        {image ? (
          <img src={image} alt="" style={{ width: '100%' }} />
        ) : (
          <input type="file" name="file" onChange={upload} />
        )}
        {upload}
      </CamButton>
      <h2>Start your cam</h2>
      <ToMemoriesButton onClick={onNavigate}>To your memories</ToMemoriesButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5em;
`
const CamButton = styled.div`
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
