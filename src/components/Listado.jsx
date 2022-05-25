import React from 'react'
import {Pacientes} from './Pacientes'


export const Listado = ({pacientes, setPaciente, eliminarPaciente}) => {
    

    return (
        <div className='bg-gray-800 rounded-md p-4 w-auto shadow-xl mx-5 md:w-full lg:w-auto lg:mx-5 xl:w-auto  overflow-y-auto md:mx-5 sm:mx-5 xl:mx-5 2xl:mx-5 '>
            <div>
                <h2 className='text-3xl text-center text-blue-400 font-bold'>Listado Pacientes</h2>
                <p className='text-center text-xl mt-5 text-gray-400'>Administra tus <span className=' text-blue-100 font-bold'> Pacientes y Citas </span></p>
                {
                    pacientes.map(paciente =>(
                        <Pacientes
                        key={paciente.id}
                        paciente = {paciente}
                        setPaciente = {setPaciente}
                        eliminarPaciente = {eliminarPaciente}
                        />
                    ))
                }
                
                
            </div>
        </div>
    )
}

export default Listado