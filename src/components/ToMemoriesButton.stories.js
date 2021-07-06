import MemoriesIcon from '../assets/images/icons/galery.png'
import ToMemoriesButton from './ToMemoriesButton'

export default {
  title: 'ToMemoriesButton',
  component: ToMemoriesButton,
}

const Template = args => <ToMemoriesButton {...args} />

export const Default = Template.bind({})
Default.args = {
  image: MemoriesIcon,
  children: 'To your memories',
}
