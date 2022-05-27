import React, { useState } from 'react'
import nutricion from '../img/programar.png'

export const Pacientes = ({paciente, setPaciente, eliminarPaciente, resultados}) => {

const handleEliminar = () => {
  // console.log('eliminando', paciente.id);
  const respuesta = confirm('¿Estás seguro?')
  if(respuesta){
    eliminarPaciente(paciente.id)
  }
}

  return (
    <div>
        <div className=' p-5 bg-white shadow-md mt-6 rounded-3xl border-2 border-black'>
        {/* Aqui comienza el Problema - OJO COMENTE ESTO PARA PODER MODIFICAR EL DISENIO*/}
        

        <p className='uppercase text-gray-800 font-bold'>Gasto basal: <span className='font-normal normal-case'>{resultados.basal}</span></p>
        <p className='uppercase text-gray-800 font-bold'>Factor de actividad: <span className='font-normal normal-case'>{resultados.fa}</span></p>
        <p className='uppercase text-gray-800 font-bold'>Total: <span className='font-normal normal-case'>{resultados.total}</span></p>
        <img src={nutricion} alt="" className='w-80 h-80 m-auto' /> <p className='my-auto'></p>
        </div>
    </div>
  )
}

export default Pacientes
