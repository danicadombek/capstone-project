import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

MemoryItem.propTypes = {
  onDetail: PropTypes.func.isRequired,
  newMemory: PropTypes.objectOf(
    PropTypes.shape({ image: PropTypes.string, title: PropTypes.string })
  ),
}

export default function MemoryItem({ image, title, onDetail }) {
  return (
    <Wrapper onClick={() => onDetail(image, title)}>
      <Image src={image} alt="" width="300" height="200" />
      <span>{title}</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-items: center;
  background: var(--color-background);
  color: var(--color-text);
  display: grid;
  gap: 5px;
  padding: 5px;
  text-align: center;
`

const Image = styled.img`
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: var(--shadow-img);
  border-radius: 20px;
`
