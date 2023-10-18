function CVResult({firstName, lastName, email, phone, workExperience, education}){


return(
<>
<div className="contact-section">
    <h1>{firstName}&nbsp;{lastName}</h1>
    <h2>{email}</h2>
    <h2>{phone}</h2>
</div>
<div className="work-section">
    {
        workExperience.map((propSet, index)=>{
            return (
                <div key={index} className="work-experience">
                    <div className="work-experience-header">
                        <h1 className="title">{propSet[0].value}</h1>
                        <span className="date">{propSet[1].value}</span>
                    </div>
                    <div className="work-description">
                        <h3 className="role">{propSet[2].value}</h3>
                        <p>{propSet[3].value}</p>
                    </div>
                </div>
            )
        })
    }
</div>
<div className="work-section">
{
        education.map((propSet, index)=>{
            return (
                <div key={index} className="work-experience">
                    <div className="work-experience-header">
                        <h1 className="title">{propSet[0].value}</h1>
                        <span className="date">{propSet[3].value}</span>
                    </div>
                    <div className="work-description">
                        <h3 className="role">{propSet[1].value}</h3>
                        <p>{propSet[2].value}</p>
                    </div>
                </div>
            )
        })
    }
</div>
</>

)

}

export default CVResult