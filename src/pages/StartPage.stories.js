import StartPage from './StartPage'
  export default {
      title: 'StartPage',
      component: StartPage
  }
    
  const Template = args => <StartPage {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
        