import Cabecera from "./components/Cabecera"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import {useState, useEffect} from "react"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] =  useState({})
  const options = ['masculino','femenino']
  const [resultados, setResultados] = useState({})

  const eliminarPaciente = (id) =>{
    // console.log('Eliminando paciente' + id);
    const pacientesActualizados = pacientes.filter(remplazo => remplazo.id !== id)
    // console.log(pacientesActualizados);
    setPacientes(pacientesActualizados)
  }
  const calculoOMS = (peso,estatura,edad,genero,factor) =>{
    //let calcular = peso + estatura
    peso = parseFloat(peso)
    estatura = parseFloat(estatura)
    edad = parseFloat(edad)
    genero = genero
    factor = parseFloat(factor)
    let calc = 0
    let actv = 0
   if(genero == "masculino"){
      calc = (11.3 * peso) + (16 * (estatura/100)) + 901

      if(edad >= 18){
        actv = calc * factor
      }
      else{
        actv = 0
      }
    }
   else if(genero == "femenino"){
      calc = (8.7 * peso) - (25 * (estatura/100)) + 865

      if(edad >= 18){
        
        actv = calc * factor
      }
      else{
        actv = 0
        
      }
    }
    
    setResultados({
      basal:calc.toFixed(2),
      fa:actv.toFixed(2),
      total:actv.toFixed(2)
    })
  }

  return (
    <div className="">
      <Cabecera />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 ">
        <Formulario
          setPacientes = {setPacientes}
          pacientes = {pacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
          calculoOMS = {calculoOMS}
          setResultados ={setResultados}
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
