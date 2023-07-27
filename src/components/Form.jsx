import React from 'react'
import Button from './Button'
import RegistrationForm from './RegistrationForm'

const Form = () => {
  return (
    <form id="form">
      <div className="social">
        <div className="title">Get Started</div>
        <div className="title-question">
          Already Have an Account? <br />
          <span>Log In</span>
        </div>
        <Button />
        <div className="or">Or</div>
      </div>
      <RegistrationForm />
    </form>
  )
}
export default Form