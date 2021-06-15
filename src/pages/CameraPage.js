import styled from 'styled-components/macro'
import Button from '../components/Button'
import ToMemoriesButton from '../components/ToMemoriesButton'
import CamIcon from '../assets/images/icons/cam.png'

export default function CameraPage() {
  return (
    <Wrapper>
      <CamButton>
        <img src={CamIcon} alt="" />
        <span>Cam</span>
      </CamButton>
      <h2>Start your cam</h2>
      <ToMemoriesButton>To your memories</ToMemoriesButton>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5em;
`
const CamButton = styled(Button)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 250px;
  width: 250px;

  span {
    letter-spacing: 4px;
    font-size: larger;
    text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
  }
`
