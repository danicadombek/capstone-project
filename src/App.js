import { loadFromLocal, saveToLocal } from './utils/localStorage'
import { useEffect, useState } from 'react'
import background from '../src/assets/viary-bg.jpg'
import CameraPage from './pages/CameraPage'
import DetailMemoryPage from './pages/DetailMemoryPage'
import Header from './components/Header'
import MemoriesPage from './pages/MemoriesPage'
import styled from 'styled-components/macro'

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
          onDelete={handleDeleteMemory}
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

  function handleDeleteMemory(id) {
    setMemories([...memories.slice(0, id), ...memories.slice(id + 1)])
    console.log(handleDeleteMemory)
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
  grid-template-rows: 10% auto;
  position: fixed;
  top: 10px;
  right: 10px;
  left: 10px;
  bottom: 10px;
`
