import { render, screen } from '@testing-library/react'
import DeleteButton from './DeleteButton'
import userEvent from '@testing-library/user-event'

describe('DeleteButton', () => {
  it('contains a button', () => {
    render(<DeleteButton />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls onClick', () => {
    const onDelete = jest.fn()
    render(<DeleteButton onClick={onDelete}>To your memories</DeleteButton>)

    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(onDelete).toHaveBeenCalledTimes(1)
  })
})
