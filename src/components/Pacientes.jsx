import React, { useState } from 'react'

export const Pacientes = ({paciente, setPaciente, eliminarPaciente, resultados}) => {

const handleEliminar = () => {
  // console.log('eliminando', paciente.id);
  const respuesta = confirm('¿Al chile estás seguro?')
  if(respuesta){
    eliminarPaciente(paciente.id)
  }
}

  return (
    <div>
        <div className=' p-5 bg-white shadow-md mt-5 rounded-lg '>
                <p className='uppercase text-gray-800 font-bold'>Calculo: <span className='font-normal normal-case'>{resultados}</span></p>
                {/*<div className='flex justify-between gap-2 mt-4'>
                  <input type="button" value = {"EDITAR"} className = 'font-semibold bg-blue-700 w-full rounded-md hover:cursor-pointe hover:bg-blue-800 hover:text-blue-100' onClick = {()=>setPaciente(paciente)}/>
                  <input type="button" value = {"ELIMINAR"} className = 'font-semibold bg-red-500  w-full  p-1 rounded-md hover:cursor-pointer hover:bg-red-600 hover:text-red-100' 
                  onClick={handleEliminar}
                  // onClick={()=>eliminarPaciente(pacientes.id)}
                  />
                </div>*/}
            </div>
    </div>
  )
}

export default Pacientes
