import NavBar from '../components/nav_bar'
import UnFooter from '../components/C_footer'
import { useState } from 'react'
import { authService } from '../services/authService'

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('')
    
    const handleLogin = async () => {
        setErrors({})
        setStatus('')
        
        if (!username.trim()) {
            setErrors({ username: 'Ingresa tu nombre de usuario' })
            return
        }
        
        if (!password.trim()) {
            setErrors({ password: 'Ingresa tu contraseña' })
            return
        }
        
        try {
            const result = await authService.login(username, password);
            
            if (result.success) {
                setStatus('Inicio de sesión exitoso')
                setTimeout(() => {
                    window.location.href = '/'
                }, 1000)
            } else {
                setErrors({ general: result.error })
                setStatus(result.error)
            }
        } catch (error) {
            setErrors({ general: 'Error de conexión' })
            setStatus('Error de conexión al servidor')
        }
    }
    return(
        <div className="d-flex flex-column min-vh-100">
            <NavBar/>
            <main className="flex-grow-1">
                <section className="hero-banner text-center text-white d-flex flex-column justify-content-center align-items-center" role="banner" aria-label="Banner principal">
                    <div className="big-title">
                    <h1 className="display-4">Iniciar sesión</h1>
                    </div>
                </section>
                <div className="my-4" />

                <section className="py-4">
                    <div className="container" style={{ maxWidth: '520px' }}>
                        <div className="bg-white rounded shadow-sm p-4">
                            <div className="mb-3">
                                <label className="form-label">Nombre de usuario</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="usuario123"
                                />
                                {errors.username && (
                                    <div className="text-danger small mt-1">{errors.username}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="********"
                                />
                                {errors.password && (
                                    <div className="text-danger small mt-1">{errors.password}</div>
                                )}
                            </div>
                            {errors.general && (
                                <div className="alert alert-danger py-2" role="alert">{errors.general}</div>
                            )}
                            <button className="btn btn-primary w-100" type="button" onClick={handleLogin}>Iniciar sesión</button>
                        </div>
                    </div>
                </section>
            </main>
            <UnFooter/>
        </div>
    );
}

export default Login;