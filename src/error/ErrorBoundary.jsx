import React from 'react'
import axios from 'axios'

import { ErrorFallback } from './ErrorFallback'
import logger from '../utils/logger'
import errors from '../utils/errors'

let startDate

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidMount() {
    startDate = new Date()
  }

  componentDidCatch(
    idErr,
    msgError,
    startDate,
    idLog,
    firstNumber,
    secondNumber,
    result,
    msgLog
  ) {
    if (msgError) {
      axios.post('http://localhost:3015/errors', errors).then(({ err }) => {
        err.push({ idErr, msgError, startDate })
      })
    } else {
      axios.post('http://localhost:3015/logger', logger).then(({ log }) => {
        log.push({
          idLog,
          firstNumber,
          secondNumber,
          result,
          msgLog,
          startDate,
        })
      })
    }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback/>
    }

    return this.props.children
  }
}

export default ErrorBoundary
