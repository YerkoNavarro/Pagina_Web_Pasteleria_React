import NavBar from '../components/nav_bar'
import UnFooter from '../components/C_footer'
import { useState, useEffect } from 'react'
import { authService } from '../services/authService'

function Usuario(){
    const [userData, setUserData] = useState(null)
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [address, setAddress] = useState('')
    const [profilePreview, setProfilePreview] = useState(null)

    useEffect(() => {
        const loginData = JSON.parse(localStorage.getItem('login') || '{}');
        if (loginData.username) {
            setUserData(loginData);
            setFullName(loginData.username);
            setEmail(`${loginData.username}@ejemplo.com`);
            setTelefono('+56912345678');
            setAddress('Calle Principal 123');
        }
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files && e.target.files[0]
        if (!file) { setProfilePreview(null); return }
        if (!file.type.startsWith('image/')) { setProfilePreview(null); return }
        const url = URL.createObjectURL(file)
        setProfilePreview(url)
    }

    if (!userData) {
        return (
            <>
                <NavBar/>
                <div className="container text-center py-5">
                    <p>Por favor inicia sesión para ver tu perfil.</p>
                </div>
                <UnFooter/>
            </>
        );
    }

    return(
        <>
        <NavBar/>
        <section className="hero-banner text-center text-white d-flex flex-column justify-content-center align-items-center" role="banner" aria-label="Banner principal">
            <div className="big-title">
            <h1 className="display-4">Mi Cuenta</h1>
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
                            <h5 className="mb-3">{userData.username}</h5>
                            <span className={`badge ${userData.isAdmin ? 'bg-danger' : 'bg-primary'} mb-3`}>
                                {userData.isAdmin ? 'Administrador' : 'Usuario'}
                            </span>
                            <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />
                        </div>
                    </div>

                    <div className="col-12 col-md-8">
                        <div className="bg-white rounded shadow-sm p-4 mb-3">
                            <h5 className="mb-3">Información Personal</h5>
                            <div className="mb-3">
                                <label className="form-label">Nombre completo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Ej: Juan Pérez"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nombre de usuario</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={userData.username}
                                    disabled
                                    style={{ backgroundColor: '#f8f9fa' }}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Correo electrónico</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="tucorreo@ejemplo.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Teléfono</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    placeholder="+56912345678"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Dirección</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Calle 123, Ciudad"
                                />
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="button" className="btn btn-secondary">Cancelar</button>
                                <button type="button" className="btn btn-primary">Guardar Cambios</button>
                            </div>
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