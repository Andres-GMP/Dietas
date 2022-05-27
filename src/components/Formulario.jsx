import React from 'react'
import {useState, useEffect} from 'react';
import Dropdown from './Droplist';

import sedentario from '../img/sedentario.png'
import ligero from '../img/ligero.png'
import moderado from '../img/moderado.png'
import activo from '../img/activo.png'
import vigoroso from '../img/vigoroso.png'


export const Formulario = ({setPacientes, pacientes, paciente,setPaciente, calculoOMS, setResultados}) => {
    const [peso, setPeso] = useState('');
    const [estatura, setEstatura] = useState('');
    const [edad, setEdad] = useState('');
    const [genero, setGenero] = useState('');
    const [factor, setFactor] = useState('');
    const [error, setError] = useState(false)

    // console.log(paciente);
    //Primer parametro, una función, segundo parametro el arreglo
    useEffect(()=>{
        // console.log(paciente);
        if(Object.keys(paciente).length > 0){
            setPeso(paciente.peso)
            setEstatura(paciente.estatura)
            setEdad(paciente.edad)
            setGenero(paciente.genero)
            setFactor(paciente.factor)
        }
    },[paciente])

    const limpiar = () =>{
        setPeso('')
        setEstatura('')
        setEdad('')
        setGenero('')
        setFactor('')

    }
    
    const genKey = () =>{
        const random = Math.random().toString(16).substring(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }
    const validarFormulario = (e) =>{
        // Esta acción me previene lo que stá validado
        e.preventDefault();
        
        
        if([peso,estatura,edad,genero,factor].includes('')){
            setError(true);
            return;        
        }
        // TIP: Se coloca el error en flaso para indicar que todos los campos están llenos 
        setError(false);
        
        const objetoPaciente = {
            peso,estatura,edad,genero,factor
            // id: genKey()
        }

        if(paciente.id){
            // Actualizamos paciente
            objetoPaciente.id = paciente.id
            const pacientesUpload = pacientes.map(remplazo => remplazo.id === paciente.id ? objetoPaciente : remplazo)
            setPacientes(pacientesUpload)
            setPaciente ({});
        }else{
            objetoPaciente.id = genKey();
            setPacientes([...pacientes,objetoPaciente]);
            calculoOMS(peso,estatura,edad,genero,factor)
        }
        
        
        

        // setPacientes([...pacientes, objetoPaciente])
        limpiar()
    }

    return (
        <div className='bg-white rounded-3xl p-6 w-auto mx-5 shadow-lg md:w-auto xl:w-auto xl:ml-5 mb-auto pr-10 border-2 border-black'>
            <h1 className=' text-3xl text-center font-bold text-black '>CALCULAR EL PESO</h1>
            {error && <p className=' grid text-red-600 font-semibold  justify-center my-2'> DEBES LLENAR TODOS LOS CAMPOS</p>}
            
            <form className='container mx-2 font-semibold' onSubmit={validarFormulario}>
                <p className='text-center text-xl mt-5 text-gray-800'>Ingrese los <span className=' text-blue-400 font-bold'> DATOS </span></p>

             <div className='grid sm:grid-cols-2 gap-4'>

                    <div className='flex justify-between flex-col '>

                            <label className='text-black ' htmlFor="">Peso en kg </label>
                            <input type="text" id= 'peso' className='placeholder-gray-800 my-2 block w-full rounded-md bg-[#FFCC81] text-black p-2 mb-5' placeholder='Peso' value={peso} onChange={(e) => setPeso(e.target.value)} />
                            {/* <input type="text" id= 'nombre' className=' block w-full rounded-md ' placeholder=' Nombre' value={nombre} onChange={(e) => console.log(e.target.value)} /> */}
                        
                            <label className='text-black' htmlFor="nombrePaciente">Estatura en cm </label>
                            <input type="text" id= 'estatura' className=' my-2 block w-full rounded-md bg-[#FFCC81] text-black p-2 mb-5' placeholder='Estatura' value={estatura} onChange={(e) => setEstatura(e.target.value)} />
                            {/* <input type="text" id= 'nombre' className=' block w-full rounded-md ' placeholder=' Nombre' value={nombre} onChange={(e) => console.log(e.target.value)} /> */}
                        
                            <label className='text-black' htmlFor="nombrePaciente">Edad</label>
                            <input type="text" id= 'edad' className=' my-2 block w-full rounded-md bg-[#FFCC81] p-2 mb-5 ' placeholder='Edad' value={edad} onChange={(e) => setEdad(e.target.value)} />
                            {/* <input type="text" id= 'nombre' className=' block w-full rounded-md ' placeholder=' Nombre' value={nombre} onChange={(e) => console.log(e.target.value)} /> */}
                        
                            

                            <label className='text-black' htmlFor="nombrePaciente">Genero (masculino o femenino)</label>
                            <input type="text" id= 'genero' className='my-2 block w-full rounded-md bg-[#FFCC81] text-black p-2 mb-5' placeholder='Genero' value={genero} onChange={(e) => setGenero(e.target.value)} />
                            {/* <input type="text" id= 'nombre' className=' block w-full rounded-md ' placeholder=' Nombre' value={nombre} onChange={(e) => console.log(e.target.value)} /> */}
                        
                        
                            {/* <input type="text" id= 'nombre' className=' block w-full rounded-md ' placeholder=' Nombre' value={nombre} onChange={(e) => console.log(e.target.value)} /> */}
                        
                    </div>
                    <div>
                        <span className='flex justify-center'>
                        <h2 className=''>Calcular con factor de actividad</h2>
                        </span>
                        <div className='p-5 bg-[#FFB959] shadow-md rounded-xl mb-5 sm:mb-auto'>

                            <button className='flex bg-white text-black rounded-md text-md font-bold w-full border-2 hover:cursor-pointer pl-7 py-3 mt-1 mb-2 ' onClick={()=> {setFactor(1.2)
                            console.log(paciente.factor);}}>
                                <img src={sedentario} alt="" className='w-10 h-10' /> <p className='my-auto'>Sedentario</p>
                            </button>
                            
                            <button className='flex bg-white text-black rounded-md text-md font-bold w-full border-2 hover:cursor-pointer pl-7 py-3 mt-1 mb-2' onClick={()=> {setFactor(1.3)
                            console.log(paciente.factor);}}>
                                <img src={ligero} alt="" className='w-10 h-10' /> <p className='my-auto'>Ligero</p>
                            </button>
                            
                            <button className='flex bg-white text-black rounded-md text-md font-bold w-full border-2  hover:cursor-pointer pl-7 py-3 mt-1 mb-2' onClick={()=> {setFactor(1.5)
                            console.log(paciente.factor);}}>
                                <img src={moderado} alt="" className='w-10 h-10' /> <p className='my-auto'>Moderado</p>
                            </button>
                            
                            <button className='flex bg-white text-black rounded-md text-md font-bold w-full border-2 hover:cursor-pointer pl-7 py-3 mt-1 mb-2' onClick={()=> {setFactor(1.7)
                            console.log(paciente.factor);}}>
                                <img src={activo} alt="" className='w-10 h-10' /> <p className='my-auto'>Activo</p>
                            </button>
                            
                            <button className='flex bg-white text-black rounded-md text-md font-bold w-full border-2 hover:cursor-pointer pl-7 py-3 mt-1 mb-2' 
                            onClick={()=> {setFactor(1.9)
                            console.log(paciente.factor);}}>
                                <img src={vigoroso} alt="" className='w-10 h-10' /> <p className='my-auto'>Vigoroso</p>
                            </button>
                            <span className='p-2 flex justify-center rounded-md bg-[#FF990E]'>
                                <label htmlFor=""
                                // value= {paciente.factor}
                                > {factor} </label>
                            </span>
                        </div>
                    </div>

                    </div>
                
                <div  className=''>
                     {/*
                    <label htmlFor="date">Genero </label>
                <input type="date" name="date" id="date" className='px-2 block w-full rounded-md mb-10 text-gray-800' value={fecha} onChange={(e) => setFecha (e.target.value)} /> */}
               
                </div>
               


            </form>
        </div>
    )
}

export default Formulario