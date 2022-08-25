import React, {useState} from 'react';
import axios from 'axios'; 

const Register = () => {
    
    //Variables de estado
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //Variables de estado para la validación
    const [nombreError, setNombreError] = useState("");
    const [apellidoError, setApellidoError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [statusCreation, setStatusCreation] = useState("");


    const onSubmitHandler = e => {
        //Manejador de Submit
        e.preventDefault();
        axios.post('http://localhost:5000/api/cuenta/new',{nombre,apellido,email,password,confirmPassword})
        .then(res => {
            console.log(res);
            setNombre("");
            setApellido("");
            setEmail("");
            setPassword("");
            setNombreError("");
            setApellidoError("");
            setEmailError("");
            setPasswordError("");
            setConfirmPassword("");
            setConfirmPasswordError("");
            setStatusCreation("Account has been successfully created");
            
        })
        .catch(err => {
            console.log("Petición fallida",err);
            const errorResponse = err.response.data.errors;

            if(Object.keys(errorResponse).includes('nombre')){
                setNombreError(errorResponse['nombre'].message);
            }
            else{
                setNombreError("");
            }

            if(Object.keys(errorResponse).includes('apellido')){
                setApellidoError(errorResponse['apellido'].message);
            }
            else{
                setApellidoError("");
            }

            if(Object.keys(errorResponse).includes('email')){
                setEmailError(errorResponse['email'].message);
            }
            else{
                setEmailError("");
            }

            if(Object.keys(errorResponse).includes('password')){
                setPasswordError(errorResponse['password'].message);
            }
            else{
                setPasswordError("");
            }

            if(Object.keys(errorResponse).includes('confirmPassword')){
                setConfirmPasswordError(errorResponse['confirmPassword'].message);
            }
            else{
                setConfirmPasswordError("");
            }

        })
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <h1>Register</h1>
            <p>
                <label>Name: </label><br/>
                <input type="text" onChange={(e)=>setNombre(e.target.value)} value={nombre}/>
                <p className='error'>{nombreError}</p>
            </p>
            <p>
                <label>Last Name: </label><br/>
                <input type="text" onChange={(e)=>setApellido(e.target.value)} value={apellido}/>
                <p className='error'>{apellidoError}</p>
            </p>
            <p>
                <label>Email: </label><br/>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <p className='error'>{emailError}</p>
            </p>
            <p>
                <label>Password: </label><br/>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <p className='error'>{passwordError}</p>
            </p>
            <p>
                <label>Confirm Password: </label><br/>
                <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
                <p className='error'>{confirmPasswordError}</p>
            </p>
            <p className='creation'>{statusCreation}</p>
            <input type="submit" value="Register"/>
        </form>
    )
}

export default Register;