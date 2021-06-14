import styled from 'styled-components/macro'
import Button from '../components/Button'
import ToMemoriesButton from '../components/ToMemoriesButton'

export default function CameraPage() {
  return (
    <Wrapper>
      <Button>Cam</Button>
      Start your cam
      <ToMemoriesButton>Your memories</ToMemoriesButton>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5em;
`
