import { useState, useEffect } from 'react';

const Patients = ( { patient } ) => {

    const { patientName, patienLastName, email, admisionDate, diagnosis } = patient

    return (
        <>
            <div className=''>
                <div className="md:mx-auto p-2 ">
                    <div className="bg-white shadow-md px-5 py-10 rounded-xl">
                        <p className="font-bold mb-3 text-gray-700 uppercase">
                        Nombre paciente:
                                <span className="font-normal normal-case"> {patientName} </span>
                        </p>
                        <p className="font-bold mb-3 text-gray-700 uppercase">
                        Apellido paciente:
                                <span className="font-normal normal-case"> {patienLastName} </span>
                        </p>
                        <p className="font-bold mb-3 text-gray-700 uppercase">
                            Email:
                                <span className="font-normal normal-case"> {email} </span>
                        </p>
                        <p className="font-bold mb-3 text-gray-700 uppercase">
                        Fecha de ingreso:
                                <span className="font-normal normal-case"> {admisionDate} </span>
                        </p>
                        <p className="font-bold mb-3 text-gray-700 uppercase">
                        Diagnostico:
                                <span className="font-normal normal-case"> {diagnosis} </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Patients; 

