import { render, screen } from '@testing-library/react'
import MemoriesPage from './MemoriesPage'
import userEvent from '@testing-library/user-event'

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

    render(
      <MemoriesPage
        memories={exampleMemories}
        onDetail={noop}
        onDelete={noop}
      />
    )

    const [firstImage, secondImage] = screen.getAllByRole('img')
    expect(firstImage).toBeInTheDocument()
    expect(secondImage).toBeInTheDocument()

    const titles = screen.getAllByText('Memory')
    expect(titles).toHaveLength(2)
  })

  // it('calls onClick and delete a memory', () => {
  //   const onDelete = jest.fn()
  //   render(<MemoriesPage onClick={onDelete} onDetail={noop} />)

  //   const button = screen.getByRole('button')
  //   userEvent.click(button)

  //   expect(onDelete).toBeCalled()
  // })
})
