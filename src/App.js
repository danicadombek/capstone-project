import { loadFromLocal, saveToLocal } from './utils/localStorage'
import { useEffect, useState } from 'react'
import background from '../src/assets/viary-bg.jpg'
import CameraPage from './pages/CameraPage'
import DetailMemoryPage from './pages/DetailMemoryPage'
import Header from './components/Header'
import MemoriesPage from './pages/MemoriesPage'
import StartPage from './pages/StartPage'
import styled from 'styled-components/macro'

export default function App() {
  const [memories, setMemories] = useState(loadFromLocal('memories') ?? [])
  const [currentPage, setCurrentPage] = useState('home')
  const [memoryDetail, setMemoryDetail] = useState(null)

  useEffect(() => {
    saveToLocal('memories', memories)
  }, [memories])

  return (
    <Wrapper>
      <Header>Viary</Header>
      {currentPage === 'home' && (
        <StartPage onNavigate={showCameraPage} memories={memories} />
      )}
      {currentPage === 'camera' && (
        <CameraPage
          onNavigate={showMemoriesPage}
          handleMemorySubmit={handleMemorySubmit}
          onNavigateBack={showStartPage}
        />
      )}
      {currentPage === 'memories' && (
        <MemoriesPage
          memories={memories}
          onDetail={showDetailMemoryPage}
          onNavigateBack={showCameraPage}
          onDelete={handleDeleteMemory}
        />
      )}

      {currentPage === 'detail' && (
        <DetailMemoryPage
          image={memoryDetail.image}
          title={memoryDetail.title}
          date={memoryDetail.date}
          text={memoryDetail.text}
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
    const index = memories.findIndex(memory => memory.id === id)
    const deletedMemory = [
      ...memories.slice(0, index),
      ...memories.slice(index + 1),
    ]

    setMemories(deletedMemory)
  }

  function showStartPage() {
    setCurrentPage('home')
  }

  function showDetailMemoryPage(image, title, date, text) {
    setCurrentPage('detail')
    setMemoryDetail({ image, title, date, text })
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
  top: 5px;
  right: 5px;
  left: 5px;
  bottom: 5px;
`
