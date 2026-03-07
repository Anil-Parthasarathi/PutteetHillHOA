import { Link } from 'react-router-dom'
import logoImg from '../../public/Putteet-Hill-LOGO_white.webp'

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="nav-brand">
                            <img src={logoImg} alt="Putteet Hill HOA" className="nav-logo-img" />
                        </div>
                        <p>
                            Building a better community together. Your Putteet Hill
                            Homeowners Association, serving residents with transparency
                            and dedication.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <Link to="/board">Board Members</Link>
                        <Link to="/">News</Link>
                        <Link to="/documents">HOA Documents</Link>
                        <Link to="/">FAQs</Link>
                    </div>
                    <div className="footer-col">
                        <h4>Resources</h4>
                        <Link to="/">Pay Dues</Link>
                        <Link to="/">Submit Request</Link>
                        <Link to="/calendar">Calendar</Link>
                    </div>
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <a href="mailto:board@puteethillhoa.com">board@puteethillhoa.com</a>
                        <a href="tel:555-123-4567">(555) 123-4567</a>
                        <a href="#">Office Hours: M–F, 9–5</a>
                        <p className="footer-address">
                            Putteet Hill Homeowners Association, Inc.<br />
                            3100 Rio Grande Cir<br />
                            Cresson, TX 76035
                        </p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} Putteet Hill HOA. All rights reserved.</span>
                    <span>Privacy Policy · Terms of Service</span>
                </div>
            </div>
        </footer>
    )
}
