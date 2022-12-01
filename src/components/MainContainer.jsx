import React from 'react'

export const MainContainer = ({ children, ...props }) => (
  <main className="main" {...props}>
    {children}
  </main>
)
