import styled from 'styled-components/macro'

export default function Header() {
  return <Headline>Viary</Headline>
}

const Headline = styled.h1`
  font-weight: bolder;
  text-align: center;
  padding: 10px;
  margin: 0;
  font-stretch: ultra-expanded;
`
