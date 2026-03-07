import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Board from './pages/Board'
import Documents from './pages/Documents'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/documents" element={<Documents />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
