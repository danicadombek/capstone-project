import DetailMemoryPage from './DetailMemoryPage'
import memory1 from '../assets/images/memory1.jpg'

export default {
  title: 'DetailMemoryPage',
  component: DetailMemoryPage,
}

const Template = args => <DetailMemoryPage {...args} />

export const Default = Template.bind({})
Default.args = {
  ownImage: memory1,
  ownTitle: 'Memory',
}
