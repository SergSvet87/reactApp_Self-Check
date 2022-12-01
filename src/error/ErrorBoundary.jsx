import React from 'react'
import axios from 'axios'

import logger from '../utils/logger'

let startDate

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidMount(){
    startDate = new Date()
  }

  componentDidCatch(id, error, startDate) {
    axios
    .post('http://localhost:3015/errors', logger)
    .then(({ data }) => {
      logger.push({ id, error, startDate })
    })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
