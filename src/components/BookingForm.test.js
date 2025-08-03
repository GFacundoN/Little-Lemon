import { render, screen, fireEvent } from '@testing-library/react'
import BookingForm from './BookingForm'

describe('BookingForm validation', () => {
    test('date input has required attribute', () => {
        render(<BookingForm availableTimes={[]} dispatchUpdateTimes={() => {}} />)
        const dateInput = screen.getByLabelText(/choose date/i)
        expect(dateInput).toBeRequired()
    })

    test('guests input has min and max', () => {
        render(<BookingForm availableTimes={[]} dispatchUpdateTimes={() => {}} />)
        const guestsInput = screen.getByLabelText(/number of guests/i)
        expect(guestsInput).toHaveAttribute('min', '1')
        expect(guestsInput).toHaveAttribute('max', '10')
    })

    test('time select is required', () => {
        render(<BookingForm availableTimes={[]} dispatchUpdateTimes={() => {}} />)
        const timeSelect = screen.getByLabelText(/choose time/i)
        expect(timeSelect).toBeRequired()
    })

    test('form does not submit when required fields are empty', () => {
        const mockSubmit = jest.fn()
        render(<BookingForm availableTimes={[]} dispatchUpdateTimes={() => {}} submitForm={mockSubmit} />)
        const submitButton = screen.getByRole('button', { name: /submit reservation/i })
        fireEvent.click(submitButton)
        expect(mockSubmit).not.toHaveBeenCalled()
    })
})