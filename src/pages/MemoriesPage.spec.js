import { render, screen } from '@testing-library/react'
import MemoriesPage from './MemoriesPage'

describe('MemoriesPage', () => {
  it('renders the list of memories with images and subtitles', () => {
    const exampleMemories = [
      {
        image: 'memory1',
        subtitle: 'Memory',
      },
      {
        image: 'memory2',
        subtitle: 'Memory',
      },
    ]

    render(<MemoriesPage memories={exampleMemories} />)

    const [firstImage, secondImage] = screen.getAllByRole('img')
    expect(firstImage).toBeInTheDocument()
    expect(secondImage).toBeInTheDocument()

    const subtitles = screen.getAllByText('Memory')
    expect(subtitles).toHaveLength(2)
  })
})
