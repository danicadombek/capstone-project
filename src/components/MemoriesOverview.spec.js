import {render, screen} from '@testing-library/react'
  import MemoriesOverview from './MemoriesOverview'
    
  describe('MemoriesOverview', () => {
      it('renders', () => {
          render(<MemoriesOverview />)
          expect(screen.getByText('MemoriesOverview')).toBeInTheDocument()
      })
  })
        