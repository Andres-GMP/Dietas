import Cabecera from "./components/Cabecera"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import {useState, useEffect} from "react"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] =  useState({})
  const options = ['Hombre','Mujer']
  const [resultados, setResultados] = useState({av:0})

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
  const calculoOMS = (peso,edad,estatura,factor) =>{
    //let calcular = peso + estatura
    peso = parseFloat(peso)
    edad = parseFloat(edad)
    estatura = parseFloat(estatura)
    factor = parseFloat(factor)

   // if(genero == "masculino"){
      let av = (11.3 * peso) + (16 * estatura) + 901
      resultados = av
      console.log(av)
      
    //}
   /* else if(genero == "femenino"){
      let av = (8.7 * peso) - (25 * estatura) + 865
    }
    else{
      print("Elige un genero valido (femenino o masculino)")
    }*/
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
          calculoOMS = {calculoOMS}
          />
        <Listado 
          pacientes = {pacientes}
          resultados = {resultados}
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
