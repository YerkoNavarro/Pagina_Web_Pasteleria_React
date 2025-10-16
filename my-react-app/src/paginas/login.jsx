import NavBar from '../components/nav_bar'
import UnFooter from '../components/C_footer'
import { useState } from 'react'

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
                                <label className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="********"
                                />
                            </div>
                            <button className="btn btn-primary w-100" type="button">Iniciar sesión</button>
                        </div>
                    </div>
                </section>
            </main>
            <UnFooter/>
        </div>
    );
}

export default Login;