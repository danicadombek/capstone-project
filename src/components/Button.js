import styled from 'styled-components/macro'

export default function Button(props) {
  return <ButtonStyle {...props} />
}

const ButtonStyle = styled.button`
  background: var(--color-background-white);
  border-radius: var(--border-radius-global);
  border: none;
  box-shadow: var(--shadow-img);
  font-size: 18px;
  font-weight: 'semi-bold';
  max-width: auto;
  text-shadow: var(--shadow-text);
`
