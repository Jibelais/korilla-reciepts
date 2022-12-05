import {useState} from 'react'


const Form = ({compareName}) => {
    const [newPerson, setNewPerson] = useState('')

    const handleSubmit =() =>{
        compareName(newPerson)
        setNewPerson('')

    }

    return (
        <div>
             <div>
            <input value = {newPerson} 
            placeholder = "Search Name"
            onChange = {(evt) => {setNewPerson(evt.target.value)}} />

            <button onClick = {handleSubmit}>Submit</button>

            </div>
        </div>
       
    
        )
}


export default Form
