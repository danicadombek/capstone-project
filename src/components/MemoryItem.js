import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

MemoryItem.propTypes = {
  image: PropTypes.node,
  subtitle: PropTypes.string,
}

export default function MemoryItem({ image, subtitle }) {
  return (
    <ListWrapper>
      <li>
        <Image src={image} alt="" width="100%" />
        <span>{subtitle}</span>
      </li>
    </ListWrapper>
  )
}

const ListWrapper = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 20px;
  padding: 5px;

  li {
    background-color: hsl(60, 2%, 80%, 0.8);
    display: grid;
    align-items: center;
    gap: 5px;
    padding: 5px;
    text-align: center;
    color: #230707;
    font-stretch: extra-expanded;
    box-shadow: 2px 2px 4px grey;
  }
`

const Image = styled.img`
  border-radius: 20px;
`
