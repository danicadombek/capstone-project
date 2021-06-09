import styled from 'styled-components/macro'
import Button from '../components/Button'
import Header from '../components/Header'

export default function DetailMemoryPage({ image }) {
  return (
    <Wrapper>
      <Header>Viary</Header>
      {image}
      <Button>Back to memories</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 80px 350px 40px;
  justify-content: center;
`
