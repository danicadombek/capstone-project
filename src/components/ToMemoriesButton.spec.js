import { render, screen } from '@testing-library/react'
import ToMemoriesButton from './ToMemoriesButton'
import userEvent from '@testing-library/user-event'

describe('ToMemoriesButton', () => {
  it('contains a text', () => {
    const onNavigate = jest.fn()
    render(
      <ToMemoriesButton onClick={onNavigate}>To your memories</ToMemoriesButton>
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls onClick', () => {
    const onNavigate = jest.fn()
    render(
      <ToMemoriesButton onClick={onNavigate}>To your memories</ToMemoriesButton>
    )

    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
