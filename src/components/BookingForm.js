import { useState } from 'react'

const BookingForm = ({
  availableTimes = [],
  dispatchUpdateTimes = () => {},
  submitForm = () => {}
}) => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')

  const isFormValid = () => {
    return date !== '' && time !== '' && guests > 0 && guests <= 10
  }

  const handleDateChange = e => {
    const newDate = e.target.value
    setDate(newDate)
    dispatchUpdateTimes({ date: newDate })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formData = { date, time, guests, occasion }
    console.log('enviando formData:', formData)
    submitForm(formData)
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="Reservation Form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
        aria-required="true"
        aria-label="Choose reservation date"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={e => setTime(e.target.value)}
        required
        aria-label="Select reservation time"
      >
        <option value="" disabled>-- select a time --</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={e => setGuests(parseInt(e.target.value, 10))}
        min="1"
        max="10"
        required
        aria-required="true"
        aria-label="Number of guests"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={e => setOccasion(e.target.value)}
        required
        aria-label="Select occasion"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button
        type="submit"
        disabled={!isFormValid()}
        aria-label="Submit reservation form"
      >
        Submit reservation
      </button>
    </form>
  )
}

export default BookingForm
