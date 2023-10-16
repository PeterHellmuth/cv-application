function Contact({contactProps}){
const inputFields = contactProps.map((prop, index) =>{ return(
<label key={index}>{prop[0]}<input value={prop[1]} onChange={(e) => prop[2](e.target.value)} key={index}></input></label>)
})
return(
<div className="contact-information">
<h1>Contact information</h1>
  {inputFields}
</div>)
}

export default Contact