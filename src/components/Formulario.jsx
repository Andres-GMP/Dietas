import React from 'react'
import {useState, useEffect} from 'react';


export const Formulario = ({setPacientes, pacientes, paciente,setPaciente}) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [fecha, setFecha] = useState('');

    const [error, setError] = useState(false)

    // console.log(paciente);
    //Primer parametro, una función, segundo parametro el arreglo
    useEffect(()=>{
        // console.log(paciente);
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setCorreo(paciente.correo)
            setSintomas(paciente.sintomas)
            setFecha(paciente.fecha)
        }
    },[paciente])

    const limpiar = () =>{
        setNombre('')
        setCorreo('')
        setSintomas('')
        setFecha('')
    }
    
    const genKey = () =>{
        const random = Math.random().toString(16).substring(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }
    const validarFormulario = (e) =>{
        // Esta acción me previene lo que stá validado
        e.preventDefault();
        
        
        if([nombre,correo, sintomas, fecha].includes('')){
            setError(true);
            return;        
        }
        // TIP: Se coloca el error en flaso para indicar que todos los campos están llenos 
        setError(false);
        
        const objetoPaciente = {
            nombre,
            correo,
            sintomas,
            fecha, 
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
        }
        
        
        

        // setPacientes([...pacientes, objetoPaciente])
        limpiar()
    }

    return (
        <div className='bg-gray-800 rounded-md p-4 w-auto mx-5 shadow-lg md:w-auto xl:w-auto xl:ml-5 mb-auto'>
            <h1 className=' text-3xl text-center font-bold text-white '>Formulario</h1>
            {error && <p className=' grid text-red-600 font-semibold  justify-center my-2 '> Debes llenar todos los campos</p>}
            <form className='container mx-2 text-yellow-100 font-semibold' onSubmit={validarFormulario}>
            <p className='text-center text-xl mt-5'>Ingrese la <span className=' text-blue-100 font-bold'> Informacion del Paciente </span></p>
                <div>
                    <label htmlFor="nombrePaciente">Nombre Paciente </label>
                    <input type="text" id= 'nombre' className=' block w-full rounded-md text-gray-800 px-2' placeholder=' Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    {/* <input type="text" id= 'nombre' className=' block w-full rounded-md ' placeholder=' Nombre' value={nombre} onChange={(e) => console.log(e.target.value)} /> */}
                </div>
                <div>
                    <label htmlFor="email" >Correo </label>
                    <input type="email" id= 'email' className='block w-full rounded-md text-gray-800 px-2' placeholder='Ingrese correo' value={correo} onChange={(e) => setCorreo (e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="sintomas">Sintomas </label>
                    {/* <input type="text" id='sintomas' className='block w-full rounded-md' /> */}
                    <textarea name="" id="" cols="30" rows="5" className='block w-full rounded-md p-1 mt-2 text-gray-800' placeholder='Ingrese una descripción de sus sintomas' value={sintomas} onChange={(e) => setSintomas (e.target.value)}></textarea>
                </div>
                <div>
                    <label htmlFor="date">Fecha </label>
                    <input type="date" name="date" id="date" className='px-2 block w-full rounded-md mb-10 text-gray-800' value={fecha} onChange={(e) => setFecha (e.target.value)} />
                <span>
                    <input type="submit" id='btn1' className= "bg-purple-800 rounded-md text-xl font-bold w-full hover:bg-purple-900 hover:cursor-pointer text-fuchsia-50 p-2 "
                    value = {paciente.id ? 'Editar paciente': 'Agregar'}
                    />
                </span>
                </div>


            </form>
        </div>
    )
}

export default Formulario