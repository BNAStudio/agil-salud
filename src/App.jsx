import { useState } from "react"
import Header from "./components/Header";
import Form from "./components/Form";
import PatientsList from "./components/PatientList";

function App() {

  const [ patients, setPatients ] = useState([]); 
  console.log(patients)

  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-12 md:flex">
        <Form patients = { patients } setPatients = { setPatients }/>
        <PatientsList patients = { patients } />
      </div>
    </div>
  )
}

export default App