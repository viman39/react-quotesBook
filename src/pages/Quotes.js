import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Victorius', text: 'Fun fun fun' },
    { id: 'q2', author: 'Rara', text: 'Snowboard is fun' },
]

const Quotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />
}

export default Quotes