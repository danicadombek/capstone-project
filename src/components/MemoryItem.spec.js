import { render, screen } from '@testing-library/react'
import MemoryItem from './MemoryItem'

describe('MemoryItem', () => {
  it('renders an image with subtitle', () => {
    render(<MemoryItem subtitle="Memory 1" image="memory1" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText('Memory 1')).toBeInTheDocument()
  })
})
