import { render, screen } from '@testing-library/react'
import MemoriesOverview from './MemoriesOverview'

describe('MemoriesOverview', () => {
  it('renders two listItems', () => {
    render(<MemoriesOverview />)

    const memoryItems = screen.getAllByRole('listitem')
    expect(memoryItems).toHaveLength(2)
  })
})
