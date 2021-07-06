import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import StartPage from './StartPage'

const noop = () => {}

describe('StartPage', () => {
  it('renders a headline and a button', () => {
    const exampleImages = [
      {
        image: 'memory1',
        id: '1',
      },
      {
        image: 'memory2',
        id: '2',
      },
    ]

    render(<StartPage memories={exampleImages} onNavigate={noop} />)

    const [firstImage, secondImage] = screen.getAllByRole('img')
    expect(firstImage).toBeInTheDocument()
    expect(secondImage).toBeInTheDocument()

    const headline = screen.getByRole('heading')
    expect(headline).toBeInTheDocument(1)

    const button = screen.getAllByRole('button')
    expect(button).toHaveLength(1)
  })

  it('calls onNavigate to another page', () => {
    const onNavigate = jest.fn()
    render(<StartPage onNavigate={onNavigate} />)

    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(onNavigate).toBeCalled()
  })
})
