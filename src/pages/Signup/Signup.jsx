import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'
import LoginTabs from '../../components/LoginTabs/LoginTabs'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <LoginTabs selected={"signup"} />
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default Signup
