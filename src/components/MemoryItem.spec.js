import { render, screen } from '@testing-library/react'
import MemoryItem from './MemoryItem'
import userEvent from '@testing-library/user-event'

describe('MemoryItem', () => {
  it('renders an image with subtitle', () => {
    const onDetail = jest.fn()
    render(<MemoryItem title="Memory 1" image="memory1" onDetail={onDetail} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('calls onNavigate to another page', () => {
    const onDetail = jest.fn()
    render(<MemoryItem onDetail={onDetail} />)

    const img = screen.getByRole('img')
    userEvent.click(img)

    expect(onDetail).toHaveBeenCalledTimes(1)
  })
})
