import { render, screen } from '@testing-library/react'
import MemoriesPage from './MemoriesPage'

describe('MemoriesPage', () => {
  it('renders the list of memories with two images and two titles', () => {
    const exampleMemories = [
      {
        image: 'memory1',
        title: 'Memory',
      },
      {
        image: 'memory2',
        title: 'Memory',
      },
    ]

    render(<MemoriesPage memories={exampleMemories} />)

    const [firstImage, secondImage] = screen.getAllByRole('img')
    expect(firstImage).toBeInTheDocument()
    expect(secondImage).toBeInTheDocument()

    const titles = screen.getAllByText('Memory')
    expect(titles).toHaveLength(2)
  })
})
