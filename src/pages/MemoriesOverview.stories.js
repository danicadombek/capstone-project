import MemoriesOverview from './MemoriesOverview'
export default {
  title: 'MemoriesOverview',
  component: MemoriesOverview,
}

const Template = args => <MemoriesOverview {...args} />

export const listedMemories = Template.bind({})
listedMemories.args = {
  memories: [{ subtitle: 'Memory 1' }, { subtitle: 'Memory 2' }],
}
