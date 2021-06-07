import background from '../src/assets/viary-bg.jpg'
import Header from '../src/components/Header'
import MemoriesOverview from '../src/pages/MemoriesOverview'

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '645px',
        borderRadius: '20px',
        boxShadow: '2px 2px 4px grey',
        opacity: '0.99',
      }}
    >
      <Header>Viary</Header>
      <MemoriesOverview />
    </div>
  )
}
