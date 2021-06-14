import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MemoryItem from './MemoryItem'

describe('MemoryItem', () => {
  it('renders an image with subtitle', () => {
    const onDetail = jest.fn()
    render(
      <MemoryItem subtitle="Memory 1" image="memory1" onDetail={onDetail} />
    )
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText('Memory 1')).toBeInTheDocument()
  })

  it('calls onNavigate to another page', () => {
    const onDetail = jest.fn()
    render(<MemoryItem onDetail={onDetail} />)

    const img = screen.getByRole('img')
    userEvent.click(img)

    expect(onDetail).toHaveBeenCalledTimes(1)
  })
})
