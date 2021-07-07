import { render, screen } from '@testing-library/react'
import Slider from './Slider'

describe('Slider', () => {
  it('renders a slider', () => {
    render(<Slider />)
    expect(screen.getByTestId('slider')).toBeInTheDocument()
  })
})
