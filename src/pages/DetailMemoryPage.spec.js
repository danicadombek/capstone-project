import {render, screen} from '@testing-library/react'
  import DetailMemoryPage from './DetailMemoryPage'
    
  describe('DetailMemoryPage', () => {
      it('renders', () => {
          render(<DetailMemoryPage />)
          expect(screen.getByText('DetailMemoryPage')).toBeInTheDocument()
      })
  })
        