import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Board from './pages/Board'
import Documents from './pages/Documents'
import Other from './pages/Other'
import Calendar from './pages/Calendar'
import BoardMeetingMay6 from './pages/BoardMeetingMay6'
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
            <Route path="/other" element={<Other />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/announcements/board-meeting-may6" element={<BoardMeetingMay6 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
