import MemoryItem from './MemoryItem'

export default {
  title: 'MemoryItem',
  component: MemoryItem,
}

const Template = args => <MemoryItem {...args} />

export const singleMermory = Template.bind({})
singleMermory.args = {}
