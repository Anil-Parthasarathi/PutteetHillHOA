import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Board from './pages/Board'
import Documents from './pages/Documents'
import Other from './pages/Other'
import Calendar from './pages/Calendar'
import SparkleBackground from './components/SparkleBackground'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <SparkleBackground />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/other" element={<Other />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
