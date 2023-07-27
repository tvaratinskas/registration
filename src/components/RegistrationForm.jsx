import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import RegistrationValidation from './Validation'

const RegistrationForm = () => {
  return (
    <RegistrationValidation>
      {({ values, handleInputChange }) => (
        <>
          <div className="input-group">
            <label htmlFor="username">Name</label>
            <div className="input-icon-field">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Joy Shaheb"
                className={`input-field ${
                  values.errors.username ? 'error' : ''
                }`}
                onChange={handleInputChange}
              />
            </div>
            {values.errors.username && (
              <div className="error-message">{values.errors.username}</div>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <div className="input-icon-field">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="abc@gmail.com"
                className={`input-field ${values.errors.email ? 'error' : ''}`}
                onChange={handleInputChange}
              />
            </div>
            {values.errors.email && (
              <div className="error-message">{values.errors.email}</div>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-icon-field">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password here"
                className={`input-field ${
                  values.errors.password ? 'error' : ''
                }`}
                onChange={handleInputChange}
              />
            </div>
            {values.errors.password && (
              <div className="error-message">{values.errors.password}</div>
            )}
          </div>
          <button type="submit" id="submit">
            Submit
          </button>
        </>
      )}
    </RegistrationValidation>
  )
}

export default RegistrationForm