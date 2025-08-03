import { render, screen } from '@testing-library/react'
import BookingForm from './BookingForm'

test('renders the choose date label', () => {
    // pasamos props ficticios para simular el parent
    render(<BookingForm availableTimes={[]} dispatchUpdateTimes={() => {}} />)
    const label = screen.getByText(/choose date/i)
    expect(label).toBeInTheDocument()
})
