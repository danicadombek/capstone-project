import { useState } from 'react'
import background from '../src/assets/viary-bg.jpg'
import Header from '../src/components/Header'
import CameraPage from './pages/CameraPage'
import DetailMemoryPage from './pages/DetailMemoryPage'
import MemoriesPage from './pages/MemoriesPage'

export default function App() {
  const [memories, setMemories] = useState([])
  const [currentPage, setCurrentPage] = useState('camera')
  const [detailImage, setDetailImage] = useState(null)

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
      {currentPage === 'camera' && (
        <CameraPage
          onNavigate={showMemoriesPage}
          onSubmit={handleMemorySubmit}
        />
      )}
      {currentPage === 'memories' && (
        <MemoriesPage
          memories={memories}
          onDetail={showDetailMemoryPage}
          onNavigate={showCameraPage}
        />
      )}
      {currentPage === 'detail' && (
        <DetailMemoryPage
          image={detailImage.image}
          title={detailImage.title}
          onNavigate={showMemoriesPage}
        />
      )}
    </div>
  )

  function handleMemorySubmit(newMemory) {
    setMemories([newMemory, ...memories])
    setCurrentPage('memories')
  }

  function showDetailMemoryPage(image, title) {
    setCurrentPage('detail')
    setDetailImage({ image, title })
  }

  function showMemoriesPage() {
    setCurrentPage('memories')
  }

  function showCameraPage() {
    setCurrentPage('camera')
  }
}
