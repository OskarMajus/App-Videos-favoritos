import React, {useState} from 'react'
import {auth, google} from '../Firebase/firebase';


// const loginGoogle = ()=>{
//     auth.signInWithPopup(google)
//     .then(respuesta =>{

//     }).catch(error => {
//         console.log(error);
        
//     })
// }

const handleSubmit =() =>{
    alert("Probando click de boton")
}

const Login = () => {
    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card border-primary mb-3 mx-auto mt-5">
                        <div className="card-body p-5">
                            <h2 className=" text-center mb-4">Iniciar Sesión</h2>
                            <form action="">
                                <button type="button" 
                                    className="w-100 btn btn-primary"
                                    onClick={handleSubmit}
                                >
                                    Iniciar Sesión con Google
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            
            </div>
        </div>
    )
        
}

export default Login
