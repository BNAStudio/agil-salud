import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ patients, setPatients }) => {
    const [patientName, setPatientName] = useState("");
    const [patienLastName, setPatientLastName] = useState("");
    const [email, setEmail] = useState("");
    const [admisionDate, setAdmisionDate] = useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [error, setError] = useState(false);

    function idGenerate() {
        const random = Math.random().toString(36).substring(2);
        const date = Date.now().toString(36);
        return random + date;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([patientName, patienLastName, email, admisionDate, diagnosis].includes("")) {
            console.log("Al menos un campo se encuentra vacio");
            setError(true);
            return;
        }

        setError(false);

        const patienObj = {
            patientName,
            patienLastName,
            email,
            admisionDate,
            diagnosis,
            id: idGenerate(),
        };

        setPatients([...patients, patienObj]);

        setPatientName("");
        setPatientLastName("");
        setEmail("");
        setAdmisionDate("");
        setDiagnosis("");
    };

    return (
        <>
            <div className="lg:w-2/5 md:w-1/2 mx-5">
                <h2 className="font-black text-3xl text-center">
                    Seguimiento pacientes
                </h2>
                <p className="text-lg mt-5 text-center mb-10">
                    Añadir pacientes y
                    <span className="text-indigo-600 font-bold">
                        {" "}
                        administrarlos{" "}
                    </span>
                </p>
                <form
                    className="bg-white shadow-md rounded-lg py-10 px-5"
                    onSubmit={handleSubmit}
                >
                    {error && (
                        <Error>
                            <h1> Intente de nuevo </h1>
                            <p>'Debe rellenar todos los campos'</p>
                        </Error>
                    )}

                    <div className="mb-5">
                        <label
                            className="block text-gray-700 uppercase font-bold"
                            htmlFor="pacienteNombre"
                        >
                            {" "}Nombre paciente{" "}
                        </label>
                        <input
                            id="pacienteNombre"
                            type="text"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder="Nombre paciente"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                        />
                    </div>

                    
                    <div className="mb-5">
                        <label
                            className="block text-gray-700 uppercase font-bold"
                            htmlFor="propietario"
                        >
                            {" "}Apellido paciente{" "}
                        </label>
                        <input
                            id="patientLastName"
                            type="text"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder="Apellido paciente"
                            value={patienLastName}
                            onChange={(e) => setPatientLastName(e.target.value)}
                        />
                    </div>

                    <div className="mb-5">
                        <label
                            className="block text-gray-700 uppercase font-bold"
                            htmlFor="email"
                        >
                            {" "}Email{" "}
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder="Email contacto"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-5">
                        <label
                            className="block text-gray-700 uppercase font-bold"
                            htmlFor="alta"
                        >
                            {" "}Fecha de ingreso{" "}
                        </label>
                        <input
                            id="admisionDate"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            type="date"
                            placeholder="Fecha de ingreso"
                            value={admisionDate}
                            onChange={(e) => setAdmisionDate(e.target.value)}
                        />
                    </div>

                    <div className="mb-5">
                        <label
                            className="block text-gray-700 uppercase font-bold"
                            htmlFor="diagnosis"
                        >
                            {" "}
                            Diagnostico{" "}
                        </label>
                        <textarea
                            id="diagnosis"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder="Diagnostico"
                            value={diagnosis}
                            onChange={(e) => setDiagnosis(e.target.value)}
                        />
                        <input
                            type="submit"
                            className="bg-indigo-600 w-full p-3 rounded-lg text-white font-bold uppercase mt-4 hover:bg-indigo-700 cursor-pointer transition-all"
                            value="Agregar paciente"
                            onClick={handleSubmit}
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;
