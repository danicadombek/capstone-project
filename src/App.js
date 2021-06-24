import { useEffect, useState } from 'react'
import background from '../src/assets/viary-bg.jpg'
import CameraPage from './pages/CameraPage'
import DetailMemoryPage from './pages/DetailMemoryPage'
import MemoriesPage from './pages/MemoriesPage'
import { loadFromLocal, saveToLocal } from './utils/localStorage'
import styled from 'styled-components/macro'
import Header from './components/Header'

export default function App() {
  const [memories, setMemories] = useState(loadFromLocal('memories') ?? [])
  const [currentPage, setCurrentPage] = useState('camera')
  const [memoryDetail, setMemoryDetail] = useState(null)

  useEffect(() => {
    saveToLocal('memories', memories)
  }, [memories])

  return (
    <Wrapper>
      <Header>Viary</Header>
      {currentPage === 'camera' && (
        <CameraPage
          onNavigate={showMemoriesPage}
          handleMemorySubmit={handleMemorySubmit}
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
          image={memoryDetail.image}
          title={memoryDetail.title}
          onNavigate={showMemoriesPage}
        />
      )}
    </Wrapper>
  )

  function handleMemorySubmit(newMemory) {
    setMemories([newMemory, ...memories])
    setCurrentPage('memories')
  }

  function showDetailMemoryPage(image, title) {
    setCurrentPage('detail')
    setMemoryDetail({ image, title })
  }

  function showMemoriesPage() {
    setCurrentPage('memories')
  }

  function showCameraPage() {
    setCurrentPage('camera')
  }
}

const Wrapper = styled.div`
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  box-shadow: 2px 2px 4px grey;
  opacity: 0.98;
  display: grid;
  position: fixed;
  top: 10px;
  right: 10px;
  left: 10px;
  bottom: 10px;
`
