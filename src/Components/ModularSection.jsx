import FormSection from "./FormSection";

function ModularSection({formName, propSetList, removePropSet, setListValue, addPropSet}){
  return (
    <>
      <h1>{formName}</h1>
      {  propSetList.map((propSet, index)=> {
    return (
    <FormSection key={propSet} formName={formName+" "+(index+1)} formProps={propSet} removePropSet={removePropSet} setListValue={setListValue}></FormSection>)
    })}
      <button onClick={addPropSet}>Add {formName}</button>
    </>
  );
}

export default ModularSection