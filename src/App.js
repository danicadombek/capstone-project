import { useState } from 'react'
import axios from 'axios'
import background from '../src/assets/viary-bg2.jpg'
import Header from '../src/components/Header'
import CameraPage from './pages/CameraPage'
import MemoriesPage from './pages/MemoriesPage'
import DetailMemoryPage from './pages/DetailMemoryPage'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function App() {
  const [image, setImage] = useState('')
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
          image={image}
          upload={upload}
          onNavigate={showMemoriesPage}
          onSubmit={handleSubmit}
        />
      )}
      {currentPage === 'memories' && (
        <MemoriesPage memories={memories} onDetail={showDetailMemoryPage} />
      )}
      {currentPage === 'detail' && (
        <DetailMemoryPage
          ownImage={detailImage.ownImage}
          ownTitle={detailImage.ownTitle}
          onNavigate={showMemoriesPage}
        />
      )}
    </div>
  )

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', PRESET)

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err))
  }

  function onImageSave(response) {
    setImage(response.data.url)
  }

  function handleSubmit({ memories }) {
    setMemories(memories)
    setCurrentPage('memories')
  }

  function showDetailMemoryPage(image) {
    setCurrentPage('detail')
    setDetailImage({ image })
  }

  function showMemoriesPage() {
    setCurrentPage('memories')
  }
}
