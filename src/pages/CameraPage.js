import styled from 'styled-components/macro'
import Button from '../components/Button'
import BackButton from '../components/BackButton'

export default function CameraPage() {
  return (
    <Wrapper>
      <Button>Cam</Button>
      Start your cam
      <BackButton>Your memories</BackButton>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5em;
`
