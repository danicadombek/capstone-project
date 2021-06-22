import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DetailMemoryPage from './DetailMemoryPage'

describe('DetailMemoryPage', () => {
  it('renders two images and a button', () => {
    const onNavigate = jest.fn()
    render(<DetailMemoryPage onNavigate={onNavigate} alt="Memory 1" />)

    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(2)

    const button = screen.getByRole('button', { name: 'To your memories' })
    expect(button).toBeInTheDocument()
  })

  it('calls onNavigate to another page', () => {
    const onNavigate = jest.fn()
    render(<DetailMemoryPage onNavigate={onNavigate} />)

    const button = screen.getByRole('button', { name: 'To your memories' })
    userEvent.click(button)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
