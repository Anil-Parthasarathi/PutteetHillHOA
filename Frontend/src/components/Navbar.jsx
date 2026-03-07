import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../../public/Putteet-Hill-LOGO_white.webp'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [weather, setWeather] = useState(null)
    const location = useLocation()

    // If not on home page, we can force the navbar to always appear as scrolled or solid
    // so the white logo and links don't blend with a white background.
    const isHome = location.pathname === '/'

    useEffect(() => {
        // Fetch Weather Data from Vercel Serverless Function
        fetch('/api/weather')
            .then((res) => res.json())
            .then((data) => setWeather(data))
            .catch((err) => console.error('Error fetching weather:', err));

        // Handle Scroll
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${(!isHome || scrolled) ? 'scrolled' : ''}`} id="navbar">
            <div className="container">
                <div className="nav-brand-group">
                    <Link to="/" className="nav-brand">
                        <img src={logoImg} alt="Putteet Hill HOA" className="nav-logo-img" />
                    </Link>
                    {weather && (
                        <div className="nav-weather">
                            <span className="weather-temp">{weather.temperature}°{weather.temperatureUnit}</span>
                            <img src={weather.icon} alt={weather.shortForecast} className="weather-icon" />
                        </div>
                    )}
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/board">Board</Link>
                    <Link to="/documents">Documents</Link>
                    <Link to="/calendar">Calendar</Link>
                    <Link to="/other">Other</Link>
                </div>
            </div>
        </nav>
    )
}
