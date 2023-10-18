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


  const emptyWorkExperiencePropSet = [  {label: "Organization:", value: ''},
{label:"Dates of employment:", value:''},
{label:"Role:", value:''},
{label:"Work performed:", value:''},
{label: "Deleted", value: false}]

  const workExperienceName = "Work Experience";
  const [workExperiencePropSets, setWorkExperiencePropSets] = useState([emptyWorkExperiencePropSet]);

function setWorkExperiencePropValue(index, value, propSet){
  let propSetIndex = workExperiencePropSets.indexOf(propSet);
  const newList = workExperiencePropSets.map((propSet) => propSet); // immutable copy
  newList[propSetIndex][index].value = value;
  setWorkExperiencePropSets(newList);
}

function removeWorkExperience(propSet){
  let index = workExperiencePropSets.indexOf(propSet);
  const newList = workExperiencePropSets.map((propSet) => propSet); // immutable copy
  newList.splice(index, 1);
  setWorkExperiencePropSets(newList);
}

function addWorkExperience(){
  const newList = workExperiencePropSets.map((propSet) => propSet); // immutable copy
  newList.push(emptyWorkExperiencePropSet);
setWorkExperiencePropSets(newList);
}


const emptyEducationPropSet = [  {label: "Institution:", value: ''},
{label:"Degree:", value:''},
{label:"Description:", value:''},
{label:"Dates attended:", value:''},
{label: "Deleted", value: false}]
const educationName = "Education";
  const [educationPropSets, setEducationPropSets] = useState([emptyEducationPropSet]);

function setEducationPropValue(index, value, propSet){
  let propSetIndex = educationPropSets.indexOf(propSet);
  const newList = educationPropSets.map((propSet) => propSet); // immutable copy
  newList[propSetIndex][index].value = value;
  setEducationPropSets(newList);
}

function removeEducation(propSet){
  let index = educationPropSets.indexOf(propSet);
  const newList = educationPropSets.map((propSet) => propSet); // immutable copy
  newList.splice(index, 1);
  setEducationPropSets(newList);
}

function addEducation(){
  const newList = educationPropSets.map((propSet) => propSet); // immutable copy
  newList.push(emptyEducationPropSet);
setEducationPropSets(newList);
}

  return (
    <>
      <div className="controls-container">
        <FormSection key={contactInfoProps} formName={contactInfoName} formProps = {contactInfoProps}></FormSection>
        <ModularSection formName={workExperienceName} propSetList={workExperiencePropSets} removePropSet={removeWorkExperience} setListValue={setWorkExperiencePropValue} addPropSet ={addWorkExperience}></ModularSection>
        <ModularSection formName={educationName} propSetList={educationPropSets} removePropSet={removeEducation} setListValue={setEducationPropValue} addPropSet ={addEducation}></ModularSection>
      </div>
      <div className="cv-result">
        <CVResult firstName={firstName} lastName={lastName} email={email} phone={phone} workExperience={workExperiencePropSets} education={educationPropSets}></CVResult>

      </div>
    </>
  )
}






export default App
