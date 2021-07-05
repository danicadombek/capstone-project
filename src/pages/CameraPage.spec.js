import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CameraPage from './CameraPage'

const noop = () => {}

describe('CameraPage', () => {
  it('renders a form with three inputs and two buttons', async () => {
    render(<CameraPage onSubmit={noop} onNavigate={noop} />)

    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()

    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(3)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })

  it('calls onSubmit with an image and a title', () => {
    const handleSubmit = jest.fn()
    render(<CameraPage handleMemorySubmit={handleSubmit} onNavigate={noop} />)

    const fileInput = screen.getByLabelText('Start your cam')
    userEvent.type(fileInput, 'img')

    const titleInput = screen.getByLabelText('Choose a title')
    userEvent.type(titleInput, 'Wald')

    const button = screen.getByRole('button', { name: 'Save your memory' })
    userEvent.click(button)

    const newMemory = { title: 'Wald' }
    expect(handleSubmit).toHaveBeenCalledWith(
      expect.objectContaining(newMemory)
    )
  })

  it('calls onNavigate to another page', () => {
    const onNavigate = jest.fn()
    render(<CameraPage onNavigate={onNavigate} />)

    const button = screen.getByRole('button', { name: 'Your memories' })
    userEvent.click(button)

    expect(onNavigate).toBeCalled()
  })
})
