import { render, screen } from '@testing-library/react'
import MemoryItem from './MemoryItem'

describe('MemoryItem', () => {
  it('renders', () => {
    render(<MemoryItem />)
    expect(screen.getByText('MemoryItem')).toBeInTheDocument()
  })
})
