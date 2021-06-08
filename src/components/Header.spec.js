import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders children', () => {
    const { container } = render(<Header>Viary</Header>)
    expect(container.firstChild).toHaveTextContent('Viary')
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
