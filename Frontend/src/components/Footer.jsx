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
                        <Link to="/calendar">Calendar</Link>
                        <span style={{ display: 'block', marginBottom: '0.8rem', color: 'var(--color-text-light)', opacity: 0.6, cursor: 'not-allowed', fontSize: '1rem' }}>Pay Dues (Coming Soon)</span>
                        <span style={{ display: 'block', marginBottom: '0.8rem', color: 'var(--color-text-light)', opacity: 0.6, cursor: 'not-allowed', fontSize: '1rem' }}>Submit Request (Coming Soon)</span>
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
                        <p style={{ marginTop: '1rem', marginBottom: 0 }}>
                            <strong style={{ display: 'block', marginBottom: '0.35rem', color: 'var(--color-white)' }}>ACC contact</strong>
                            <a href="mailto:putteetacc@putteethillhoa.com">putteetacc@putteethillhoa.com</a>
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
