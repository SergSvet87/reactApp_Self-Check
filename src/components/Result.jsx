import React from 'react'

export const Result = ({ children, ...props }) => {
  return <div className="result" {...props}>{children}</div>
}
