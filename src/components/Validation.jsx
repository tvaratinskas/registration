import React, { useState } from 'react'

const RegistrationValidation = ({ children }) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    errors: {
      username: '',
      email: '',
      password: '',
    },
  })

  const validateField = (name, value) => {
    if (name === 'username') {
      return value.length < 5
        ? 'Username must be at least 5 characters long!'
        : ''
    }
    if (name === 'email') {
      const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
      return emailPattern.test(value) ? '' : 'Email is not valid!'
    }
    if (name === 'password') {
      return value.length < 8
        ? 'Password must be at least 8 characters long!'
        : ''
    }
    return ''
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    const error = validateField(name, value)
    setValues({
      ...values,
      [name]: value,
      errors: { ...values.errors, [name]: error },
    })
  }

  return children({ values, handleInputChange })
}

export default RegistrationValidation