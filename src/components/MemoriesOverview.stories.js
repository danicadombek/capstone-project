import MemoriesOverview from './MemoriesOverview'

export default {
  title: 'MemoriesOverview',
  component: MemoriesOverview,
}

const Template = args => <MemoriesOverview {...args} />

export const filledMermories = Template.bind({})
filledMermories.args = {}
