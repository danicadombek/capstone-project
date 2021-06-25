import DeleteButton from './DeleteButton'
import DeleteIcon from '../assets/images/icons/delete.png'

export default {
  title: 'DeleteButton',
  component: DeleteButton,
}

const Template = args => <DeleteButton {...args} />

export const Default = Template.bind({})
Default.args = {
  image: DeleteIcon,
}
