import styled from 'styled-components/macro'
import Button from '../components/Button'
import PropTypes from 'prop-types'

DetailMemoryPage.propTypes = {
  image: PropTypes.node,
  onNavigate: PropTypes.func.isRequired,
}

export default function DetailMemoryPage({ image, onNavigate }) {
  return (
    <Wrapper>
      <Image src={image} alt="" width="95%" />
      <nav>
        <ButtonStyle onClick={onNavigate}>Back to memories</ButtonStyle>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 86vh;
`
const Image = styled.img`
  border-radius: 20px;
  box-shadow: 5px 5px 15px 5px #6d6d6d;
  margin-top: 20px;
`

const ButtonStyle = styled(Button)`
  left: 150px;
  bottom: 20px;
`
