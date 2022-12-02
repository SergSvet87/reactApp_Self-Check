import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { Form, Header, Input, InputError, MainContainer, Result } from './components/index'

import './App.scss'

function App() {
  const [firstNumber, setFirstNumber] = React.useState()
  const [secondNumber, setSecondNumber] = React.useState()
  const [textInputError, setTextInputError] = React.useState('')

  const onChangeHandlerFN = (e) => {
    setFirstNumber(e.target.value)
  }

  const onChangeHandlerSN = (e) => {
    let valSecondNumber = e.target.value

    if (+valSecondNumber === 0) {
      setTextInputError('You can not divide by zero!')
    }

    if (+valSecondNumber !== 0) {
      setTextInputError('')
    }

    setSecondNumber(valSecondNumber)
  }

  let result = 0

  result = firstNumber / secondNumber

  return (
    <MainContainer>
      <Header />
      <ErrorBoundary
        firstNumber={firstNumber}
        secondNumber={secondNumber}
        result={result}
      >
        <Form>
          <Input
            id="firstNumber"
            name="firstNumber"
            className="field__input"
            value={firstNumber}
            placeholder="📋 Enter number"
            onChange={(e) => onChangeHandlerFN(e)}
          />
          {textInputError ? <InputError textInputError={textInputError}/> : textInputError}
          <Input
            id="secondNumber"
            name="secondNumber"
            className="field__input"
            value={secondNumber}
            placeholder="📋 Enter number"
            onChange={(e) => onChangeHandlerSN(e)}
          />
        </Form>
      </ErrorBoundary>
      <Result>{result}</Result>
    </MainContainer>
  )
}

export default App
