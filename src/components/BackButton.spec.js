import { render, screen } from '@testing-library/react'
import BackButton from './BackButton'
import userEvent from '@testing-library/user-event'

describe('BackButton', () => {
  it('contains a text', () => {
    const onNavigate = jest.fn()
    render(<BackButton onClick={onNavigate}>Back</BackButton>)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls onClick', () => {
    const onNavigate = jest.fn()
    render(<BackButton onClick={onNavigate}>Back</BackButton>)

    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
