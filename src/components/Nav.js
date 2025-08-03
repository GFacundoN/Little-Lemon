const Nav = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/logo192.png" alt="Little Lemon logo" style={{ height: '40px', marginRight: '0.5rem' }} />
                Little Lemon
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order">Order online</a></li>
                    <li><a href="/login">Login</a></li>
                    <li>
                        <a href="/reservations">
                            <button style={{
                                backgroundColor: '#f4ce14',
                                padding: '0.5rem 1rem',
                                border: 'none',
                                borderRadius: '999px',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}>
                                Book a table
                            </button>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
