import MemoriesPage from './MemoriesPage'
import image from '../assets/images/memory_1.jpg'
import image2 from '../assets/images/memory_2.jpg'

export default {
  title: 'MemoriesPage',
  component: MemoriesPage,
}

const Template = args => <MemoriesPage {...args} />

export const listedMemories = Template.bind({})
listedMemories.args = {
  memories: [
    { image: image, subtitle: 'Memory 1' },
    { image: image2, subtitle: 'Memory 2' },
  ],
}
