import { render, screen } from '@testing-library/react'
import DetailMemoryPage from './DetailMemoryPage'

describe('DetailMemoryPage', () => {
  it('renders an image, an icon and a button', () => {
    const singleMemories = [
      {
        image: 'memory1',
      },
    ]

    render(<DetailMemoryPage memories={singleMemories} />)

    render(<DetailMemoryPage image="memory1, galery" />)
    expect(screen.getAllByRole('img')).toBeInTheDocument(2)
  })

  it('calls onNavigate to another page', async () => {
    const onNavigate = jest.fn()
    render(<DetailMemoryPage onClick={onNavigate} />)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
