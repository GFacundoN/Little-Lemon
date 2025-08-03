const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section brand">
                    <div className="logo-placeholder">🍋</div>
                    <h4>Little Lemon</h4>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>

                <div className="footer-section">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>123 Main Street<br />Chicago, IL 60601</p>
                    <p>Tel: (123) 456-7890<br />Email: info@littlelemon.com</p>
                </div>

                <div className="footer-section">
                    <h4>Social Media</h4>
                    <div className="social-icons">
                        <span>📘</span>
                        <span>📸</span>
                        <span>🐦</span>
                        <span>🧾</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Little Lemon. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
