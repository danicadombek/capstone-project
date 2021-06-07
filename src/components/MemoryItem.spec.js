import { render, screen } from '@testing-library/react'
import MemoryItem from './MemoryItem'

describe('MemoryItem', () => {
  it('renders a subtitle', () => {
    render(<MemoryItem subtitle="Memory 1" />)
    expect(screen.getByText('Memory 1')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
