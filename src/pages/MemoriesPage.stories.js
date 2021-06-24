import MemoriesPage from './MemoriesPage'
import memory1 from '../assets/images/memory1.jpg'
import memory2 from '../assets/images/memory2.jpg'

export default {
  title: 'MemoriesPage',
  component: MemoriesPage,
}

const Template = args => <MemoriesPage {...args} />

export const listedMemories = Template.bind({})
listedMemories.args = {
  memories: [
    { image: memory1, title: 'Memory 1' },
    { image: memory2, title: 'Memory 2' },
  ],
}
