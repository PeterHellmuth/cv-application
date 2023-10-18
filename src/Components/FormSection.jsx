function FormSection({formName, formProps, removePropSet = null, setListValue = null}){
const title = formName;
let canDelete = null;
let maxLength = null;
 const inputFields = formProps.map((prop, index) =>{ 
  if(formName === "Contact Information" || prop.label === "Dates of employment:" || prop.label === "Dates attended:"){
    maxLength = 30;
  } else{
    maxLength = 600;
  }
  if(setListValue){
    if(prop.label!="Deleted"){
      return (<label key={index}>{prop.label}<input maxLength = {maxLength} value={prop.value} onChange={(e) => setListValue(index, e.target.value, formProps)} key={index}></input></label>)
    } else{
      canDelete = true;
    }
  } else{
      return (<label key={index}>{prop.label}<input maxLength = {maxLength} value={prop.value} onChange={(e) => prop.setValue(e.target.value)} key={index}></input></label>)
  }
});

let deleteButton = null;
if(canDelete){
  deleteButton = (<button onClick={() => removePropSet(formProps)}>Delete {formName}</button>);
}
return(
<div className="form-section">
<h1>{title}</h1>
  {inputFields}
  {deleteButton}
</div>)
}

export default FormSection