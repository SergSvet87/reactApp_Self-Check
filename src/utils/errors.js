export const errors = (error) => (error.push({
    id: error.id,
    msgError: error.message,
    date: error.date,
}))
