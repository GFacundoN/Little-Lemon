import { useState, useEffect } from 'react'

const BookingForm = ({
  availableTimes = [],
  dispatchUpdateTimes = () => {},
  submitForm = () => {}
}) => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const isValid = !!date && !!time && guests >= 1 && guests <= 10 && !!occasion
    setIsFormValid(isValid)
  }, [date, time, guests, occasion])

  const handleDateChange = e => {
    const newDate = e.target.value
    setDate(newDate)
    dispatchUpdateTimes({ date: newDate })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formData = { date, time, guests, occasion }
    submitForm(formData)
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
        min={new Date().toISOString().split("T")[0]}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={e => setTime(e.target.value)}
        required
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
        aria-label="Number of guests"
        title="Please enter between 1 and 10 guests"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={e => setOccasion(e.target.value)}
        required
      >
        <option value="" disabled>Select occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" disabled={!isFormValid}>
        Submit reservation
      </button>
    </form>
  )
}

export default BookingForm
