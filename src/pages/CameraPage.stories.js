import CameraPage from './CameraPage'
  export default {
      title: 'CameraPage',
      component: CameraPage
  }
    
  const Template = args => <CameraPage {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
        