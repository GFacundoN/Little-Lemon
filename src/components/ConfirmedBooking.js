import { Link } from 'react-router-dom'

const ConfirmedBooking = () => {
    return (
        <main className="main">
            <h1>Booking Confirmed</h1>
            <p>Your reservation has been successfully submitted. We look forward to serving you!</p>
            <Link to="/" className="cta-button">Back to Home</Link>
        </main>
    )
}

export default ConfirmedBooking
