
import NavBar from '../components/nav_bar'
import UnFooter from '../components/C_footer'
function Register(){
    return(
        <>
        <NavBar/>
        <section className="hero-banner text-center text-white d-flex flex-column justify-content-center align-items-center" role="banner" aria-label="Banner principal">
            <div className="big-title">
            <h1 className="display-4">Registrarse</h1>
            </div>
        </section>
        <div class="container py-5">
        <h2 class="section-title text-center mb-4">Crear Cuenta</h2>
        <form>
            <div class="mb-3">
            <label for="nombre" class="form-label">Nombre completo</label>
            <input type="text" class="form-control" id="nombre" placeholder="Nombre completo" required />
            </div>
            <div class="mb-3">
            <label for="correo" class="form-label">Correo electrónico</label>
            <input type="email" class="form-control" id="correo" placeholder="correo" required />
            </div>
            <div class="mb-3">
            <label for="fechaNacimiento" class="form-label">Fecha de nacimiento</label>
            <input type="date" class="form-control" id="fechaNacimiento" required />
            <small class="text-chocolate">Usuarios mayores de 50 años tienen 50% de descuento</small>
            </div>
            <div class="mb-3">
            <label for="codigoPromo" class="form-label">Código promocional (opcional)</label>
            <input type="text" class="form-control" id="codigoPromo"/>
            </div>
            <div class="mb-3">
            <label for="tipoUsuario" class="form-label">Tipo de usuario</label>
            <select id="tipoUsuario" class="form-select" required>
                <option value="" disabled selected>Seleccione</option>
                <option value="normal">Cliente general</option>
                <option value="duoc">Estudiante Duoc</option>
            </select>
            <small class="text-chocolate">Estudiantes Duoc reciben torta gratis en su cumpleaños</small>
            </div>
            <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password" required />
            </div>
            <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
            <input type="password" class="form-control" id="confirmPassword" required />
            </div>
            <button type="submit" class="btn btn-rosa-suave w-100">Registrarse</button>
        </form>
        </div>

        <div className="my-5" /> 
        <UnFooter/>
        </>
    );
}

export default Register;