import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CameraPage from './CameraPage'

describe('CameraPage', () => {
  it('renders a form with one textbox and two buttons', async () => {
    const onNavigate = jest.fn()
    render(<CameraPage onSubmit={jest.fn()} onNavigate={onNavigate} />)

    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()

    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(1)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })

  it('calls onSubmit with an image and a title', () => {
    const handleSubmit = jest.fn()
    render(<CameraPage onSubmit={handleSubmit} />)

    const fileInput = screen.getByLabelText('Start your cam')
    userEvent.type(fileInput, 'img')

    const titleInput = screen.getByLabelText('Choose a name')
    userEvent.type(titleInput, 'Wald')

    const button = screen.getByRole('button', { name: 'Save your memory' })
    userEvent.click(button)

    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })

  it('calls onNavigate to another page', () => {
    const onNavigate = jest.fn()
    render(<CameraPage onNavigate={onNavigate} />)

    const button = screen.getByRole('button', { name: 'To your memories' })
    userEvent.click(button)

    expect(onNavigate).toBeCalled()
  })
})
