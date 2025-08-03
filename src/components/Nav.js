import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header className="header">
            <div className="logo">
                <img
                    src="/logo192.png"
                    alt="Little Lemon logo"
                    style={{ height: '40px', marginRight: '0.5rem' }}
                />
                Little Lemon
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/booking">
                            <button
                                style={{
                                    backgroundColor: '#f4ce14',
                                    padding: '0.5rem 1rem',
                                    border: 'none',
                                    borderRadius: '999px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}
                            >
                                Book a table
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav