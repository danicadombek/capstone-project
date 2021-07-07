import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

MemoryItem.propTypes = {
  onDetail: PropTypes.func.isRequired,
  newMemory: PropTypes.objectOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

export default function MemoryItem({ image, title, onDetail }) {
  return (
    <Wrapper onClick={() => onDetail(image, title)}>
      <Image src={image} alt="" width="60" height="60" />
      <Title>{title}</Title>
      &gt;
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-items: center;
  color: var(--color-text);
  display: flex;
  gap: 5px;
  justify-content: space-between;
  margin-right: 10px;
  padding: 5px;
  text-align: center;
  width: 75vw;
`

const Image = styled.img`
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: var(--shadow-img);
  border-radius: var(--border-radius-form);
`

const Title = styled.span`
  font-size: 20px;
`
