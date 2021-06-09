import { useState } from 'react'
import background from '../src/assets/viary-bg2.jpg'
import Header from '../src/components/Header'
import MemoriesPage from './pages/MemoriesPage'
import DetailMemoryPage from './pages/DetailMemoryPage'
import memory1 from './assets/images/memory1.jpg'
import memory2 from './assets/images/memory2.jpg'
import memory3 from './assets/images/memory3.jpg'

export default function App() {
  const [currentPage, setCurrentPage] = useState('memories')

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
      {currentPage === 'memories' && (
        <MemoriesPage
          memories={listOfMemories}
          onDetail={showDetailMemoryPage}
        />
      )}
      {currentPage === 'detail' && (
        <DetailMemoryPage image={memory1} onNavigate={showMemoriesPage} />
      )}
    </div>
  )
  function showDetailMemoryPage() {
    setCurrentPage('detail')
  }

  function showMemoriesPage() {
    setCurrentPage('memories')
  }
}
