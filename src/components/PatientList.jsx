import Patients from "./Patients";

const PatientsList = ( { patients } ) => {

    return (
        <>
            <div className="lg:w-3/5 md:w-1/2 md:mx-auto  m-2 overflow-y-scroll">

                { /**
                 * Valida que existan algun elemento en pacientes
                 */
                    patients && patients.length ? (
                        <>
                        <h2 className="font-black text-3xl text-center"> Listado Pacientes </h2>
                        <p className="text-xl mt-5 mb-10 text-center"> Administrador de 
                        <span className="text-indigo-600 font-bold"> pacientes y citas </span>
                        </p>
                        {
                            patients.map( patient => (
                                <Patients
                                    patient={ patient }
                                    key={ patient.id }
                            />
                        ))}
                        </>
                    ) : (
                        <>
                            <h2 className="font-black text-3xl text-center"> No tienes pacientes registrados </h2>
                            <p className="text-xl mt-5 mb-10 text-center"> Cuando agregues un paciente 
                            <span className="text-indigo-600 font-bold"> apareceran aqui </span>
                            </p>
                        </>
                    )
                }
            </div>
        </>
        )
    };

export default PatientsList;