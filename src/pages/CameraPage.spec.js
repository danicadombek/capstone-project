import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CameraPage from './CameraPage'

const noop = () => {}

describe('CameraPage', () => {
  it('renders a form with three inputs and two buttons', () => {
    const handleMemorySubmit = jest.fn()
    render(<CameraPage handleMemorySubmit={noop} onNavigate={noop} />)

    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()

    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(2)

    const dateInput = screen.getByLabelText('Choose a date')
    expect(dateInput).toBeInTheDocument()

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
  })

  it('calls onSubmit with an image, title, date and text', () => {
    const handleMemorySubmit = jest.fn()
    render(
      <CameraPage handleMemorySubmit={handleMemorySubmit} onNavigate={noop} />
    )

    const fileInput = screen.getByLabelText('Start your cam')
    userEvent.type(fileInput, 'img')

    const titleInput = screen.getByLabelText('Choose a title')
    userEvent.type(titleInput, 'Wald')

    const dateInput = screen.getByLabelText('Choose a date')
    userEvent.type(dateInput, '26.10.2020')

    const button = screen.getByRole('button', { name: 'Save your memory' })
    userEvent.click(button)

    const newMemory = { title: 'Wald' }
    expect(handleMemorySubmit).toHaveBeenCalledWith(
      expect.objectContaining(newMemory)
    )

    expect(handleMemorySubmit).toHaveBeenCalledTimes(1)
  })

  it('calls onNavigate to another page', () => {
    const onNavigate = jest.fn()
    render(<CameraPage onNavigate={onNavigate} handleMemorySubmit={noop} />)

    const button = screen.getByRole('button', { name: 'Your memories' })
    userEvent.click(button)

    expect(onNavigate).toBeCalled()
  })
})
