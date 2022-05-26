import React from 'react'
import {Pacientes} from './Pacientes'


export const Listado = ({pacientes, setPaciente, eliminarPaciente, resultados}) => {
    

    return (
        <div className='bg-white rounded-3xl p-6 w-auto shadow-xl mx-5 lg:w-auto lg:mx-5 xl:w-auto  overflow-y-auto md:mx-5 sm:mx-5 xl:mx-5 2xl:mx-5 border-2 border-black'>
            <div>
                <h2 className='text-3xl text-center font-bold text-black '>LISTADO DIETÉTICO</h2>
                <p className='text-center text-xl mt-5 text-gray-800'>Resultados de los  <span className=' text-blue-400 font-bold'> CALCULOS </span></p>
                <Pacientes resultados = {resultados}></Pacientes>
                {
                    
                    pacientes.map(paciente =>(
                        <Pacientes
                        key={paciente.id}
                        paciente = {paciente}
                        setPaciente = {setPaciente}
                        eliminarPaciente = {eliminarPaciente}
                        resultados={resultados}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Listado