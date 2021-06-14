import ToMemoriesButton from './ToMemoriesButton'
import MemoriesIcon from '../assets/images/icons/galery.png'

export default {
  title: 'ToMemoriesButton',
  component: ToMemoriesButton,
}

const Template = args => <ToMemoriesButton {...args} />

export const Default = Template.bind({})
Default.args = {
  image: MemoriesIcon,
  children: 'Back to memories',
}
