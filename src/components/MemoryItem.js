import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

MemoryItem.propTypes = {
  onDetail: PropTypes.func.isRequired,
  image: PropTypes.node,
  subtitle: PropTypes.string,
}

export default function MemoryItem({ image, subtitle, onDetail }) {
  return (
    <Wrapper onClick={() => onDetail(image)}>
      <Image src={image} alt="" width="100%" />
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
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`
