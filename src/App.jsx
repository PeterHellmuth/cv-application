import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FormSection from './Components/FormSection.jsx'
import ModularSection from './Components/ModularSection.jsx'
import CVResult from './Components/CVResult'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const contactInfoName = "Contact Information";
  const contactInfoProps = [  {label: "First name:", value: firstName, setValue: setFirstName},
  {label:"Last name:", value:lastName, setValue:setLastName},
  {label:"Email:", value:email, setValue:setEmail},
  {label:"Phone number:", value:phone, setValue:setPhone}]


  const workExperienceName = "Work Experience";
  const [workExperiencePropSets, setWorkExperiencePropSets] = useState([[  {label: "Organization:", value: ''},
  {label:"Dates of employment:", value:''},
  {label:"Role:", value:''},
  {label:"Work performed:", value:''},
{label: "Deleted", value: false}]]);

function setWorkExperiencePropValue(index, value, propSet){
  let propSetIndex = workExperiencePropSets.indexOf(propSet);
  let newList = workExperiencePropSets;
  newList[propSetIndex][index].value = value;
  setWorkExperiencePropSets(newList);
}

function removeWorkExperience(propSet){
  let index = workExperiencePropSets.indexOf(propSet);
  let newList = workExperiencePropSets;
  newList.splice(index, 1);
  setWorkExperiencePropSets(newList);
}

function addWorkExperience(){
  let newList = workExperiencePropSets;
  newList.push([  {label: "Organization:", value: ''},
  {label:"Dates of employment:", value:''},
  {label:"Role:", value:''},
  {label:"Work performed:", value:''},
{label: "Deleted", value: false}]);
setWorkExperiencePropSets(newList);
}

  return (
    <>
      <div className="controls-container">
        <FormSection formName={contactInfoName} formProps = {contactInfoProps}></FormSection>
        <ModularSection formName={workExperienceName} propSetList={workExperiencePropSets} removePropSet={removeWorkExperience} setListValue={setWorkExperiencePropValue} addPropSet ={addWorkExperience}></ModularSection>
      </div>
      <div className="cv-result">
        <CVResult firstName={firstName} lastName={lastName} email={email} phone={phone}></CVResult>

      </div>
    </>
  )
}






export default App
