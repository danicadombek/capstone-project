import background from '../src/assets/viary-bg.jpg'
import Header from '../src/components/Header'
import MemoriesPage from './pages/MemoriesPage'
import image from './assets/images/memory_1.jpg'
import image2 from './assets/images/memory_2.jpg'

export default function App() {
  const listOfMemories = [
    { image, subtitle: 'Memory 1' },
    { image: image2, subtitle: 'Memory 2' },
  ]

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '645px',
        borderRadius: '20px',
        boxShadow: '2px 2px 4px grey',
        opacity: '0.99',
      }}
    >
      <Header>Viary</Header>
      <MemoriesPage memories={listOfMemories} />
    </div>
  )
}

//
// { imageURL: './src/assets/images/memory_2.jpg', subtitle: 'Memory 2' },
