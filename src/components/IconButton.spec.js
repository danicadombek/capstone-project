import { render, screen } from '@testing-library/react'
import IconButton from './IconButton'
import userEvent from '@testing-library/user-event'

describe('IconButton', () => {
  it('contains a button', () => {
    render(<IconButton />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls onClick', () => {
    const onDelete = jest.fn()
    render(<IconButton onClick={onDelete}>To your memories</IconButton>)

    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(onDelete).toHaveBeenCalledTimes(1)
  })
})
