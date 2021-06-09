import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

MemoryItem.propTypes = {
  onDetail: PropTypes.func.isRequired,
  image: PropTypes.node,
  subtitle: PropTypes.string,
}

export default function MemoryItem({ image, subtitle, onDetail }) {
  return (
    <Wrapper>
      <Image src={image} alt="" width="100%" onClick={onDetail} />
      <span>{subtitle}</span>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: hsl(60, 2%, 80%, 0.8);
  display: grid;
  align-items: center;
  gap: 5px;
  padding: 5px;
  text-align: center;
  color: #230707;
`

const Image = styled.img`
  border-radius: 20px;
  box-shadow: 2px 2px 4px grey;
`
