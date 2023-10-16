function FormSection({contactProps}){
const title = contactProps[0];

const inputFields = contactProps.map((prop, index) =>{ 
  if(index > 0){
    return (<label key={index}>{prop[0]}<input value={prop[1]} onChange={(e) => prop[2](e.target.value)} key={index}></input></label>)
  }
})
return(
<div className="form-section">
<h1>{title}</h1>
  {inputFields}
</div>)
}

export default FormSection