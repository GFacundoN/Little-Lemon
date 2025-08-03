import { useReducer, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BookingForm from '../components/BookingForm'
import { fetchAPI, submitAPI } from '../api/littlelemonApi'

function initializeTimes() {
    const today = new Date()
    const result = fetchAPI(today)
    console.log('[init] fetchAPI(today) =>', result)
    return result
}

function updateTimes(state, action) {
    if (!action?.date) return state

    const parsedDate = new Date(action.date + 'T00:00:00')
    const result = fetchAPI(parsedDate)

    console.log('[update] date passed:', action.date)
    console.log('[update] parsedDate:', parsedDate)
    console.log('[update] fetchAPI(parsedDate) =>', result)

    return result
}

const BookingPage = () => {
    const navigate = useNavigate()

    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        undefined,
        initializeTimes
    )

    const submitForm = async (formData) => {
        const ok = await submitAPI(formData)

        if (ok) {
            navigate('/confirmed')
        } else {
            alert('Error: no se pudo confirmar la reserva.')
        }
    }

    useEffect(() => {
        console.log('[render] availableTimes:', availableTimes)
    }, [availableTimes])

    return (
        <main className="main">
            <h1>Reserve a Table</h1>
            <p>Select your preferred date and time below.</p>
            <BookingForm
                availableTimes={availableTimes}
                dispatchUpdateTimes={dispatch}
                submitForm={submitForm}
            />
        </main>
    )
}

export default BookingPage
