export const logger = (log) => (log.push({
    id: log.id,
    firstNumber: log.firstNumber,
    secondNumber: log.secondNumber,
    result: log.result,
    msgLog: log.message,
    date: log.date,
}))
