import NavBar from '../components/nav_bar'
import UnFooter from '../components/C_footer'
import { useState } from 'react'

function Usuario(){
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [address2, setAddress2] = useState('')
    const [addressRef, setAddressRef] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cvv, setCvv] = useState('')
    const [profilePreview, setProfilePreview] = useState(null)

    const handleImageChange = (e) => {
        const file = e.target.files && e.target.files[0]
        if (!file) { setProfilePreview(null); return }
        if (!file.type.startsWith('image/')) { setProfilePreview(null); return }
        const url = URL.createObjectURL(file)
        setProfilePreview(url)
    }

    return(
        <>
        <NavBar/>
        <section className="hero-banner text-center text-white d-flex flex-column justify-content-center align-items-center" role="banner" aria-label="Banner principal">
            <div className="big-title">
            <h1 className="display-4">Usuario</h1>
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
                            <label className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="********"
                            />
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
                        <div className="bg-white rounded shadow-sm p-4">
                            <div className="row g-3">
                                <div className="col-12 col-md-8">
                                    <label className="form-label">Número de tarjeta</label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        className="form-control"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value.replace(/[^0-9 ]/g, ''))}
                                        placeholder="0000 0000 0000 0000"
                                    />
                                </div>
                                <div className="col-12 col-md-4">
                                    <label className="form-label">CVV</label>
                                    <input
                                        type="password"
                                        inputMode="numeric"
                                        className="form-control"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, '').slice(0,4))}
                                        placeholder="***"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 d-grid">
                            <button type="button" className="btn btn-success">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <UnFooter/>
        </>
    );
}

export default Usuario;