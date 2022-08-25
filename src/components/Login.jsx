import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    //Variables de estado
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    //Variables de veriicación
    const [msgError, setMsgError] = useState("");

    const onSubmitHandler = e => {
        //Manejador de Submit
        e.preventDefault();
        axios.post('http://localhost:5000/api/cuenta/login',{email,password})
        .then(res => {
            console.log(res);
            setMsgError("");
            navigate('/pirates');
        })
        .catch(err => {
            console.log("Verificación fallida",err);
            const errorResponse = err.response.data;

            if(Object.keys(errorResponse).includes('msg')){
                setMsgError(errorResponse.msg);
            }
            else{
                setMsgError("");
            }
        })
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <h1>Login</h1>
            <p>
                <label>Email: </label><br/>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </p>
            <p>
                <label>Password: </label><br/>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </p>
            <p className='error'>{msgError}</p>
            <input type="submit" value="Login"/>
        </form>
    );
}

export default Login;