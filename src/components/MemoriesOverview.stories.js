import MemoriesOverview from './MemoriesOverview'
import imageFile from '../assets/images/memory_1.jpg'

export default {
  title: 'MemoriesOverview',
  component: MemoriesOverview,
}

const image = {
  src: imageFile,
  alt: 'Memory 1',
}

const Template = args => <MemoriesOverview {...args} />

export const withAnImage = () => <img src={image.src} alt={image.alt} />

export const ownMermories = Template.bind({})
ownMermories.args = {
  listOfMemories: [
    { image: 'imageOne', subtitle: 'memory 1' },
    { image: 'imageTwo', subtitle: 'memory 2' },
  ],
}
