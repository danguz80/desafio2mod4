import React, { useState } from "react"

const Register = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [repass, setRepass] = useState("");

    const [error, setError] = useState(false);

    const validarDatos =(e)=>{
        e.preventDefault()

        if((!email.trim() || !pass.trim() || !repass.trim()) || (pass.length < 6) || (pass !== repass)) {
            setError(true);
        
            return
        } 
        setError(false);
        setEmail("");
        setPass("");
        setRepass("");

    }

    return (
        <>
            <form className="formulario" onSubmit={validarDatos}>
                {error ? <p className="validacion_error">Todos los campos son obligatorios, la contraseña debe tener mínimo 6 carácteres y ambas deben coincidir.</p> :
                <p className="validacion_exito">Datos ingresados exitósamente, formulario enviado.</p> }
                <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input 
                    type="email"
                    name="email" 
                    className="form-control" 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    placeholder="Ingresa tu email"/>
                        <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu email con los demás.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input 
                    type="password" 
                    name="password"
                    className="form-control"
                    onChange={(e)=>setPass(e.target.value)}
                    value={pass}
                    placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Re-ingresa la Contraseña</label>
                    <input 
                    type="password"
                    name="repassword" 
                    className="form-control"
                    onChange={(e)=>setRepass(e.target.value)}
                    value={repass}
                    placeholder="Re-ingresa el Password"/>
                </div>
                <button type="submit" className="btn btn-primary mt-4 text-center">Enviar</button>
            </form>
        </>
    )
}

export default Register