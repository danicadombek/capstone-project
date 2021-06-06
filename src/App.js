import background from '../src/assets/viary-bg2.jpg'
import Header from '../src/components/Header'

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />
    </div>
  )
}
