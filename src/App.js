import background from '../src/assets/viary-bg.jpg'
import Header from '../src/components/Header'
import MemoriesPage from './pages/MemoriesPage'
import memory1 from './assets/images/memory1.jpg'
import memory2 from './assets/images/memory2.jpg'
import memory3 from './assets/images/memory3.jpg'

export default function App() {
  const listOfMemories = [
    { image: memory1, subtitle: 'Memory 1' },
    { image: memory2, subtitle: 'Memory 2' },
    { image: memory3, subtitle: 'Memory 3' },
  ]

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '90%',
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
