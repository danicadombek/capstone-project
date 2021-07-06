import DeleteIcon from '../assets/images/icons/delete.png'
import IconButton from './IconButton'

export default {
  title: 'IconButton',
  component: IconButton,
}

const Template = args => <IconButton {...args} />

export const Default = Template.bind({})
Default.args = {
  image: DeleteIcon,
}
