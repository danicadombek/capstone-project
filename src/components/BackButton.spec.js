import {render, screen} from '@testing-library/react'
  import BackButton from './BackButton'
    
  describe('BackButton', () => {
      it('renders', () => {
          render(<BackButton />)
          expect(screen.getByText('BackButton')).toBeInTheDocument()
      })
  })
        