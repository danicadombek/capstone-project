import { render, screen } from '@testing-library/react'
import MemoryItem from './MemoryItem'

describe('MemoryItem', () => {
  it('renders a text', () => {
    render(<MemoryItem subtitle="Memory 1" />)
    expect(screen.getByText('Memory 1')).toBeInTheDocument()
  })
})
