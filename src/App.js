import './App.css'
import Footer from './footer'
import Header from './header'
import PersistentDrawerLeft from './header/headerWithNav'
import Nav from './nav'
import Tasks from './tasks'

export default function App() {
  return (
    <div className="App">
      <PersistentDrawerLeft />
      {/* <Header /> */}
      <div className="flex">
        {/* <Nav /> */}
        {/* <Tasks /> */}
      </div>
      <Footer />
    </div>
  )
}
