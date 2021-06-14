import {render, screen} from '@testing-library/react'
  import CameraPage from './CameraPage'
    
  describe('CameraPage', () => {
      it('renders', () => {
          render(<CameraPage />)
          expect(screen.getByText('CameraPage')).toBeInTheDocument()
      })
  })
        