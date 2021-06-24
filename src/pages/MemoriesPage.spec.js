import { render, screen } from '@testing-library/react'
import MemoriesPage from './MemoriesPage'

const noop = () => {}

describe('MemoriesPage', () => {
  it('renders the list of memories with two images and two titles', () => {
    const exampleMemories = [
      {
        image: 'memory1',
        title: 'Memory',
        id: '1',
      },
      {
        image: 'memory2',
        title: 'Memory',
        id: '2',
      },
    ]

    render(<MemoriesPage memories={exampleMemories} onDetail={noop} />)

    const [firstImage, secondImage] = screen.getAllByRole('img')
    expect(firstImage).toBeInTheDocument()
    expect(secondImage).toBeInTheDocument()

    const titles = screen.getAllByText('Memory')
    expect(titles).toHaveLength(2)
  })
})
