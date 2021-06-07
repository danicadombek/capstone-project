import { render, screen } from '@testing-library/react'
import MemoriesPage from './MemoriesPage'

describe('MemoriesPage', () => {
  it('renders two listItems', () => {
    render(<MemoriesPage />)

    const memoryItems = screen.getAllByRole('listitem')
    expect(memoryItems).toHaveLength(2)
  })
})
