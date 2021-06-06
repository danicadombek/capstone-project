import styled from 'styled-components/macro'
import memory_1 from '../assets/images/memory_1.jpg'
import memory_2 from '../assets/images/memory_2.jpg'
import PropTypes from 'prop-types'

MemoriesOverview.propTypes = {
  image: PropTypes.node,
  subtitle: PropTypes.string,
}

export default function MemoriesOverview({ image, subtitle }) {
  return (
    <Wrapper>
      <h2>Your memories</h2>
      <ListWrapper>
        <li>
          <Image src={memory_1} alt="" width="100%" />
          <span>Memory 1</span>
        </li>
        <li>
          <Image src={memory_2} alt="" width="100%" />
          <span>Memory 2</span>
        </li>
      </ListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 0;
  }
`

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
    box-shadow: '2px 2px 4px grey';
  }
`

const Image = styled.img`
  border-radius: 20px;
`
