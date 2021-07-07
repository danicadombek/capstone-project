import { render, screen } from '@testing-library/react'
import Header from './Header'
import logo from '../assets/images/logo.png'

describe('Header', () => {
  it('renders a logo', () => {
    render(
      <Header>
        {' '}
        <img src={logo} alt="" />
      </Header>
    )
    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })
})
