import MemoryItem from './MemoryItem'
import image from '../assets/images/memory_1.jpg'

export default {
  title: 'MemoryItem',
  component: MemoryItem,
}

const Template = args => <MemoryItem {...args} />

export const singleMermory = Template.bind({})
singleMermory.args = {
  image: image,
  subtitle: 'Memory 1',
}
