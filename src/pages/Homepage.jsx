import '../index.css'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import HomeArticles from '../components/HomeArticles.jsx'

function Homepage() {
  return (
    <>
    <div>
      <Navbar />
      <Header />
      <HomeArticles />
    </div>
    </>
  )
}

export default Homepage
