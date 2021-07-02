import IconButton from './IconButton'
import DeleteIcon from '../assets/images/icons/delete.png'

export default {
  title: 'IconButton',
  component: IconButton,
}

const Template = args => <IconButton {...args} />

export const Default = Template.bind({})
Default.args = {
  image: DeleteIcon,
}
