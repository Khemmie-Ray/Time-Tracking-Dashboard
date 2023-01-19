import './App.css'
import Profile from './components/Profile'
import Card from './components/Card'
import data from './data'

function App() {
  const cardData = data.map(info => {
    return (
    <Card 
      key={info.id}
      {...info}
    />
    )
  })

  return (
    <div>
    <main>
      <Profile />
      <section className="card-container">
      {cardData}
      </section>     
    </main>
    <footer>
      <div className="attribution">Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a>. Coded by <a href="#">Khemmie-Ray</a>.
      </div>
    </footer>
    </div>
  )
}

export default App
