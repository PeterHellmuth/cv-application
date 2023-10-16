import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FormSection from './Components/FormSection.jsx'
import CVResult from './Components/CVResult'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const contactProps = [
    "Contact Information",
    ["First name:", firstName, setFirstName],
    ["Last name:", lastName, setLastName],
    ["Email:", email, setEmail],
    ["Phone number:", phone, setPhone]
  ]

  


  return (
    <>
      <div className="controls-container">
        <FormSection contactProps = {contactProps}></FormSection>

      </div>
      <div className="cv-result">
        <CVResult firstName={firstName} lastName={lastName} email={email} phone={phone}></CVResult>
      </div>
    </>
  )
}

export default App
