import React from 'react'


const SignUp = () => {
   
    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card border-primary mb-3">
                        <div className="card-body">
                            <h2 className=" text-center mb-4">Sign Up</h2>
                            <form action="">
                                <div className="form-group" id="email">
                                    <label >Correo Electronico</label>
                                    <input type="email" placeholder="Correo Electronico"  required/>
                                </div>
                                <div className="form-group" id="password">
                                    <label >Contraseña</label>
                                    <input type="password" placeholder="Contraseña"/>
                                </div>
                                <div className="form-group" id="confirm-passwrod">
                                    <label >Confirmación Contraseña</label>
                                    <input type="password" placeholder="Contraseña"/>
                                </div>
                                <button type="submit" className="w-100 btn btn-primary">Registrarse</button>
                            </form>
                        </div>

                    </div>
                </div>
            
            </div>
        </div>
        
    )
}

export default SignUp
