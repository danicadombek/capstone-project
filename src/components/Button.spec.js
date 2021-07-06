import { render, screen } from '@testing-library/react'
import Button from './Button'
import userEvent from '@testing-library/user-event'

describe('Button', () => {
  it('contains a text', () => {
    render(<Button onClick={() => {}}>Click me</Button>)

    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
  })

  it('calls onClick', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const button = screen.getByRole('button', { name: 'Click me' })
    userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
