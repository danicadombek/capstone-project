import BackButton from './BackButton'
import MemoriesIcon from '../assets/images/icons/galery.png'

export default {
  title: 'BackButton',
  component: BackButton,
}

const Template = args => <BackButton {...args} />

export const Default = Template.bind({})
Default.args = {
  image: MemoriesIcon,
  children: 'Back to memories',
}
