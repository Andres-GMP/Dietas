import React from 'react'
import {useState, useEffect} from 'react';
import Dropdown from './Droplist';


export const Formulario = ({setPacientes, pacientes, paciente,setPaciente, calculoOMS}) => {
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
            calculoOMS(peso,estatura,edad,factor)
        }
        
        
        

        // setPacientes([...pacientes, objetoPaciente])
        limpiar()
    }

    return (
        <div className='bg-white rounded-3xl p-6 w-auto mx-5 shadow-lg md:w-auto xl:w-auto xl:ml-5 mb-auto pr-10 border-2 border-black '>
            <h1 className=' text-3xl text-center font-bold text-black '>CALCULAR EL PESO</h1>
            {error && <p className=' grid text-red-600 font-semibold  justify-center my-2 '> Debes llenar todos los campos</p>}
            
            <form className='container mx-2 font-semibold' onSubmit={validarFormulario}>
            <p className='text-center text-xl mt-5 text-gray-800'>Ingrese los <span className=' text-blue-400 font-bold'> DATOS </span></p>


            <div className='w-2/3'>
                <div>
                    <label className='text-black' htmlFor="nombrePaciente">Peso en kg </label>
                    <input type="text" id= 'peso' className=' block w-full rounded-md bg-[#FFCC81] text-black p-2 mb-5' placeholder='Peso' value={peso} onChange={(e) => setPeso(e.target.value)} />
                    {/* <input type="text" id= 'nombre' className=' block w-full rounded-md ' placeholder=' Nombre' value={nombre} onChange={(e) => console.log(e.target.value)} /> */}
                </div>
                <div>
                    <label className='text-black' htmlFor="nombrePaciente">Estatura en cm </label>
                    <input type="text" id= 'estatura' className=' block w-full rounded-md bg-[#FFCC81] text-black p-2 mb-5' placeholder='Estatura' value={estatura} onChange={(e) => setEstatura(e.target.value)} />
                    {/* <input type="text" id= 'nombre' className=' block w-full rounded-md ' placeholder=' Nombre' value={nombre} onChange={(e) => console.log(e.target.value)} /> */}
                </div>
                <div>
                    <label className='text-black' htmlFor="nombrePaciente">Edad</label>
                    <input type="text" id= 'edad' className=' block w-full rounded-md bg-[#FFCC81] text-black p-2 mb-5' placeholder='Edad' value={edad} onChange={(e) => setEdad(e.target.value)} />
                    {/* <input type="text" id= 'nombre' className=' block w-full rounded-md ' placeholder=' Nombre' value={nombre} onChange={(e) => console.log(e.target.value)} /> */}
                </div>
                <div>
                    <label className='text-black' htmlFor="nombrePaciente">Genero</label>
                    <input type="text" id= 'genero' className=' block w-full rounded-md bg-[#FFCC81] text-black p-2 mb-5' placeholder='Genero' value={genero} onChange={(e) => setGenero(e.target.value)} />
                    {/* <input type="text" id= 'nombre' className=' block w-full rounded-md ' placeholder=' Nombre' value={nombre} onChange={(e) => console.log(e.target.value)} /> */}
                </div>
                <div>
                    <label className='text-black' htmlFor="nombrePaciente">Factor de actividad </label>
                    <input type="text" id= 'factor' className=' block w-full rounded-md bg-[#FFCC81] text-black p-2 mb-5' placeholder='Factor de actividad' value={factor} onChange={(e) => setFactor(e.target.value)} />
                    {/* <input type="text" id= 'nombre' className=' block w-full rounded-md ' placeholder=' Nombre' value={nombre} onChange={(e) => console.log(e.target.value)} /> */}
                </div>
            </div>

            <div className='w-1/3 p-5 bg-[#FFB959] shadow-md mt-6 rounded-xl'>
                <input type="submit" id='sedentario' className= "bg-white text-black rounded-md text-md font-bold w-full border-2 border-black hover:cursor-pointer p-3 mt-1 mb-2" value="Sedentario"/>
                <input type="submit" id='ligero' className= "bg-white text-black rounded-md text-md font-bold w-full border-2 border-black hover:cursor-pointer p-3 mt-1 mb-2" value="Ligero"/>
                <input type="submit" id='moderado' className= "bg-white text-black rounded-md text-md font-bold w-full border-2 border-black hover:cursor-pointer p-3 mt-1 mb-2" value="Moderado"/>
                <input type="submit" id='activo' className= "bg-white text-black rounded-md text-md font-bold w-full border-2 border-black hover:cursor-pointer p-3 mt-1 mb-2" value="Activo"/>
                <input type="submit" id='vigoroso' className= "bg-white text-black rounded-md text-md font-bold w-full border-2 border-black hover:cursor-pointer p-3 mt-1 mb-2" value="Vigoroso"/>
                
            </div>
                {/*
                <div>
                    <label htmlFor="email" >Estatura en cm </label>
                    <input type="email" id= 'email' className='block w-full rounded-md text-gray-800 px-2' placeholder='Ingrese correo' value={correo} onChange={(e) => setCorreo (e.target.value)}/>
                </div>*/}
 {/* <input type="text" id='sintomas' className='block w-full rounded-md' /> */}
               {/* <div>
                    <label htmlFor="sintomas">Edad </label>
                    
                    <textarea name="" id="" cols="30" rows="5" className='block w-full rounded-md p-1 mt-2 text-gray-800' placeholder='Ingrese una descripción de sus sintomas' value={sintomas} onChange={(e) => setSintomas (e.target.value)}></textarea>
                    </div>*/}
                
                <div  className=''>
                     {/*
                    <label htmlFor="date">Genero </label>
                <input type="date" name="date" id="date" className='px-2 block w-full rounded-md mb-10 text-gray-800' value={fecha} onChange={(e) => setFecha (e.target.value)} /> */}
               
                <span>
                    <input type="submit" id='btn1' className= "bg-[#FCAE66] text-white rounded-md text-xl font-bold w-full hover:bg-[#f59740] border-2 border-black hover:cursor-pointer p-3 mt-4 mb-5  "
                    value = {paciente.id ? 'Editar paciente': 'CALCULAR'}
                    />
                </span>
                </div>
               


            </form>
        </div>
    )
}

export default Formulario