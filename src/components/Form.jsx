import React from "react";

export const Form = ({children, ...props}) =>  {
  return <form className="form" noValidate {...props}>{children}</form>
}