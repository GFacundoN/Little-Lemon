import { useState } from 'react'

const BookingForm = ({ availableTimes, dispatchUpdateTimes }) => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState('Birthday')

    const handleDateChange = e => {
        const newDate = e.target.value
        setDate(newDate)
        dispatchUpdateTimes({ date: newDate })
    }

    const handleSubmit = e => {
        e.preventDefault()
        alert(
            `Reservación para ${date} a las ${time}, ${guests} persona(s), ocasión: ${occasion}`
        )
    }

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={e => setTime(e.target.value)}
                required
            >
                <option value="" disabled>-- select a time --</option>
                {availableTimes.map(t => (
                    <option key={t} value={t}>{t}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                value={guests}
                onChange={e => setGuests(e.target.value)}
                min="1"
                max="10"
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={e => setOccasion(e.target.value)}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <button type="submit">Submit reservation</button>
        </form>
    )
}

export default BookingForm
