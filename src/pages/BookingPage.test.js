import { initializeTimes, updateTimes } from './BookingPage'

test('initializeTimes returns the default time slots', () => {
    const times = initializeTimes()
    expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00'])
})

test('updateTimes returns the same state by default', () => {
    const initialState = ['12:00', '13:00']
    const result = updateTimes(initialState, { date: '2025-08-03' })
    expect(result).toEqual(initialState)
})
