import { render, screen } from '@testing-library/react'
import Header from './Header'
import logo from '../assets/images/icons/logo.png'

describe('Header', () => {
  it('renders a logo', () => {
    const { container } = render(
      <Header>
        {' '}
        <img src={logo} alt="" />
      </Header>
    )
    expect(container.firstChild).getByRole('img')
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
