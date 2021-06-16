import { useState } from 'react'
import axios from 'axios'
import background from '../src/assets/viary-bg2.jpg'
import Header from '../src/components/Header'
import CameraPage from './pages/CameraPage'
import MemoriesPage from './pages/MemoriesPage'
import DetailMemoryPage from './pages/DetailMemoryPage'
import memory1 from './assets/images/memory1.jpg'
import memory2 from './assets/images/memory2.jpg'
import memory3 from './assets/images/memory3.jpg'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function App() {
  const [image, setImage] = useState('')
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
      <div>
        {image ? (
          <img src={image} alt="" style={{ width: '100%' }} />
        ) : (
          <input type="file" name="file" onChange={upload} />
        )}
      </div>
      )
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

  function showDetailMemoryPage(image) {
    setCurrentPage('detail')
    setDetailImage({ image })
  }

  function showMemoriesPage() {
    setCurrentPage('memories')
  }
}
