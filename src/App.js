import { useState } from 'react'
import background from '../src/assets/viary-bg2.jpg'
import Header from '../src/components/Header'
import CameraPage from './pages/CameraPage'
import MemoriesPage from './pages/MemoriesPage'
import DetailMemoryPage from './pages/DetailMemoryPage'
import memory1 from './assets/images/memory1.jpg'
import memory2 from './assets/images/memory2.jpg'
import memory3 from './assets/images/memory3.jpg'

export default function App() {
  const [currentPage, setCurrentPage] = useState('memories')
  const [detailImage, setDetailImage] = useState(null)

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
        width: 'auto',
        borderRadius: '20px',
        boxShadow: '2px 2px 4px grey',
        opacity: '0.98',
      }}
    >
      <Header>Viary</Header>
      <CameraPage />

      {currentPage === 'memories' && (
        <MemoriesPage
          memories={listOfMemories}
          onDetail={showDetailMemoryPage}
        />
      )}
      {currentPage === 'detail' && (
        <DetailMemoryPage
          image={detailImage.image}
          onNavigate={showMemoriesPage}
        />
      )}
    </div>
  )

  function showDetailMemoryPage(image) {
    setCurrentPage('detail')
    setDetailImage({ image })
  }

  function showMemoriesPage() {
    setCurrentPage('memories')
  }
}
