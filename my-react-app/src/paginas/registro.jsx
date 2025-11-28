import NavBar from '../components/nav_bar'
import UnFooter from '../components/C_footer'
import { useState, useEffect } from 'react'
import { authService } from '../services/authService'
import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Register(){
    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [address, setAddress] = useState('')
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('')
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (showSuccessModal) {
            const timer = setTimeout(() => {
                navigate('/login');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showSuccessModal, navigate]);

    const handleRegister = async () => {
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
        
        if (password.length < 6) {
            setErrors({ password: 'Mínimo 6 caracteres' })
            return
        }
        
        if (password !== confirmPassword) {
            setErrors({ confirmPassword: 'Las contraseñas no coinciden' })
            return
        }
        
        try {
            const result = await authService.register(username, password);
            
            if (result.success) {
                setStatus('Registro exitoso')
                setShowSuccessModal(true)
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
        <>
        <NavBar/>
        <section className="hero-banner text-center text-white d-flex flex-column justify-content-center align-items-center" role="banner" aria-label="Banner principal">
            <div className="big-title">
            <h1 className="display-4">Registrarse</h1>
            </div>
        </section>
        <div className="my-4" />

        <section className="py-4">
            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-md-8">
                        <div className="bg-white rounded shadow-sm p-4 mb-3">
                            <label className="form-label">Nombre completo</label>
                            <input
                                type="text"
                                className="form-control"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Ej: Juan Pérez"
                            />
                        </div>
                        <div className="bg-white rounded shadow-sm p-4 mb-3">
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
                        <div className="bg-white rounded shadow-sm p-4 mb-3">
                            <label className="form-label">Correo electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tucorreo@ejemplo.com"
                            />
                        </div>
                        <div className="bg-white rounded shadow-sm p-4 mb-3">
                            <label className="form-label">Teléfono <span className="text-muted">(opcional)</span></label>
                            <input
                                type="tel"
                                className="form-control"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                placeholder="+56912345678"
                            />
                        </div>
                        <div className="bg-white rounded shadow-sm p-4 mb-3">
                            <label className="form-label">Dirección <span className="text-muted">(opcional)</span></label>
                            <input
                                type="text"
                                className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Calle 123, Ciudad"
                            />
                        </div>
                        <div className="bg-white rounded shadow-sm p-4 mb-3">
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
                        <div className="bg-white rounded shadow-sm p-4 mb-3">
                            <label className="form-label">Confirmar contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="********"
                            />
                            {errors.confirmPassword && (
                                <div className="text-danger small mt-1">{errors.confirmPassword}</div>
                            )}
                        </div>
                        <div className="mt-3 d-grid">
                            {errors.general && (
                                <div className="alert alert-danger py-2 mb-2" role="alert">{errors.general}</div>
                            )}
                            {status && (
                                <div className="alert alert-info py-2 mb-2" role="status">{status}</div>
                            )}
                            <button type="button" className="btn btn-success" onClick={handleRegister}>Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <UnFooter/>


        <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>¡Registro exitoso!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Tu cuenta ha sido creada exitosamente. Serás redirigido a la página de inicio de sesión en unos segundos...</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => navigate('/login')}>
                    Ir a Iniciar Sesión
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default Register;