import { useReducer } from 'react'
import BookingForm from '../components/BookingForm'

// inicializa los slots por defecto
export function initializeTimes() {
    return ['17:00', '18:00', '19:00', '20:00', '21:00']
}

// placeholder: simplemente devuelve el estado recibido
export function updateTimes(state, action) {
    return state
}

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        undefined,
        initializeTimes
    )

    return (
        <main className="main">
            <h1>Reserve a Table</h1>
            <p>Select your preferred date and time below.</p>
            <BookingForm
                availableTimes={availableTimes}
                dispatchUpdateTimes={dispatch}
            />
        </main>
    )
}

export default BookingPage
