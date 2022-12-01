import React from 'react'

export const InputError = ({textInputError}) => {
  return (
    <h6 style={{ color: 'orangered', marginBottom: '15px' }}>
      {textInputError}
    </h6>
  )
}
