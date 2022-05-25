import Cabecera from "./components/Cabecera"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import {useState, useEffect} from "react"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] =  useState({})
  const options = ['Hombre','Mujer']

  useEffect(()=>{
    const cargarLocalStorage = ()=>{

      
      // const pacientesLocalStorage = localStorage.getItem('pacientes')
      const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes'))
      setPacientes(pacientesLocalStorage)
    }
    cargarLocalStorage()
  },[]);

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes]);

  const eliminarPaciente = (id) =>{
    // console.log('Eliminando paciente' + id);
    const pacientesActualizados = pacientes.filter(remplazo => remplazo.id !== id)
    // console.log(pacientesActualizados);
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="text-slate-800">
      <Cabecera />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
        <Formulario
          setPacientes = {setPacientes}
          pacientes = {pacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
          />
        <Listado 
          pacientes = {pacientes}
          setPaciente  = {setPaciente} 
          eliminarPaciente = {eliminarPaciente}
         />
         {/* 
         <Droplist
            options={options}
         />
         */}
      </div>

    </div>
  )
}

export default App
