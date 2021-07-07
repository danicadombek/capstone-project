import Header from './Header'
import logo from '../assets/images/logo.png'

export default {
  title: 'Header',
  component: Header,
}

const Template = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  image: logo,
}
