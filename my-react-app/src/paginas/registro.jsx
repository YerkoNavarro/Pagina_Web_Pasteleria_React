import NavBar from '../components/nav_bar'
import UnFooter from '../components/C_footer'
import { useState } from 'react'
import { validateRegistroInput, setLogin, isLoggedIn } from '../storage/gestionStorage'

function Register(){
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [address, setAddress] = useState('')
    const [address2, setAddress2] = useState('')
    const [addressRef, setAddressRef] = useState('')
    const [profilePreview, setProfilePreview] = useState(null)
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('')

    const handleImageChange = (e) => {
        const file = e.target.files && e.target.files[0]
        if (!file) { setProfilePreview(null); return }
        if (!file.type.startsWith('image/')) { setProfilePreview(null); return }
        const url = URL.createObjectURL(file)
        setProfilePreview(url)
    }

    const handleRegister = () => {
        const { valid, errors } = validateRegistroInput({
            nombre: fullName,
            email,
            telefono,
            password,
            confirmarPassword: confirmPassword,
        })
        if(!valid){ setErrors(errors); setStatus(''); return }
        setErrors({})
        setLogin({ email, token: 'token-demo' })
        setStatus(isLoggedIn() ? 'Registro completado. Sesión iniciada.' : 'No se pudo iniciar sesión tras el registro')
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
                    <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                        <div className="bg-white rounded shadow-sm p-4 w-100 text-center">
                            <div className="d-flex justify-content-center mb-3">
                                <div className="rounded-circle overflow-hidden" style={{ width: 160, height: 160 }}>
                                    <img
                                        src={profilePreview || 'https://via.placeholder.com/160'}
                                        className="w-100 h-100"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                            <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />
                        </div>
                    </div>

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
                            {errors.nombre && (
                                <div className="text-danger small mt-1">{errors.nombre}</div>
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
                            {errors.email && (
                                <div className="text-danger small mt-1">{errors.email}</div>
                            )}
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
                            {errors.telefono && (
                                <div className="text-danger small mt-1">{errors.telefono}</div>
                            )}
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
                            {errors.confirmarPassword && (
                                <div className="text-danger small mt-1">{errors.confirmarPassword}</div>
                            )}
                        </div>
                        <div className="bg-white rounded shadow-sm p-4 mb-3">
                            <label className="form-label">Dirección</label>
                            <input
                                type="text"
                                className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Calle 123, Ciudad"
                            />
                        </div>
                        <div className="bg-white rounded shadow-sm p-4 mb-3">
                            <label className="form-label">Dirección 2 <span className="text-muted">(opcional)</span></label>
                            <input
                                type="text"
                                className="form-control"
                                value={address2}
                                onChange={(e) => setAddress2(e.target.value)}
                                placeholder="Depto, bloque, piso (opcional)"
                            />
                        </div>
                        <div className="bg-white rounded shadow-sm p-4 mb-3">
                            <label className="form-label">Referencia <span className="text-muted">(opcional)</span></label>
                            <input
                                type="text"
                                className="form-control"
                                value={addressRef}
                                onChange={(e) => setAddressRef(e.target.value)}
                                placeholder="Cerca de..., entre calles..., portón negro (opcional)"
                            />
                        </div>
                        <div className="mt-3 d-grid">
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
        </>
    );
}

export default Register;