export const logger = (log) => (log.push({
    id: log.id,
    msg: log.message,
    date: log.date,
}))
