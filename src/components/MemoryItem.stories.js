import MemoryItem from './MemoryItem'
import memory1 from '../assets/images/memory1.jpg'

export default {
  title: 'MemoryItem',
  component: MemoryItem,
}

const Template = args => <MemoryItem {...args} />

export const singleMermory = Template.bind({})
singleMermory.args = {
  image: memory1,
  subtitle: 'Memory 1',
}
