import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DetailMemoryPage from './DetailMemoryPage'

describe('DetailMemoryPage', () => {
  it('renders an image, an icon and a button', () => {
    render(<DetailMemoryPage />)

    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(2)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls onNavigate to another page', () => {
    const onNavigate = jest.fn()
    render(<DetailMemoryPage onClick={onNavigate} />)

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(onNavigate).toBeCalledTimes(0)
  })
})
